import {Body, Controller, Get, HttpException, HttpStatus, Put, Session, UseGuards} from "@nestjs/common";
import {Roles, RolesGuard} from "../guards/roles-guard";
import {UserSession} from "../interfaces/UserSession";
import {BreadUserService} from "../database";
import {UpdateCurrentUserDto} from "@bread/shared";


@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(
    private readonly breadUserService: BreadUserService
  ) {}

  @Get("/current")
  @Roles('user')
  getCurrentUser(@Session() session: UserSession) {
    if (session.breadUser) {
      return session.breadUser
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }
  }

  @Put("/current")
  @Roles('user')
  async updateCurrentUser(
    @Body() updateCurrentUserDto: UpdateCurrentUserDto,
    @Session() session: UserSession
  ) {
    return await this.breadUserService.update(session.breadUser.id, updateCurrentUserDto)
  }
}


