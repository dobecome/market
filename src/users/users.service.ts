import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { v4 as uuidv4 } from "uuid";
import * as argon from "argon2";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_MODEL")
    private userModel: Model<User>
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const newHash = await argon.hash(dto.hash);
    return this.userModel.create({
      userId: uuidv4(),
      email: dto.email,
      hash: newHash,
      marketId: dto.marketId,
    });
  }

  async signin(email: string, pw: string): Promise<User> {
    const hash = await argon.hash(pw);
    const user = this.userModel.findOne({
      where: {
        email,
        hash,
      },
    });
    return user.exec();
  }

  async findAll(): Promise<User[]> {
    const users = this.userModel.find();
    return users.exec();
  }

  // async getUserById(userId: string) {
  //   return this.userModel.findOne({ userId });
  // }

  // async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
  //   return this.userModel.findOneAndUpdate({ userId }, userUpdates);
  // }
}
