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
                    padding: 20px;
                    background-color: #FF5F5F;
                    border-right: 2px solid #eee;
                    text-align: center;
                    font-family: 'Merriweather Sans', sans-serif;
                }

                @media only screen and (min-width: 640px){
                    min-height: 100vh;
                }
            `}
            </style>
        </div>
    </div>
)

export default LearnLayout