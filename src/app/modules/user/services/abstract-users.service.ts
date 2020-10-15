import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

// @Injectable({
//     providedIn: 'root',
//     useClass: UsersService
// })
export abstract class AbstractUserService {

    public usersSubject: BehaviorSubject<User[]>;

    constructor() {
        this.usersSubject = new BehaviorSubject<User[]>([]);
    }

    abstract addUser(user: User): Observable<Array<User>>;
    abstract deleteUser(todel: User);
    abstract getUsers(): Observable<Array<User>>;
    abstract isEmailTaken(email: string): Observable<Boolean>;
}