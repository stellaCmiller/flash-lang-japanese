import {ErrorText} from './SignUp';
import fetch from 'isomorphic-unfetch';


//Incredibly similar to sign up; Maybe I can make a super component for shared methods?
export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
        console.log("YEAH BRUH TIME FOR FUCKING AUTHENTICATION");
        fetch(`http://localhost:8080/Users/${that.state.email}`, {
            method: 'GET',
        }).then(function(res) { 
            if (res.status == 400){
                console.log("shit fucked up")
            } else {
                console.log("yeet")
            }
        });
    }

    render(){
        return(
            <div className="modal-text">
                <h3>Welcome Back!</h3>
                <form id="login" onSubmit={this.login}>
                    Please Enter your Username:<br/>
                    <input type="text" name="username" onChange={this.handleChange} className="form-control" /><br /><br />
                    Please Enter your Password:<br />
                    <input type="password" name="password" onChange={this.handleChange} className="form-control"/><br /><br />
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