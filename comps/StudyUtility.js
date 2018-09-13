import StudyFlashCard from './StudyFlashCard';
import {dueForStudy, fisherYatesShuffle} from '../helpers';


export default class StudyUtility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studyArray: [],
            currentIndex: 0,
            answer: ''
        }
        this.loadStudyDeck = this.loadStudyDeck.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //Stores the deck for study immediately on component load
    componentDidMount(){
        this.loadStudyDeck();
    }

    //Dynamically store the user answer as it's being typed
    handleChange(event){
        this.setState({answer: event.target.value});
    }

    checkAnswer(event){
        event.preventDefault();
        let currentCard = this.state.studyArray[this.state.currentIndex];
        let userInput = this.state.answer.toLowerCase();
        let answer = this.state.studyArray[this.state.currentIndex].english.toLowerCase();
        if (userInput === answer){
            console.log("YAS QUEEN YOU DID IT")
        } else {
            console.log("ew no");
        }

    }

    //Out of all of the cards in the deck, only adds the ones due for study to the current study deck in random order
    loadStudyDeck(){
        let data = this.props.cards;
        let toStudy = data.map(card => {
            let dueIn = dueForStudy(card.SRSLevel, card.lastStudied);
            if (dueIn === 0){
                return card;
            }
        });
        this.setState({studyArray: fisherYatesShuffle(toStudy)});
    }

    render(){
        let currentCard = this.state.studyArray[this.state.currentIndex];
        return(
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    { // Necessary because componentDidMount renders twice; setting props to undefined breaks things
                        (currentCard ? <StudyFlashCard kanji={currentCard.kanji} reading={currentCard.reading} english={currentCard.english}/> : null)
                    }
                </div>
                <div className="row justify-content-center">
                    <form onSubmit={this.checkAnswer}>
                        <label>Enter the English word for this reading: </label>
                        <input type="text" onChange={this.handleChange} />
                        <input type="Submit" value="Enter" />
                    </form>
                    <style jsx>{`
                        form{
                            margin-top: 20px;
                            padding: 10px;
                        }
                    `}</style>
                </div>
            </div>
        )
    }
}