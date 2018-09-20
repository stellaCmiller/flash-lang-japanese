import Layout from '../page-layouts/Layout.js'

const about = () => (
    <Layout>
        <div className="container-fluid">
            <div className="row content">
                <div className="col-sm-6">
                    <h2>About this Project</h2>
                    <p>I modeled FlashLang Japanese off of Tofugu's excellent SRS Kanji system, WaniKani. WaniKani provides a strict study plan that develops Kanji reading skills by focusing on learning characters in a particular order, with an emphasis on recognition using word/story association. I wanted to create a study system that deviated from such a strict plan and let users choose which words they wanted to learn to direct their own self-study. I also took a more meaning-based approach that focuses on learning vocabulary, not just specifically kanji characters. FlashLang uses it's own Japanese dictionary MySQL database modeled using JMDict's open source Japanese dictionary project, the same dictionary that fuels Jisho.org. When I was a Latin student in college, I would spend more time using a third party dictionary to help me create and fillout online flashcards than I would actually studying. I designed this app so that flashcards are automatically created for you with the content you want to learn. </p>

                    <p>There are so many things that I plan to do to make this app even more useful to the Japanese learner. Feel free to send me a message through the bug reporting form if you have any suggestions, or open a pull request on the project github page if you want to help me add to this project, especially if you're into design and UX. ;)</p>
                </div>
                <div className="col-sm-6 align-content-center">
                    <div>
                        <img id="dev-photo" src="/assets/devPhotoCrop.jpg" />
                        <figcaption>I'm Stella Miller, a University of Texas graduate with a degree in Latin. I'm passionate about learning new things and helping others do the same. </figcaption>
                    </div>
                </div>
            </div>
            <style jsx>{`
                    #dev-photo{
                        max-height: 250px;
                    }
                    .content{
                        min-height: 80vh;
                    }

                    @media only screen and (min-width: 640px){
                        #dev-photo{
                            max-height: 300px;
                        }
                    }
            `}</style>
        </div>
    </Layout>
)

export default about;