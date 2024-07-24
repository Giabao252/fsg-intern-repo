import { IsNotEmpty, IsTaxId } from "class-validator";

export class SsoUserDto {

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly name: string;
}