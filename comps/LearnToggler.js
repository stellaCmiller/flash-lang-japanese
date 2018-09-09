import React from 'react';
import DeckCreator from './DeckCreator'

function LearnIndex(props){
    return(
        <div className="col-md-11 info-box">
            <h1>Select a deck to study or create a new one to get started!</h1>
            <button onClick={props.onClick}>Create New Deck</button>
            <style jsx>{`
                .info-box {
                    background-color: #eee;
                    padding: 30px;
                    text-align: center;
                  }
            `}</style>
        </div>
    )   
}

function DeckWizard(props){
    return(
        <div className="col-md-11">
            <h1>Great! Let's start by adding words.</h1>
            <DeckCreator />
            <button id="cancel" onClick={props.onClick}>Cancel</button>
            <style jsx>{`
                #cancel{
                    margin-top: 20px;
                    background-color: red;
                    border-color: red;
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