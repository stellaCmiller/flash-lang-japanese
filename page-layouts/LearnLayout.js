import Head from "../comps/HtmlHead";

const LearnLayout = (props) => (
    <div>
        <Head/>
        <div id="learn" className="container-fluid">
            <div className="row">
                <div id="sideNav" className="col-md-2">
                    <h2>Welcome, SuperWeeb</h2>
                    <ul id="deck-links">
                        <li>Create New Deck</li>
                        <li>Deck 1 - 10 cards due</li>
                        <li>Deck 2 - 0 cards due</li>
                        <li>Deck 1 - 37 cards due</li>
                    </ul>
                </div>
                <div className="col-md-10"> 
                    {props.children}
                </div>
            </div>
            <style jsx>{`
                #sideNav {
                    background-color: #fe2e2e;
                    min-height: 100vh;
                    text-align: center;
                    font-family: 'Merriweather Sans', sans-serif;
                }

                #deck-links {
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