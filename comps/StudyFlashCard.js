export default class StudyFlashCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="big-card col-8">
                <h3>{this.props.reading}</h3><br />
                <h3>{this.props.kanji}</h3>
                <style jsx>{`
                    .big-card {
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