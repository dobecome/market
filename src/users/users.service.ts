import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
import { v4 as uuidv4 } from "uuid";
import * as argon from "argon2";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const newHash = await argon.hash(dto.hash);

    return this.usersRepository.create({
      userId: uuidv4(),
      email: dto.email,
      hash: newHash,
      marketId: [],
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }

}
