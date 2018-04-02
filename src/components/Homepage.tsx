import * as React from "react";
import * as ReactDOM from "react-dom";
import EmployeeComponent from './EmployeeComponent';
import TraineeComponent from './TraineeComponent';
import TrainingPlanComponent from './TrainingPlanComponent';
import TopPerformersComponent from './TopPerformersComponent'
import Employee from './Employee';
import TrainingPlan from './TrainingPlan';
import './default.scss';


export default class Home extends React.Component{
    public Employees: Array<Employee>;
    public TrainingPlans:Array<TrainingPlan>
    public constructor(props: any) {
        super(props);
        this.Employees = [{ Id: 1, Name: "Sai Venkata Reddy", Role: "trainee", Email: "reddy.venkat@gmail.com", Position: "Developer" }, { Id: 2, Name: "Ramesh Chennu", Role: "trainee", Email: "ramesh@gmail.com", Position: "Developer" }, { Id: 3, Name: "Uday Kumar Galedevara", Role: "trainee", Email: "uday@gmail.com", Position: "Data Scientist" },{Id: 4, Name: "Arun Dasari", Role: "trainee", Email: "arun@gmail.com", Position: "Developer"}];
        this.TrainingPlans=[{Id:1,Name:"Developer TrainingPlan",Description:"The Plan is About.Description........"},{Id:2,Name:"QA TrainingPlan",Description:"The Plan is About.Description........"},{Id:3,Name:"BI TrainingPlan",Description:"The Plan is About.Description........"}]

    }
    public render() {
        return (
            <div className='container'>
                <div className='header'><h1>Training Tracker</h1></div>
                <div className='widget-alignment'>
                    <div className='widget'><EmployeeComponent EmployeeList={this.Employees} /></div>
                    <div className='widget'><TraineeComponent EmployeeList={this.Employees}/></div>
                </div>
                <div className='widget-alignment'>
                    <div className='widget'><TrainingPlanComponent TrainingPlans={this.TrainingPlans}/></div>
                    <div className='widget'><TopPerformersComponent EmployeeList={this.Employees}/></div>
                </div>

            </div>
        )
    }
}


