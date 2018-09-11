import fetch from 'isomorphic-unfetch';
import CardData from './CardData';

function CardDataContainer(props) {
    return (
        <div id="card-data" className="container-fluid">
            {props.children}
            <style jsx>{`
                #card-data{
                    width: 100%;
                    padding: 0px;
                }
            `}</style>
        </div>
    )
}

export default class DeckCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: [],
            transition: false,
            loading: false,
            empty: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
            transition: false
        });
    }

    //Searches DB and passes data to CardData Component as this.props.data
    handleSubmit(event) {
        this.setState({loading: true});
        this.setState({empty: false});
        const that = this;
        event.preventDefault();
        fetch(`//localhost:3000/api/EtoJ/${this.state.value}`).then(function (res) {
            if (res.status >= 400) {
                throw new Error("Something went wrong, that's all I know :(");
            }
            console.log("Data retrieved!");
            res.json().then(function (data) {
                if (data == false){
                    that.setState({empty: true});
                }
                that.setState({ data: data });
                that.setState({ loading: false });
                that.setState({ transition: true });
            })
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Type in an English word you'd like to learn: <br />
                    </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Enter" />
                </form>
                <CardDataContainer>
                    <CardData empty={this.state.empty} loading={this.state.loading} data={this.state.data} transition={this.state.transition} />
                </CardDataContainer>
                <style jsx>{`
                    input {
                        margin: 5px 10px 5px 10px;
                    }

                `}</style>
            </div>
        )
    }
}
