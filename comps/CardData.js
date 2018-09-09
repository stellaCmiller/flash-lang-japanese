import DataRow from './DataRow';

export default class CardData extends React.Component {
    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.state = {
            expanded: false
        }
    }

    expand() {
        this.setState({ expanded: true })
    }

    render() {
        const rawData = this.props.data;
        const dataRows = rawData.map(e =>
            <DataRow defid={e.def_id} keb={e.keb} reb={e.reb} gloss={e.gloss} repri={e.re_pri} transition={this.props.transition}/>
        );
        return dataRows
    }
}

