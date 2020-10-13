import {Column, Entity, PrimaryGeneratedColumn, Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {BreadUserDto} from "@bread/shared";

@Entity()
export class BreadUser {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: string

  @Column({unique: true})
  email: string

  @Column({default: true})
  newUser: boolean = true
}

@Injectable()
export class BreadUserService {
  constructor(
    @InjectRepository(BreadUser)
    private readonly breadUserRepository: Repository<BreadUser>
  ) {}

  async add(breadUser: BreadUserDto) {
    const users = await this.breadUserRepository.find(breadUser)
    if (users.length) {
      throw new HttpException('user already added', HttpStatus.CONFLICT)
    }
    const entity = this.breadUserRepository.create(breadUser)
    return await this.breadUserRepository.save(entity)
  }

  async findOne(user: Partial<BreadUser>) {
    return await this.breadUserRepository.findOne(user)
  }
}
