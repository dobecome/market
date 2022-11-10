import { CreateUserDto } from "./dto/create-user.dto";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(dto: CreateUserDto): Promise<User>;
    signin(email: string, pw: string): Promise<User>;
    findAll(): Promise<User[]>;
}
