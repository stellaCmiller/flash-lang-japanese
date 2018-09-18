import Layout from '../page-layouts/Layout';

const bugs = () => (
    <Layout>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <form action="https://formspree.io/stella.miller@utexas.edu" method="POST">
                        <p>Name: </p>
                        <input type="name"name="name" className="form-control"/><br />
                        <p>Email: </p>
                        <input type="email" name="email" className="form-control"/><br />
                        <p>Bug/Suggestion/Message/Job Opportunities: </p>
                        <textarea name="message" rows="10" className="form-control"/><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <style jsx>{`
                form {
                    margin-top: 20px;
                }
                .row {
                    min-height: 80vh;
                    text-align: center;
                }
            `}</style>
        </div>
    </Layout>
)

export default bugs;