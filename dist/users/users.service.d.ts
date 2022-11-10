import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(dto: CreateUserDto): Promise<User>;
    signin(email: string, pw: string): Promise<User>;
    getUserById(userId: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<User[]>;
    updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User>;
}
