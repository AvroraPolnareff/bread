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

import {RivenQueryService} from "../database/RivenQuery";
import {MarketUrlDto} from "@bread/shared/";
import {UserSession} from "../interfaces/UserSession";
import {Roles, RolesGuard} from "../guards/roles-guard";


@Controller('rivenhunter')
@UseGuards(RolesGuard)
export class RivenHunterController {
  constructor(
    private marketUrlService: RivenQueryService
  ) {}

  @Post()
  @Roles('bot')
  async add(@Body() body: MarketUrlDto) {
    return await this.marketUrlService.add(body)
  }

  @Post('/current_user')
  @Roles('user')
  async addForCurrentUser(@Body() body: MarketUrlDto, @Session() session: UserSession) {
    return await this.marketUrlService.add({...body, userId: session.breadUser.userId})
  }

  @Get()
  @Roles('bot')
  async find(@Query() query: Partial<MarketUrlDto>) {
    return await this.marketUrlService.find(query)
  }

  @Get('/current_user')
  @Roles('user')
  async findForCurrentUser(@Query() query: Partial<MarketUrlDto>, @Session() session: UserSession) {
    return await this.marketUrlService.find({...query, userId: session.breadUser.userId})
  }


  @Delete(':id')
  @Roles('bot')
  async delete(@Param('id') id: number) {
    await this.marketUrlService.delete({id})
  }

  @Delete('/current_user/:id')
  @Roles('user')
  async deleteForCurrentUser(@Param('id') id: number, @Session() session: UserSession) {
    const marketUrl = await this.marketUrlService.find({id})
    if (marketUrl[0].userId !== session.breadUser.userId) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    } else {
      await this.marketUrlService.delete({id})
    }
  }
}
