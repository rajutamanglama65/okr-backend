import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Key } from "libs/models/key.entity";
import { Repository } from "typeorm";
import { CreateKeyDto } from "./dto/create-key.dto";
import { UpdateKeyDto } from "./dto/update-key.dto";


@Injectable()
export class KeyService {
    constructor(
        @InjectRepository(Key)
        private repo: Repository<Key>
    ) {}

    async findOne(id: string) {
        return this.repo.findOne({
            where: {
                id
            }
        });
    }

    async find() {
        return this.repo.find();
    }

    async create(createKeyDto: CreateKeyDto) {
        let key: Key = new Key()

        key.title = createKeyDto.title
        key.description = createKeyDto.description

        return this.repo.save(key)
    }

    async update(id: string, updateKeyDto: UpdateKeyDto) {
        let key: Key = new Key()

        key.title = updateKeyDto.title;
        key.description = updateKeyDto.description;
        key.id = id;

        return this.repo.save(key)
    }

    async remove(id: string) {
        return this.repo.delete(id)
    }
}