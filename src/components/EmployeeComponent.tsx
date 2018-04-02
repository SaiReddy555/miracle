import * as React from "react";
import * as ReactDOM from "react-dom";
import Employee from './Employee'
import './default.scss'
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Modal } from 'office-ui-fabric-react/lib/Modal';


export interface IEmployeeComponentProps {
    EmployeeList: Array<Employee>;

}
export interface IEmployeeComponentState {
    showModal: boolean;
    trainee:Employee;

}

export default class EmployeeComponent extends React.Component<IEmployeeComponentProps, IEmployeeComponentState> {
    employeePersona = {
        imageInitials: 'AL',
        primaryText: 'Annie Lindqvist',
        secondaryText: 'Software Engineer',

    };
    public constructor(props: IEmployeeComponentProps,state:IEmployeeComponentState) {
        super(props);
        this.state = { showModal: false, trainee: null };
          this._onClick = this._onClick.bind(this);
    }

    public render() {
        return (
            <div>
                <div className="widget-header"><h2 >Employees</h2></div>
                {this.props.EmployeeList.map((employee: Employee) => {
                    this.employeePersona.primaryText = employee.Name;
                    this.employeePersona.secondaryText = employee.Position;
                    var matches = employee.Name.match(/\b(\w)/g);
                    this.employeePersona.imageInitials = (matches.join('')).slice(0, 2);
                    return (
                        <div key={employee.Id} className='widget-content' onClick={() => { this._onClick(employee) }}>
                            <Persona {...this.employeePersona}
                                size={PersonaSize.size40}
                            />
                        </div>
                    )
                })}
                <Modal isOpen={this.state.showModal} onDismiss={this._closeModal} isBlocking={false} containerClassName='ms-modalExample-container' >
                    <div className='ms-modalExample-header'>
                        <span className="modal-header">Employee Details</span>
                    </div>
                    <div className='ms-modalExample-body'>
                        <div className="row">
                            <div className="leftcolumn"><p>Name :</p></div>
                            <div className="Rightcolumn"><p>{this.state.trainee == null ? null : this.state.trainee.Name}</p></div>
                        </div>
                        <div className="row">
                            <div className="leftcolumn"><p>Role :</p></div>
                            <div className="Rightcolumn"><p>{this.state.trainee == null ? null : this.state.trainee.Role}</p></div>
                        </div>
                        <div className="row">
                            <div className="leftcolumn"><p>Email :</p></div>
                            <div className="Rightcolumn"><p>{this.state.trainee == null ? null : this.state.trainee.Email}</p></div>
                        </div>
                    </div>
                </Modal>
            </div>

        )
    }
    public _onClick(employee: Employee) {
        this._showModal();
        this.setState({ trainee: employee });

    }
    private _showModal = (): void => {
        this.setState({ showModal: true });
    }

    private _closeModal = (): void => {
        this.setState({ showModal: false });
    }
}
