export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.signUp = this.signUp.bind(this);
    }

    signUp(event){
        event.preventDefault();
        console.log("YEAH BRUH TIME FOR FUCKING AUTHENTICATION")
    }

    render(){
        return(
            <div className="modal-text">
                <h3>Get Ready to Learn!</h3>
                <form id="signup" onSubmit={this.signup}>
                    Please Enter a Username:<br/>
                    <input type="text" name="username" className="form-control" /><br /><br />
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