import Layout from '../page-layouts/Layout'

export default () => (
  <Layout>
    <div className="container jumbotron jumbotron-fluid">
      <h1 className="display-4">FlashLang 🗲 Japanese</h1>
      <h2 className="lead">Dynamic Flashcards for the Efficent Learner</h2>
    </div>
    <div id="info" className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Search for Translations</h3>
          <p>Flashlang Japanese uses the open source dictionary database from the JMDict Project to automatically create your flashcards so you can spend more time studying and less time filling them out.</p>
          <img className="index-img" src="../assets/magnifying_glass.png" />
        </div>
        <div className="col-md-4">
          <h3>Spaced Repetition Study</h3>
          <p>Flashlang keeps track of when you need to study each flashcard for maximum retention. No more cramming!</p>
          <img className="index-img" src="../assets/stopwatch-graphic.png" />
        </div>
        <div className="col-md-4">
          <h3>Track your Progress</h3>
          <p>Watch your learning in real time as your card collection grows, and keep an eye out on the cards that consistently give you trouble.</p>
          <img className="index-img" src="../assets/bar-chart.png"/>
        </div>
      </div>
    </div>
    <style jsx>{`
      h1 {
        font-family: 'Fugaz One', cursive;
        font-size: 12vmin; 
      }

      .jumbotron {
        height: 50vh;
        background-color: #eee;
      }

      .jumbotron h1, h2 {
        margin-left: 20px;
      }

      #info{
        margin-top: 20px;
      }
    `}</style>
  </Layout>
)