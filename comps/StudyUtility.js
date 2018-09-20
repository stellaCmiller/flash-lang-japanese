import StudyFlashCard from './StudyFlashCard';
import { dueForStudy, fisherYatesShuffle } from '../helpers';
import fetch from 'isomorphic-unfetch';

const FinishedSession = function (props) {
    return (
        <div>
            <h3>Congrats! You're finished studying this deck for now.</h3>
            <button>Return to Dashboard</button>
        </div>
    )
}

const AnswerForm = function (props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Enter the English word for this reading: </label>
            <input type="text" onChange={props.onChange} />
            <input type="Submit" value="Enter" />
            <style jsx>{`
                form {
                    margin-top: 20px;
                    padding: 10px;
                }
            `}</style>
        </form>

    )
}

//Contains nearly all of the logic for studying cards and managing SRS levels
export default class StudyUtility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studyArray: [],
            numCards: 0,
            currentIndex: 0,
            answer: '',
            correct: false,
            incorrect: false,
            finished: false
        }
        this.loadStudyDeck = this.loadStudyDeck.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateCardStatus = this.updateCardStatus.bind(this);
    }

    //Stores the deck for study immediately on component load
    componentDidMount() {
        this.loadStudyDeck();
    }

    //Dynamically store the user answer as it's being typed
    handleChange(event) {
        this.setState({ answer: event.target.value });
    }

    checkAnswer(event) {
        event.preventDefault();
        event.target.reset();
        const currentCard = this.state.studyArray[this.state.currentIndex];
        const userInput = this.state.answer.toLowerCase();
        const answer = this.state.studyArray[this.state.currentIndex].english.toLowerCase();
        const that = this;
        let SRS = currentCard.SRSLevel
        if (userInput === answer) {
            //Increase SRS level when correct, unless it's at level 8
            SRS = (SRS < 8 ? SRS + 1 : SRS);
            this.setState({correct : true});
        } else {
            //Decrease SRS level when wrong, unless it's at level 1
            SRS = (SRS > 1 ? SRS - 1 : SRS);
            this.setState({incorrect: true});
        }
        this.updateCardStatus(currentCard, SRS);
        setTimeout(function(){ 
            that.setState({correct: false});
            that.setState({incorrect: false});
            if (that.state.numCards - 1 > that.state.currentIndex) {
                //Continue studying with the next card
                that.setState({ currentIndex: that.state.currentIndex + 1 })
            } else {
                //Else display finish message and redirect to main study page
                that.setState({ finished: true });
            }
        }, 2000); //Waits 2 full seconds 
    }

    //Sends put request to update the SRS level of the current card
    updateCardStatus(card, newSRS) {
        const dev="http://localhost:8080";
        const prod="https://flashlang-japanese.herokuapp.com"
        fetch(`${prod}/decks`, {
            method: 'PUT',
            body: JSON.stringify({ 'ID': card._id, 'SRS': newSRS }),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            console.log(res);
        })
    }

    //Out of all of the cards in the deck, only adds the ones due for study to the current study deck in random order
    loadStudyDeck() {
        let data = this.props.cards;
        let toStudy = data.filter(card => {
            let dueIn = dueForStudy(card.SRSLevel, card.lastStudied);
            if (dueIn == 0) {
                return true;
            }
        });
        console.log(toStudy);
        this.setState({ studyArray: fisherYatesShuffle(toStudy) });
        this.setState({ numCards: toStudy.length })
    }

    render() {
        let currentCard = this.state.studyArray[this.state.currentIndex];
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    { // Necessary because componentDidMount renders twice; setting props to undefined breaks things
                        (currentCard ? <StudyFlashCard incorrect={this.state.incorrect} correct={this.state.correct} kanji={currentCard.kanji} reading={currentCard.reading} english={currentCard.english} /> : null)
                    }
                </div>
                <div className="row justify-content-center">
                    {(this.state.finished ? <FinishedSession /> : <AnswerForm onChange={this.handleChange} onSubmit={this.checkAnswer}/>)}
                </div>
            </div>
        )
    }
}