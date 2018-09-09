export default class ExpandedData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const readings = this.props.data.map(e =>
            <li style={{ float: 'left', padding: '10px', margin: "none" }}>{e.gloss}</li>
        )
        return (
            <div className="container">
                <p>All Definitions for this Reading:</p>
                <div className="expanded-view row">
                    <div className="col-sm-6">
                        <ul>{readings}</ul>
                    </div>
                </div>
                <style jsx>{`
                        .container p {
                            font-weight: bold;
                        }
                        .expanded-view ul {
                            margin-top: 2px;
                            list-style: none;
                        }
                        `}
                </style>
            </div>
        )
    }
}