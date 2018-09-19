import React from 'react';
import DeckCreator from './DeckCreator'

function LearnIndex(props){
    return(
        <div className="col-sm-12 info-box">
            <h1>Select the Study Tab to review your cards, or add new ones here!</h1>
                <a><button onClick={props.onClick}>Add More Cards</button></a>
            <style jsx>{`
                .info-box {
                    padding: 30px;
                    text-align: center;
                  }
            `}</style>
        </div>
    )   
}

function DeckWizard(props){
    return(
        <div className="col-sm-12 deck-wizard">
            <h1>Great! Let's add more words to our collection.</h1>
            <DeckCreator />
            <button id="cancel" onClick={props.onClick} className="btn btn-danger">Return to Dashboard</button>
            <style jsx>{`
                .deck-wizard {
                    text-align: center;
                }
                #cancel{
                    margin: 20px;
                }
            `}</style>
        </div>
    );
}

export default class LearnToggler extends React.Component{
    constructor(props){
        super(props);
        this.state = {createDeck: false};
        this.createNewDeck = this.createNewDeck.bind(this);
        this.returnToIndex = this.returnToIndex.bind(this);
    }

    createNewDeck(){
        this.setState({createDeck: true})
    }

    returnToIndex(){
        this.setState({createDeck: false})
    }

    render(){
        const newDeck = this.state.createDeck;
        return(
            <div id="learn-container" className="row justify-content-center">
                {newDeck ? (
                    <DeckWizard onClick={this.returnToIndex}/>
                ) : (
                    <LearnIndex onClick={this.createNewDeck}/>
                )}
                <style jsx>{`
                    #learn-container{
                        margin-top: 10vh;
                        font-family: 'Merriweather Sans', sans-serif;
                    }
                `}
                </style>
            </div>
        );
    }
}