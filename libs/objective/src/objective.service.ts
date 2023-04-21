import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Objective } from 'libs/models/objective.entity';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';

@Injectable()
export class ObjectiveService {
    constructor(
        @InjectRepository(Objective)
        private repo: Repository<Objective>,
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

    async create(createObjectiveDto: CreateObjectiveDto) {
        let objective: Objective = new Objective()

        objective.title = createObjectiveDto.title;
        objective.description = createObjectiveDto.description;

       return this.repo.save(objective)
    }

    async update(id: string, updateObjectiveDto: UpdateObjectiveDto) {
        let objective: Objective = new Objective()
        objective.title = updateObjectiveDto.title;
        objective.description = updateObjectiveDto.description;
        objective.id = id;

        return this.repo.save(objective);
    }

    async remove(id: string) {
        return this.repo.delete(id)
    }
}