import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<import("./interfaces/user.interface").User>;
    signin(email: string, pw: string): Promise<import("./interfaces/user.interface").User>;
    findAll(): Promise<import("./interfaces/user.interface").User[]>;
}
