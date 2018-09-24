import {ErrorText} from './SignUp';
import fetch from 'isomorphic-unfetch';

function Login() {
    return(
        <form id="login" onSubmit={this.login}>
            Please Enter your Username:<br/>
            <input type="text" name="username" onChange={this.handleChange} className="form-control" /><br /><br />
            Please Enter your Password:<br />
            <input type="password" name="password" onChange={this.handleChange} className="form-control"/><br /><br />
            <input type="Submit" value="Log In" />
            {(this.state.error ? <ErrorText text={this.state.error}/> : null)}
        </form>
    )
}

export function DevMessage() {
    return (
        <p>Sorry, the login/sign up functionality is not up and running yet, but it will be soon! Please check out the github to see how it's going. </p>
    )
}

//Incredibly similar to sign up; Maybe I can make a super component for shared methods?
export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dev: true,
            username: "",
            password: "",
            error: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    login(event){
        const that = this;
        event.preventDefault();
        fetch(`http://localhost:8080/Users/login`, {
            method: 'POST',
            body: JSON.stringify(that.state),
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow' //not working as expected
        }).then(function(res) { 
            if (res.status == 400){
                res.json().then(function(err){
                    that.setState({error: err.error}); 
                });
            } else {
                res.json().then(function(data){
                    window.location = data.redirectURL;
                }); //Maybe I should be using request instead of fetch
            }
        });
    }

    render(){
        return(
            <div className="modal-text">
                <h3>Welcome Back!</h3>
                {(this.state.dev ? <DevMessage /> : <Login />)}
                <style jsx>{`
                    #login {
                        padding: 10px;
                    }
                `}</style>
            </div>
        )
    }
}