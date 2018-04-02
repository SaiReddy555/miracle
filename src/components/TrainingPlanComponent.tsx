import * as React from "react";
import * as ReactDOM from "react-dom";
import './default.scss';
import TrainingPlan from './TrainingPlan';

interface ITrainingPlanComponentProps{
    TrainingPlans:Array<TrainingPlan>
}

export default class TrainingPlanComponent extends React.Component<ITrainingPlanComponentProps,any> {
    public constructor(props: ITrainingPlanComponentProps) {
        super(props);
    }
    public render() {
         return (
            <div>
                <div className="widget-header"><h2 >Training Plan</h2></div>
                {this.props.TrainingPlans.map((trainingPlan: TrainingPlan) => {
                    return(
                    <div key={trainingPlan.Id} className='widget-content'>
                        <h3>{trainingPlan.Name}</h3>
                        <p>{trainingPlan.Description}</p>
                    </div>
                    )
                })}

            </div>
        )
    }
}
