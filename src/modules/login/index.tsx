import * as React from 'react';
import './index.css';
import { GoogleLogin } from 'react-google-login';	
import { Auth } from './../../services/index';

interface IProps {
	onLogin: any;
}

export class Login extends React.Component<IProps, any> {
	constructor(props: IProps) {
		super(props);
	}

	responseGoogle = (res: any) => {
		console.log(res);
		Auth.setAuth(res.profileObj);
		this.props.onLogin(true);
	}
	responseErrGoogle = (err: any) => {
		console.log(err);
	}
	public render() {
		return (
		  <div>
		  	<div className="Login">
		  		<div className="_box">
		  			<div className="_ttl">INotes</div>
		  			<div className="_sub-ttl">Sign in</div>
		  			<div className="_sub-ttl1">Sign in with google to access your notes</div>
		  			<div className="_btn">
		  				<GoogleLogin
						    clientId="617965711227-ak9h08uuhefcbn6v5ccq8io3bdh401ml.apps.googleusercontent.com"
						    buttonText="Login"
						    onSuccess={this.responseGoogle}
						    onFailure={this.responseErrGoogle}
						  />
		  			</div>
		  		</div>
		  	</div>
		  </div>
		);
	}
}
