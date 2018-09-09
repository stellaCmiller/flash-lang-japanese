import Layout from '../page-layouts/Layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <div id="header" className="container jumbotron jumbotron-fluid">
      <h1 className="display-4">FlashLang 🗲 Japanese</h1>
      <h2 className="lead">Dynamic Flashcards for the Efficent Learner</h2>
    </div>
    <div id="info" className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Automatically Load Correct Translations</h3>
          <p>Flashlang Japanese uses a form of the open source dictionary database from the JMDict Project to automatically fill in your flashcards so you can spend more time studying and less time looking up every single word.</p>
        </div>
        <div className="col-md-4">
          <h3>Spaced Repetition Study System</h3>
          <p>Learn some dank shit because this is the best way to study i promise.</p>
        </div>
        <div className="col-md-4">
          <h3>Shit I need some 3rd thing</h3>
          <p>Anyway yeah we gonna add pictures in on this bitch because this is gonna be a professional ass website</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      #header {
        height: 50vh;
        background-color: #eee;
      }

      #header h1 {
        font-family: 'Fugaz One', cursive;
      }

      #info{
        margin-top: 20px;
      }
      

    `}</style>
  </Layout>
)