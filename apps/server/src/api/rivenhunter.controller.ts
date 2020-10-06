import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";

import {MarketUrlService} from "../database/MarketUrl";
import {MarketUrlDto} from "@bread/shared/";


@Controller('rivenhunter')
export class RivenHunterController {
  constructor(
    private marketUrlService: MarketUrlService
  ) {}

  @Post()
  async add(@Body() body: MarketUrlDto) {
    return await this.marketUrlService.add(body)
  }

  @Get('/find')
  async find(@Query() query: Partial<MarketUrlDto>) {
    return await this.marketUrlService.find(query)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.marketUrlService.delete({id})
  }
}
