export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        console.log("YEAH BRUH TIME FOR FUCKING AUTHENTICATION");
    }

    render(){
        return(
            <div className="modal-text">
                <h3>Welcome Back!</h3>
                <form id="login" onSubmit={this.login} action="/login" method="post">
                    Please Enter your Username:<br/>
                    <input type="text" name="username" className="form-control" /><br /><br />
                    Please Enter your Password:<br />
                    <input type="password" name="password" className="form-control"/><br /><br />
                    <input type="Submit" value="Log In" />
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