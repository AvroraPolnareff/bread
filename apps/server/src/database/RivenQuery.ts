import {Column,  Entity, PrimaryGeneratedColumn, Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {RivenQueryDto} from "@bread/shared";
import {InjectRepository} from "@nestjs/typeorm";

@Entity()
export class RivenQuery {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: string

  @Column({nullable: true})
  weapon: string

  @Column("simple-array")
  positive: string[]

  @Column({nullable: true})
  negative?: string

  @Column({nullable: true})
  polarity?: string

  @Column({nullable: true})
  modRank?: string

  @Column({nullable: true})
  mastery?: string

  @Column({nullable: true})
  platinumLimit?: number

  @Column()
  channelId: string

  @Column()
  guildId: string

}

@Injectable()
export class RivenQueryService {
  constructor(
    @InjectRepository(RivenQuery)
    private queryRepository: Repository<RivenQuery>
  ) {}

  async add(rivenQueryDto: RivenQueryDto) {
    const queries = await this.queryRepository.find(rivenQueryDto)
    if (queries.length) {
      throw new HttpException('url already added', HttpStatus.CONFLICT)
    }
    const entity = this.queryRepository.create(rivenQueryDto)
    return await this.queryRepository.save(entity)
  }

  async delete(rivenQueryDto: Partial<RivenQueryDto>) {
    const entities = await this.queryRepository.find(rivenQueryDto)
    for (const entity of entities) {
      await this.queryRepository.delete(entity)
    }
  }

  async findById(id: number) {
    const entity = await this.queryRepository.findOne({id})
    if (!entity) {
      throw new HttpException('query not found', HttpStatus.NOT_FOUND)
    }
    return entity
  }

  async find(rivenQueryDto: Partial<RivenQueryDto>) {
    return await this.queryRepository.find(rivenQueryDto)
  }
}
