import { UserI } from './inputs/UserI';
import { TodoI } from './TodoI';

export interface TeamI {
    name: string;
    status: boolean;
    dateCreated: boolean;
    dateUpdated: boolean;
    owner: UserI;
    users: Array<UserI>;
    todos: Array<TodoI>;
}
