import { UsersType } from "../Enum/users-type";

export interface User {
    
    id: number;
    userName: string;
    email: string;
    name: string;
    password: string;
    isAdmin: boolean;
    isBlocked: boolean;
    user : UsersType;
}
 export class  User{

    constructor() {
        this.id = 0;
        this.userName = '';
        this.email = '';
        this.name = '';
        this.password = '';
        this.isAdmin = false;
        this.isBlocked = false;
        this.user = UsersType.Agent;
      }
 }