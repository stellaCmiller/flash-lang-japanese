import { CSSTransition } from 'react-transition-group';
import ExpandedData from './ExpandedData';
import fetch from 'isomorphic-unfetch';

function InfoButton(props){
    return(
        <button onClick={props.onClick}>{props.value}</button>
    )
}

export default class DataRow extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            expanded: false,
            data: [],
            transition: false
        }
        this.expand = this.expand.bind(this);
        this.collapse = this.collapse.bind(this);
    }

    collapse(){
        this.setState({expanded: false});
    }

    //Retrieves all possible definitions for the entry that matches this definition ID
    expand(){
        this.setState({expanded: true});
        const that = this;
        console.log(this.props.defid);
        fetch(`//localhost:3000/api/entry/${this.props.defid}`).then(function(res){
            if (res.status >= 400) {
                throw new Error("Something went wrong, that's all I know :(");
            }
            console.log("Expansion Retrieved!");
            res.json().then(function(data){
                console.log(data);
                that.setState({data: data});
                that.setState({transition: true});
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
                <div className="data-row row">
                    <div className="col-sm-2 align-content-center">
                    {
                        this.state.expanded ? (<InfoButton value="Collapse" onClick={this.collapse}/>
                        ) : (<InfoButton value="Expand" onClick={this.expand}/>)
                    }
                    </div>
                    <div className="col-sm-2">
                        <h3>{this.props.gloss}</h3>
                    </div>
                    <div className="col-sm-2">
                        <h3>{this.props.reb}</h3>
                    </div>
                    <div className="col-sm-2">
                        <h3>{this.props.keb}</h3>
                    </div>
                    <div className="col-sm-2">
                        <h3>{this.props.repri ? "common" : ""}</h3>
                    </div>
                    <div className="col-sm-2">
                        <button>Add to Deck</button>
                    </div>
                    {(this.state.expanded ? <ExpandedData transition={this.state.transition} data={this.state.data}/> : null)}
                    <style jsx>{`
                        .data-row{
                            margin: 5px 0px 5px 0px;
                            border: 1px solid black;
                            background-color: #eee;
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
