import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(userId: string): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(dto: CreateUserDto): Promise<User>;
    updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User>;
}
