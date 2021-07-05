import { TodoI } from './TodoI';

export interface TeamI {
    uid?:string;
    name: string;
    status: 'ACTIVE'| 'DISABLED'|'BLOCKED';
    dateCreated: Date;
    dateUpdated: Date;
    owner: {id:string};
    users: Array<string>;
    todos: Array<TodoI>;
}
