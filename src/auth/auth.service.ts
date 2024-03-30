import {Injectable, UnauthorizedException} from '@nestjs/common';
import {DataSource} from "typeorm";
import {JwtPayload} from "./jwt-payload.interface";
import {User} from "../user/entities/user.entity";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private dataSource: DataSource,
    ) {
    }

    ValidateUser(payload: JwtPayload) {
        return this.dataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .where('u.user_id = :user_id', {
                user_id: payload.user_id
            })
            .getOne();
    }
    findOneByEmail(email:string){
        return this.dataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .where('u.email = :email', {
                email: email
            })
            .getOne();
    }
    async login(body: LoginDto) {

        const user = await this.findOneByEmail(body.email);
        if (!user || !user.password) {
            throw new UnauthorizedException();
        }
        const checkPassword = await this.checkPasswordHash(
            body.password,
            user.password,
        );
        if (!checkPassword) {
            throw new IncorrectPassword();
        }
        delete user.password;
        const token = this.composeToken(user);
        return {
            token,
            user,
        };
    }


}
