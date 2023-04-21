import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { KeyService } from "libs/keys/src";
import { CreateKeyDto } from "libs/keys/src/dto/create-key.dto";
import { UpdateKeyDto } from "libs/keys/src/dto/update-key.dto";
import { Key } from "libs/models/key.entity";


@Controller("key")
export class KeyController {
    @Inject(KeyService) 
    private readonly keyService: KeyService;

    @Get()
    async find(): Promise<Key[]> {
        return this.keyService.find()
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.keyService.findOne(id)
    }

    @Post()
    async create(@Body() createKeyDto: CreateKeyDto) {
        return this.keyService.create(createKeyDto)
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updatekeyDto: UpdateKeyDto) {
        return this.keyService.update(id, updatekeyDto)
    }

    @Delete(":id") 
    async remove(@Param("id") id: string) {
        return this.keyService.remove(id)
    }
}