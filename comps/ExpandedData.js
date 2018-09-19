export default class ExpandedData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const readings = this.props.data.map(e =>
            <li style={{ float: 'left', padding: '10px', margin: "none" }}>{e.gloss}</li>
        )
        return (
            <div className="expanded-data row">
                <div className="col-sm-6">
                    <p style={{padding: '10px'}}>All Definitions for this Reading:</p>
                </div>
                <div className="expanded-view col-sm-6">
                    <ul>{readings}</ul>
                </div>
                <style jsx>{`
                    p {
                        font-weight: bold;
                        margin-top: 0px;
                    }

                    .expanded-data {
                        margin: 0;
                        background-color: #eee;
                        text-align: start;
                    }

                    .expanded-view ul {
                        margin-top: 0px;
                        list-style: none;
                    }
                `}</style>
            </div>
        )
    }
}