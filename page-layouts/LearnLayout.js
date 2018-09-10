import Head from "../comps/HtmlHead";

const LearnLayout = (props) => (
    <div>
        <Head/>
        <div className="container-fluid">
            <div className="row">
                <div id="sideNav" className="col-sm-2">
                    <h2>Welcome, {props.name}</h2>
                    <ul id="deck-links">
                        <li>Deck 1 - 10 cards due</li>
                        <li>Deck 2 - 0 cards due</li>
                        <li>Deck 3 - 37 cards due</li>
                    </ul>
                </div>
                <div className="col-md-10"> 
                    {props.children}
                </div>
            </div>
            <style jsx>{`
                #sideNav {
                    background-color: #FF5F5F;
                    border-right: 2px solid #eee;
                    min-height: 100vh;
                    text-align: center;
                    font-family: 'Merriweather Sans', sans-serif;
                }

                #deck-links {
                    list-style: none;
                    margin-top: 30px;
                    padding: 10px;
                    font-size: 14pt;
                }
            `}
            </style>
        </div>
    </div>
)

export default LearnLayout