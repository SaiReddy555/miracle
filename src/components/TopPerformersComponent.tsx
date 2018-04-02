import * as React from "react";
import * as ReactDOM from "react-dom";
import Employee from './Employee';
import './default.scss';
import {Persona,PersonaSize,PersonaPresence} from 'office-ui-fabric-react/lib/Persona';

export interface ITopPerformersComponentProps{
 EmployeeList:Array<Employee>;
}

export default class TopPerformersComponent extends React.Component<ITopPerformersComponentProps, any> {
    public constructor(props: ITopPerformersComponentProps) {
        super(props);
    }
    employeePersona = {
        imageInitials: 'AL',
        primaryText: 'Annie Lindqvist',
        secondaryText: 'Software Engineer',
    };
    public render() {
        return (
            <div>
                <div className="widget-header"><h2 >Top Performers</h2></div>
                {this.props.EmployeeList.map((employee: Employee) => {
                  this.employeePersona.primaryText = employee.Name;
                   this.employeePersona.secondaryText = employee.Position;
                    var matches = employee.Name.match(/\b(\w)/g);
                    this.employeePersona.imageInitials = (matches.join('')).slice(0, 2);
                    return (
                        <div key={employee.Id} className='widget-content'>
                            <Persona {...this.employeePersona}
                                size={PersonaSize.size40}
                            />

                        </div>
                    )
                })}

            </div>
        )
    }
}
