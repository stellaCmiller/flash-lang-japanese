import Head from "../comps/HtmlHead";
import Link from "next/link";

const LearnLayout = (props) => (
    <div>
        <Head />
        <div className="container-fluid">
            <div className="row">
                <div id="sideNav" className="col-sm-2">
                    <h2>Welcome, {props.name}</h2>
                    <ul className="links">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="#"><a>Dashboard</a></Link></li>
                        <li><Link href="/study"><a>Review</a></Link></li>
                    </ul>
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

                .links li{
                    font-size: 16pt;
                    list-style: none;
                    padding-top: 10px;
                }

                @media only screen and (min-width: 640px){
                    #sideNav {
                        min-height: 100vh;
                    }

                    .links li{
                        padding-top: 10vh;
                    }
                }
            `}
            </style>
        </div>
    </div>
)

export default LearnLayout