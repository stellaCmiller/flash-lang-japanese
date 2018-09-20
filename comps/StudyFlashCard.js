export default class StudyFlashCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const correct = this.props.correct;
        const incorrect = this.props.incorrect;
        let displayCorrect = (correct ? 'box-shadow: inset 0px 0px 10px 10px green' : null);
        let displayWrong = (incorrect ? 'box-shadow: inset 0px 0px 10px 10px red' : null);
        console.log(displayCorrect);
        return(
            <div className="big-card col-8">
                <h3>{this.props.reading}</h3><br />
                <h3>{this.props.kanji}</h3>
                <style jsx>{`
                    .big-card {
                        ${displayCorrect};
                        ${displayWrong};
                        padding: 10px;
                        text-align: center;
                        margin-top: 10vh;
                        background-color: #eee;
                        min-height: 20vh;
                        min-width: 70vw;
                    }
                    h3 {
                        font-size: 30pt;
                    }

                    @media only screen and (min-width: 640px){ 
                        .big-card {
                            min-height: 30vh;
                            max-width: 30vw;
                        }
                        h3 {
                            font-size: 600%
                        }
                    }

                    

                    
                `}</style>
            </div>
        )
    }
}