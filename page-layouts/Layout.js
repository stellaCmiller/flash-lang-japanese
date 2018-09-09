import Header from '../comps/Header'
import Head from '../comps/HtmlHead'
import Footer from '../comps/Footer'

const Layout = (props) => (
  <div>
    <Head/>
    <div className="container1">
      <Header />
      {props.children}
      <Footer />
    </div>
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