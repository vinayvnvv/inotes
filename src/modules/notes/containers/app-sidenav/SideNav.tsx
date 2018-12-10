import * as React from 'react';
import './SideNav.css';
import Icon from '@material-ui/core/Icon';


interface INavItems {
	title: string;
	icons: string;
}

interface IState {
	items: INavItems[];
}

export class SideNav extends React.Component<any, IState> {
	state: IState;
	constructor(props: any) {
		super(props);
		this.state = {
			items: [
				{title: "Notes", icons: "notes"},
				{title: "Setting", icons: "settings"},
				{title: "Trash", icons: "delete_outline"},
				{title: "Imp", icons: "label"},
				{title: "Labels", icons: "label"}
			]
		}
	}
	public render() {
		return (
		  <div className="app-sidenav">
		  	<div className="nav-items">
		  		{this.state.items.map((item, index) => 
		  			<div className={"_item" + (index === 1 ? ' active ' : '')} key={index}>
		  				<div className="_ic">
		  					<Icon>{item.icons}</Icon>
		  				</div>
		  				<div className="_ttl">{item.title}</div>
		  			</div>
		  		)}
		  	</div>
		  </div>
		);
	}
}
