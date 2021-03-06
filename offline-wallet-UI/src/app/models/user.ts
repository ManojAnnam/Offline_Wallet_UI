import { Base } from './base';

export class User extends Base {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
}
