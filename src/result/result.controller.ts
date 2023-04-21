import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { Result } from "libs/models/result.entity";
import { ResultService } from "libs/result/src";
import { CreateResultDto } from "libs/result/src/dto/create-result.dto";
import { UpdateResultDto } from "libs/result/src/dto/update-result.dto";


@Controller("result")
export class ResultController {
    @Inject(ResultService)
    private readonly resultService: ResultService;

    @Get()
    async find(): Promise<Result[]> {
        return this.resultService.find()
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.resultService.findOne(id)
    }

    @Post()
    async create(@Body() createResultDto: CreateResultDto) {
        return this.resultService.create(createResultDto)
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updateResultDto: UpdateResultDto) {
        return this.resultService.update(id, updateResultDto)
    }

    @Delete(":id") 
    async remove(@Param("id") id: string) {
        return this.resultService.remove(id)
    }
}