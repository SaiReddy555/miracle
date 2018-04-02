export default class TrainingPlan {
    Id: number;
    Name: string;
    Description: string;
    constructor(args:any) {
        this.Id=args.Id;
        this.Description=args.Description;
        this.Name=args.Name;
    }

}
