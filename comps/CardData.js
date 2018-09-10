import DataRow from './DataRow';

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
            <p>Number of cards added to deck: <span>{props.deck}</span></p>
        </div>
    )
}

export default class CardData extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            deck: []
        }
        this.addCardToDeck = this.addCardToDeck.bind(this);
    }

    addCardToDeck(defid){
        const deck = this.state.deck
        deck.push(defid);
        this.setState({deck: deck});
    }

    //Returns a collection of DataRows if results were found, else returns a not found message
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
                <CardsInDeck deck={this.state.deck.length} />
                {this.props.loading ? <img src='/assets/Blocks-1s-80px.gif'/> : dataRows}
            </div>
        )
    }
}

