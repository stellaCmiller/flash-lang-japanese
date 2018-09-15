import Head from "../comps/HtmlHead";

const LearnLayout = (props) => (
    <div>
        <Head/>
        <div className="container-fluid">
            <div className="row">
                <div id="sideNav" className="col-sm-2">
                    <h2>Welcome, {props.name}</h2>
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
            `}
            </style>
        </div>
    </div>
)

export default LearnLayout