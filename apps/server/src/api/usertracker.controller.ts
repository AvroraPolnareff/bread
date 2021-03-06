import {Body, Controller, Delete, Get, Param, Post, Query, UseGuards} from "@nestjs/common";
import {Repository} from "typeorm";
import {Prey} from "../database";
import {PreyDto} from "@bread/shared";
import {InjectRepository} from "@nestjs/typeorm";
import {WfMarketAPI} from "@bread/wf-market";
import {Roles, RolesGuard} from "../guards/roles-guard";

@Controller('usertracker')
@UseGuards(RolesGuard)
export class UserTrackerController {
  constructor(
    @InjectRepository(Prey)
    private preyRepository: Repository<Prey>
  ) {}

  @Post()
  @Roles("bot")
  async add(@Body() body: Partial<PreyDto>) {
    const api = new WfMarketAPI()
    const profile = await api.profile(body.nickname)
    const entity = this.preyRepository.create({
      ...body,
      status: profile.status,
      lastLogin: profile.last_seen
    })
    return await this.preyRepository.save(entity)
  }

  @Get('/find')
  @Roles("bot")
  async find(@Query() query: Partial<PreyDto>) {
    return await this.preyRepository.find(query)
  }

  @Delete(':id')
  @Roles("bot")
  async delete(@Param('id') id: number) {
    await this.preyRepository.delete(id)
  }
}
