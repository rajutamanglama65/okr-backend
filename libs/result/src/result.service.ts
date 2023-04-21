import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Result } from "libs/models/result.entity";
import { Repository } from "typeorm";
import { CreateResultDto } from "./dto/create-result.dto";
import { UpdateResultDto } from "./dto/update-result.dto";


@Injectable()
export class ResultService {
    constructor(
        @InjectRepository(Result)
        private repo: Repository<Result>
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

    async create(createResultDto: CreateResultDto) {
        let result: Result = new Result()

        result.title = createResultDto.title;
        result.description = createResultDto.description;

        return this.repo.save(result)
    }

    async update(id: string, updateResult: UpdateResultDto) {
        let result: Result = new Result()

        result.title = updateResult.title;
        result.description = updateResult.description;
        result.id = id;

        return this.repo.save(result)
    }

    async remove(id: string) {
        return this.repo.delete(id)
    }
}