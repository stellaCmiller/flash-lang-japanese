import fetch from 'isomorphic-unfetch';
import FlashCard from './FlashCard';
import StudyUtility from './StudyUtility';

function DeckInfo(props){
    return(
        <div className="deck-info">
            <h3>Viewing "Deck" with {props.length} Cards</h3>
            <button onClick={props.onClick}>Study Cards Due</button>
            <style jsx>{`
                .deck-info{
                    margin: 10px;
                    padding: 10px;
                }
            `}</style>
        </div>
    )
}

export default class DeckViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            studyMode: false
        }
        this.loadCards = this.loadCards.bind(this);
        this.studyAll = this.studyAll.bind(this);
    }

    studyAll(){
        this.setState({studyMode: true});
    }

    //load all cards upon entry to the deck page
    componentDidMount(){
        this.loadCards();
    }

    //Route to be changed to /users/{userid}/decks/:deckid
    loadCards() {
        const that = this;
        fetch('//localhost:3000/decks').then(function(response) {
            if (response.status >= 400) {
                throw new Error("Something went wrong, that's all I know :(");
            }
            console.log("Cards Found!")
            response.json().then(function (data) {
                that.setState({ cards: data, test: false });
            })
        }).catch(err => console.log(err));
    }

    render() {
        const rawData = this.state.cards;
        let cardCollection;
        cardCollection = rawData.map(card => 
            <FlashCard reading={card.reading} english={card.english} kanji={card.kanji} lastStudied={card.lastStudied} SRS={card.SRSLevel}/>
        )
        return (
            <div className="container-fluid">
                {this.state.studyMode ? null : <DeckInfo onClick={this.studyAll} length={this.state.cards.length}/>}
                {this.state.studyMode ? <StudyUtility cards={rawData}/> : cardCollection}
            </div>
        )
    }
}