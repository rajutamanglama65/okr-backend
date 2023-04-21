import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "libs/models/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>
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

    async create(createUserDto: CreateUserDto) {
        let user: User = new User()

        user.name = createUserDto.name;

        return this.repo.save(user)
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        let user: User = new User()

        user.name = updateUserDto.name;
        user.id = id;

        return this.repo.save(user)
    }

    async remove(id: string) {
        return this.repo.delete(id)
    }
}