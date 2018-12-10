import * as React from 'react';
import { Auth } from './../../services';
import { Header } from './containers/app-header/Header';
import { SideNav } from './containers/app-sidenav/SideNav';
import { NotesList } from './components/NotesList/NotesList';

export class Notes extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		console.log(Auth.getAuth());
	}
	public render() {
		return (
		  <div className="App">
		  	<Header />
		  	<div className="app-container">
		  		<SideNav />
		  		<div className="app-content">
		  			<NotesList />
		  		</div>
		  	</div>
		  </div>
		);
	}
}
