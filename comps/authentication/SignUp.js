import fetch from 'isomorphic-unfetch';
import { DevMessage } from './LogIn';

//Alerts the user to signup problems
export function ErrorText(props) {
    return (
        <p style={{ color: 'red' }}>{props.text}</p>
    )
}

function SignUpForm() {
    return (
        <form id="signup" onSubmit={this.signUp}>
            Please Enter a Username:<br />
            <input type="text" name="username" onChange={this.handleChange} className="form-control" /><br /><br />
            Please Enter a Password:<br />
            <input type="password" name="password" onChange={this.handleChange} className="form-control" /><br /><br />
            Confirm Password: <br />
            <input type="password" name="passwordConfirm" onChange={this.handleChange} className="form-control" /><br /><br />
            <input type="Submit" value="Enter" /><br />
            {(this.state.error ? <ErrorText text={this.state.error} /> : null)}
        </form>
    )
}

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dev: true,
            username: "",
            password: "",
            passwordConfirm: "",
            error: ""
        }
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }


    signUp(event) {
        const that = this;
        event.preventDefault();
        fetch("http://localhost:8080/Users", {
            method: 'POST',
            body: JSON.stringify(that.state),
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow' //not working as expected
        }).then(function (res) {
            if (res.status == 400) {
                res.json().then(function (err) {
                    that.setState({ error: err.error });
                });
            } else {
                res.json().then(function (data) {
                    window.location = data.redirectURL;
                }); //Maybe I should be using request instead of fetch
            }
        });
    }

    render() {
        return (
            <div className="modal-text">
                <h3>Get Ready to Learn!</h3>
                {(this.state.dev ? <DevMessage /> : <SignUpForm />)}
                <style jsx>{`
                    #login {
                        padding: 10px;
                    }
                `}</style>
            </div>
        )
    }
}