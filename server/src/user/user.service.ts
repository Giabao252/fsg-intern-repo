import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SsoUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async loginSSO({email, name}: SsoUserDto): Promise<any> {
        const user = await this.userRepository.findOne({where: {email: email}})

        //first time login aka registration
        if (!user) {
            const newUser = this.userRepository.create({ email: email, username: name });
            await this.userRepository.save(newUser);
            return newUser;
        } 
        console.log(user);
        return user;
    }


}