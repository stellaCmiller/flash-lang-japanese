import {dueForStudy} from '../helpers';

function StudyAlert(props){
    if (props.dueIn == 0){
        return <p>Due for Review</p>
    } else {
        return <p>Due in {props.dueIn} hours</p>
    }   
}

export default class FlashCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            study: false,
            dueIn: null
        }
    }

    //logic that determines if a flashcard is due for study based on SRS methods
    componentDidMount(){
        let dueIn = dueForStudy(this.props.SRS, this.props.lastStudied)
        let rounded = Math.round(dueIn)
        if (dueIn === 0){
            this.setState({study: true})
        } else {
            this.setState({dueIn: rounded})
        }
    }

    render(){
        let goStudy = (this.state.study ? '#ff3d4e' : '#888888' );
        return(
            <div className="flash-card">
                <p>{this.props.english}</p>
                <p>{this.props.reading}</p>
                <p>{this.props.kanji}</p>
                {this.state.study ? <StudyAlert dueIn={0}/> : <StudyAlert dueIn={this.state.dueIn}/>}
                <style jsx>{`
                    .flash-card{
                        display: inline-block;
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
                `}</style>
            </div>
        )
    }
}