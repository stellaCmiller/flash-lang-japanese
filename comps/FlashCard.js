import {dueForStudy} from '../helpers';

function StudyAlert(props){
    if (props.dueIn == 0){
        return <p>Due for Review</p>
    } else {
        return <p>Due in {props.dueInRounded} {props.units}</p>
    }   
}

export default class FlashCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            study: false,
            dueIn: null,
            dueInRounded: null,
            units: "hours"
        }
    }

    //logic that determines if a flashcard is due for study based and displays time until study in a reasonable format
    componentDidMount(){
        const dueIn = dueForStudy(this.props.SRS, this.props.lastStudied);
        let rounded = Math.round(dueIn);
        if (dueIn > 730){
            rounded = Math.round(rounded/24/7/4); // change to months when over 730 hours
            this.setState({units: "months"});
        } else if (dueIn > 168){ 
            rounded = Math.round(rounded/24/7); //change to weeks when over 168 hours
            this.setState({units: "weeks"});
        } else if (dueIn > 48){ 
            rounded = Math.round(rounded/24); //change to days when over 24 hours
            this.setState({units: "days"});
        } else if (dueIn < 1){ 
            rounded = Math.round(rounded*60);
            this.setState({units: "minutes"}); //change to minutes when under 1 hour
        }
        if (dueIn === 0){
            this.setState({study: true})
        } else {
            this.setState({dueIn: dueIn})
            this.setState({dueInRounded: rounded})
        }
    }

    render(){
        let goStudy = (this.state.study ? '#ff3d4e' : '#888888' );
        return(
            <div className="flash-card">
                <p>{this.props.english}</p>
                <p>{this.props.reading}</p>
                <p>{this.props.kanji}</p>
                {this.state.study ? <StudyAlert dueIn={0}/> : <StudyAlert dueInRounded={this.state.dueInRounded} dueIn={this.state.dueIn} units={this.state.units}/>}
                <style jsx>{`
                    .flash-card{
                        text-align: center;
                        font-size: 16pt;
                        margin: 10px 5px 10px 5px;
                        min-width: 200px;
                        min-height: 150px;
                        padding: 10px;
                        background-color: #eee;
                        border: 1px solid black;
                        box-shadow: 5px 10px 18px ${goStudy};
                    }

                    .flash-card:hover{
                        margin-top: 5px;
                    }

                    @media only screen and (min-width: 640px){ 
                        .flash-card {
                            display: inline-block;
                        }
                    }
                `}</style>
            </div>
        )
    }
}