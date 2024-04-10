import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {DataSource} from "typeorm";
import {JwtPayload} from "./jwt-payload.interface";
import {User} from "../user/entities/user.entity";
import {LoginDto} from "./dto/login.dto";
import {JwtService} from "@nestjs/jwt";
import {SignUpDto} from "./dto/sign-up.dto";

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        private dataSource: DataSource,
        private readonly jwtService: JwtService
    ) {
    }

    composeToken(user: Pick<User, 'user_id'>): string {
        const payload: JwtPayload = {
            user_id: user.user_id
        }
        return `${this.jwtService.sign(payload)}`
    }

    hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10)
    }

    checkPassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash)
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

    findOneByEmail(email: string) {
        return this.dataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .where('u.email = :email', {
                email: email
            })
            .getOne();
    }

    async signUp(body: SignUpDto) {
        const user: User | null = await this.dataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .where('u.email = :email', {
                email: body.email
            })
            .orWhere('u.phone = :phone', {
                phone: body.phone
            })
            .getOne();
        if (user) {
            throw new BadRequestException()
        }
        body.password = await this.hashPassword(body.password)
        const userDb = await this.dataSource.getRepository(User).save(body)

        const token = this.composeToken(userDb)
        return {
            token,
            user: userDb,
        };

    }

    async login(body: LoginDto) {

        const user = await this.findOneByEmail(body.email);
        if (!user) {
            throw new UnauthorizedException();
        }
        const checkPassword = await this.checkPassword(
            body.password,
            user.password,
        );

        if (!checkPassword) {
            throw new BadRequestException();
        }
        delete user.password;
        const token = this.composeToken(user);
        return {
            token,
            user,
        };
    }


}
