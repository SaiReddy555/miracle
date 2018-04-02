export  default class Employee {
    Id: number;
    Name: string;
    Role: string;
    Email: string;
    Position: string;
    constructor(args: any) {
        this.Id = args.Id;
        this.Name = args.Name;
        this.Position = args.Position;
        this.Role = args.Role;
        this.Email = args.Email;

    }
}