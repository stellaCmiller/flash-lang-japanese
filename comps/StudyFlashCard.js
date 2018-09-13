import { throws } from "assert";

export default class StudyFlashCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="big-card col-8">
                <h3>{this.props.reading}</h3>
                <h3>{this.props.kanji}</h3>
                <style jsx>{`
                    .big-card{
                        padding: 10px;
                        text-align: center;
                        margin-top: 10vh;
                        background-color: #eee;
                        height: 50vh;
                    }

                    h3 {
                        font-size: 600%
                    }
                `}</style>
            </div>
        )
    }
}