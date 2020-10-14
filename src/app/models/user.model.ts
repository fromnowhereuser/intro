export class User {
    public isAdmin: boolean = false;
    organisation: string;
    password: string;

    constructor(
        public id: number,
        public email: string,
    ) {
        this.isAdmin = false;
    }

    toggleAdmin() {
        this.isAdmin = !this.isAdmin;
    }
}
