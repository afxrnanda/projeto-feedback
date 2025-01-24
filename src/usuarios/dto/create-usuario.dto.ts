import { IsString } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    usuario:string;

    @IsString()
    senha: string;

}
