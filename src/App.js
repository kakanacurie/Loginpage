import React, { Component } from "react";
import "./App.css";
import Input from "./Components/TextInput/TextInput";
import CustomButton from "./Components/Buttons/CustomButton";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isLoading: false
		};
	}
	onChangeTextInput = (e, key) => {
		this.setState({
			[key]: e.target.value
		});
	};

	onSend = () => {
		console.log(this.state);
	};
	render() {
		return (
			<div className="App">
				<h1>SheCanCode Cohort2</h1>
				<div className="login-form">
					<Input
						label="Enter your email"
						type="email"
						placeholder="me@any.com"
						value={this.state.email}
						onChange={e => this.onChangeTextInput(e, "email")}
					/>
					<Input
						label="Enter your password"
             			type="password"
            			placeholder="password"
						value={this.state.password}
						onChange={e => this.onChangeTextInput(e, "password")}
					/>
					<CustomButton title="Send" onClick={() => this.onSend()} />
				</div>
			</div>
		);
	}
}
