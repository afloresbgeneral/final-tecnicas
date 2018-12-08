export class UserModel {
    constructor(
        public userName: string,
        public _id: string,
        public name: string,
        public lastName: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string
    ) {}
}
