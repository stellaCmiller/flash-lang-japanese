import Header from '../comps/Header'
import Head from '../comps/HtmlHead'
import Footer from '../comps/Footer'

const Layout = (props) => (
  <div>
    <Head/>
    <Header />
    <div className="container1">
      {props.children}
    </div>
    <Footer />
    <style jsx>{`
      .container1 {
        width: 80vw;
        margin: auto;
        margin-top: 2vh;
        padding: 10px;
      }
    `}
    </style>
  </div>
)

export default Layout