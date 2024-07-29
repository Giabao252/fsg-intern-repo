import { Controller, Post, Body } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { UserService } from './user.service';

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
);

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/login')
    async login(@Body('token') token): Promise<any> {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        // log the ticket payload in the console to see what we have
        //console.log(ticket.getPayload());

        const {email, name} = ticket.getPayload();
        const data = await this.userService.loginSSO({email, name});
        return {
            data, 
            message: "login succeed",
        };

    }
}