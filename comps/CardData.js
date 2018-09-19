import DataRow from './DataRow';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

function NoData(){
    return (
        <div>
            <h3>Sorry, We didn't find any results for that word :(</h3>
        </div>
    )
}

function CardsInDeck(props){
    return(
        <div>
            <p style={{display: 'inline'}}>Number of cards added to deck: <span>{props.deck}</span></p>
            <Link href="/study">
                <a><button style={{display: 'inline', margin: '5px'}} onClick={props.onClick}>Save Cards</button></a>
            </Link>
        </div>
    )
}

export default class CardData extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            deck: [],
            saved: false
        }
        this.addCardToDeck = this.addCardToDeck.bind(this);
        this.saveDeck = this.saveDeck.bind(this);
    }

    //Sends the whole client side deck to MongoDB
    saveDeck(){
        const dev = '//localhost:8080'
        const prod = `https://flashlang-japanese.herokuapp.com`
        const that = this;
        fetch(`${prod}/decks`, {
            method: "POST",
            body: JSON.stringify(this.state.deck),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok){
                that.setState({saved: true});
                console.log("We're A-Okay!");
            }
        })
    }

    //Updates the state of this component to store flashcard objects client side
    addCardToDeck(eng, reb, keb){
        const deck = this.state.deck
        deck.push({english: eng, reading: reb, kanji: keb, lastStudied: new Date(), SRSLevel: 1});
        this.setState({deck: deck});
    }

    //Returns a collection of DataRows if results were found, else returns a not found message
    //Displays a loading spinner while searching for data
    render() {
        const rawData = this.props.data;
        let dataRows;
        if (!this.props.empty){
            dataRows = rawData.map(e =>
                <DataRow onClick={this.addCardToDeck} defid={e.def_id} keb={e.keb} reb={e.reb} gloss={e.gloss} repri={e.re_pri} transition={this.props.transition}/>
            );
        } else {
            dataRows = <NoData />
        }
        return(
            <div>
                <CardsInDeck onClick={this.saveDeck} deck={this.state.deck.length} />
                {this.props.loading ? <img src='/assets/Blocks-1s-80px.gif'/> : dataRows}
            </div>
        )
    }
}

