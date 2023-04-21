import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { Objective } from 'libs/models/objective.entity';
import { ObjectiveService } from 'okr/objective';
import { CreateObjectiveDto } from 'okr/objective/dto/create-objective.dto';
import { UpdateObjectiveDto } from 'okr/objective/dto/update-objective.dto';

@Controller('objective')
export class ObjectiveController {
    @Inject(ObjectiveService)
    private readonly objectiveService: ObjectiveService;

    @Get()
    async find(): Promise<Objective[]> {
        return this.objectiveService.find();
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.objectiveService.findOne(id)
    }

    @Post()
    async create(@Body() createObjectiveDto: CreateObjectiveDto) {
        return this.objectiveService.create(createObjectiveDto)
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updateObjective: UpdateObjectiveDto) {
        return this.objectiveService.update(id, updateObjective)
    }

    @Delete(":id") 
    async remove(@Param("id") id: string) {
        return this.objectiveService.remove(id)
    }

}
