import { UserI } from './inputs/UserI';
import { TodoI } from './TodoI';

export interface TeamI {
    uid?:string;
    name: string;
    status: 'ACTIVE'| 'DISABLED'|'BLOCKED';
    dateCreated: Date;
    dateUpdated: Date;
    owner: UserI;
    users: Array<string>;
    todos: Array<TodoI>;
}
