import * as React from 'react';
import './Header.css';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';	

export class Header extends React.Component<any, any> {
	
	public render() {
		return (
		  <header className="app-header">
		  	<div className="_left">
		  		<div className="_menu">
		  			 <IconButton>
				        <Icon className="_ic">menu</Icon>
				     </IconButton>
				</div>
		  		<div className="_logo">INotes</div>
		  	</div>
		  	<div className="_right"/>
		  </header>
		);
	}
}
