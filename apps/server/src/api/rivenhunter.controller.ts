import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Session,
  UseGuards
} from "@nestjs/common";

import {RivenQueryService} from "../database";
import {UserSession} from "../interfaces/UserSession";
import {Roles, RolesGuard} from "../guards/roles-guard";
import {RivenQueryDto} from "@bread/shared";


@Controller('rivenhunter')
@UseGuards(RolesGuard)
export class RivenHunterController {
  constructor(
    private rivenQueryService: RivenQueryService
  ) {}

  @Post()
  @Roles('bot')
  async add(@Body() body: RivenQueryDto) {
    return await this.rivenQueryService.add(body)
  }

  @Post('/current_user')
  @Roles('user')
  async addForCurrentUser(@Body() body: RivenQueryDto, @Session() session: UserSession) {
    return await this.rivenQueryService.add({...body, userId: session.breadUser.userId})
  }

  @Get()
  @Roles('bot')
  async find(@Query() query: Partial<RivenQueryDto>) {
    return await this.rivenQueryService.find(query)
  }

  @Get('/current_user')
  @Roles('user')
  async findForCurrentUser(@Query() query: Partial<RivenQueryDto>, @Session() session: UserSession) {
    return await this.rivenQueryService.find({...query, userId: session.breadUser.userId})
  }


  @Delete(':id')
  @Roles('bot')
  async delete(@Param('id') id: number) {
    await this.rivenQueryService.delete({id})
  }

  @Delete('/current_user/:id')
  @Roles('user')
  async deleteForCurrentUser(@Param('id') id: number, @Session() session: UserSession) {
    const marketUrl = await this.rivenQueryService.find({id})
    if (marketUrl[0].userId !== session.breadUser.userId) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    } else {
      await this.rivenQueryService.delete({id})
    }
  }
}
