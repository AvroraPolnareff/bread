import {Column,  Entity, PrimaryGeneratedColumn, Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {MarketUrlDto} from "@bread/shared";
import {InjectRepository} from "@nestjs/typeorm";

@Entity()
export class MarketUrl {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: string

  @Column()
  url: string

  @Column()
  platinumLimit: number

  @Column()
  channelId: string

  @Column()
  guildId: string

}

@Injectable()
export class MarketUrlService {
  constructor(
    @InjectRepository(MarketUrl)
    private urlRepository: Repository<MarketUrl>
  ) {}

  async add(marketUrlDto: MarketUrlDto) {
    const urls = await this.urlRepository.find(marketUrlDto)
    if (urls.length) {
      throw new HttpException('url already added', HttpStatus.CONFLICT)
    }
    const entity = this.urlRepository.create(marketUrlDto)
    return await this.urlRepository.save(entity)
  }

  async delete(marketUrlDto: Partial<MarketUrlDto>) {
    const entities = await this.urlRepository.find(marketUrlDto)
    for (const entity of entities) {
      await this.urlRepository.delete(entity)
    }
  }

  async findById(id: number) {
    const entity = await this.urlRepository.findOne({id})
    if (!entity) {
      throw new HttpException('url not found', HttpStatus.NOT_FOUND)
    }
    return entity
  }

  async find(marketUrlDto: Partial<MarketUrlDto>) {
    return await this.urlRepository.find(marketUrlDto)
  }
}
