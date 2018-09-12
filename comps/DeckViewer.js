import fetch from 'isomorphic-unfetch';
import FlashCard from './FlashCard';

export default class DeckViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            studyMode: false
        }
        this.loadDecks = this.loadDecks.bind(this);
        this.studyAll = this.studyAll.bind(this);
    }

    studyAll(){
        this.setState({studyMode: true});
    }

    //load all cards upon entry to the deck page
    componentDidMount(){
        this.loadDecks();
    }

    //Route to be changed to /users/{userid}/decks/:deckid
    loadDecks() {
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
                <div className="deck-holder">
                    <h3>Viewing "Deck" with {this.state.cards.length} Cards</h3>
                    <button>Study Cards Due</button>
                </div>
                {this.state.study ? <StudyUtility/> : cardCollection}
                <style jsx>{`
                    .deck-holder{
                        margin: 10px;
                        padding: 10px;
                    }
                `}</style>
            </div>
        )
    }
}