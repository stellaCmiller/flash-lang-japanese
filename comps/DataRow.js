import { CSSTransition } from 'react-transition-group';
import ExpandedData from './ExpandedData';
import fetch from 'isomorphic-unfetch';

function InfoButton(props) {
    return (
        <button className="btn" style={{border: '1px solid #4C4C4C'}} onClick={props.onClick}>{props.value}</button>
    )
}

function AddCardButton(props){
    return (
        <button className="btn" style={{border: '1px solid green'}}onClick={props.onClick}>{props.value}</button>
    )
}

export default class DataRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            data: [],
            transition: false,
            cardAdded: false
        }
        this.expand = this.expand.bind(this);
        this.collapse = this.collapse.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    addCard(){
        this.setState({cardAdded: true});
        this.props.onClick(this.props.gloss, this.props.reb, this.props.keb);
    }

    collapse() {
        this.setState({ expanded: false });
    }

    //Retrieves all possible definitions for the entry that matches this definition ID
    expand() {
        this.setState({ expanded: true });
        const that = this;
        const dev = '//localhost:8080'
        const prod = `https://flashlang-japanese.herokuapp.com`
        fetch(`${prod}/api/entry/${this.props.defid}`).then(function (res) {
            if (res.status >= 400) {
                throw new Error("Something went wrong, that's all I know :(");
            }
            console.log("Expansion Retrieved!");
            res.json().then(function (data) {
                console.log(data);
                that.setState({ data: data });
                that.setState({ transition: true });
            })
        }).catch(err => console.log(err));
    }

    render() {
        return (
                <CSSTransition
                    timeout={300}
                    classNames="data-row"
                    in={this.props.transition}
                    unmountOnExit>
                    <div>
                        <div className="data-row row">
                            <div className="col-2">
                            {
                                    this.state.cardAdded ? (<AddCardButton value="Card Added!"/>
                                    ) : (<AddCardButton value="Add Card" onClick={this.addCard} />)
                                }
                            </div>
                            <div className="col-sm-2">
                                <p>{this.props.gloss}</p>
                            </div>
                            <div className="col-sm-2">
                                <p>{this.props.reb}</p>
                            </div>
                            <div className="col-sm-2">
                                <p>{this.props.keb}</p>
                            </div>
                            <div className="col-sm-2">
                                <p>{this.props.repri ? "common" : ""}</p>
                            </div>
                            <div className="col-sm-2">
                                {
                                    this.state.expanded ? (<InfoButton value="Collapse" onClick={this.collapse} />
                                    ) : (<InfoButton value="Expand" onClick={this.expand} />)
                                }
                            </div>
                        </div>
                    {(this.state.expanded) ? (
                        <ExpandedData transition={this.state.transition} data={this.state.data} />
                    ) : (null)}
                    <style jsx>{`
                        .data-row{
                            margin: 5px 0px 5px 0px;
                            background-color: #eee;
                            border: 1px solid black;
                            text-align: center;
                            font-size: 14pt;
                            padding: 3px;
                        }
                        .data-row-enter {
                            opacity: 0.01;
                        }
                        .data-row-enter-active {
                            opacity: 1;
                            transition: all 300ms ease-out;
                        }
                        .data-row-exit {
                            opacity: 1;
                        }
                        .data-row-exit-active {
                            opacity: 0.01;
                            transition: all 300ms ease-out;
                        }
                    `}</style>
                </div>
            </CSSTransition>
        )
    }
}
