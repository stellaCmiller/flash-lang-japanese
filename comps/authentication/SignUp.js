export default class SignUp extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="modal-text">
                <h3>Get Ready to Learn!</h3>
                <form id="signup" action="/Users" method="post">
                    Please Enter your Email:<br/>
                    <input type="text" name="email" className="form-control" /><br /><br />
                    Please Enter a Password:<br />
                    <input type="password" name="password" className="form-control"/><br /><br />
                    Confirm Password: <br />
                    <input type="password" name="password-confirm" className="form-control"/><br /><br />
                    <input type="Submit" value="Enter" />
                </form>
                <style jsx>{`
                    #login {
                        padding: 10px;
                    }
                `}</style>
            </div>
        )
    }
}