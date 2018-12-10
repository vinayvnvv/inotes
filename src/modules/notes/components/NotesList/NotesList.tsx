import * as React from 'react';
import './NotesList.css';
import { IShuffleGridOptions, ShuffleGrid } from './../../../../services/shuffle.grid';

interface IState {
	items: any[];
}

export class NotesList extends React.Component<any, IState> {
	state: IState;
	shuffleInstance: any;
	gridContainerRef: any = React.createRef();
	gridItemRef: any = React.createRef();
	shuffleGrid: any;
	shuffleGridOptions: IShuffleGridOptions;
	constructor(props: any) {
		super(props);
		this.state = {
			items: [
						{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
				   ]
		}
	}

	componentDidMount() {
		this.initShuffleGrids();
		this.gridContainerRef.current.addEventListener("DOMNodeInserted", () => {
			console.log('child');
		})
		console.log(this.gridContainerRef.current.clientWidth, this.gridItemRef.current.clientWidth)
		setTimeout(() => {
			this.setState({
				items: [...this.state.items, {}]
			}, () => {
				setTimeout(() => {
					this.doShuffle();
				}, 400);
			})
		}, 3000);
	}

	initShuffleGrids = () => {
		console.log(this.gridContainerRef, this.gridItemRef);
		this.shuffleGridOptions = {
			container: this.gridContainerRef.current,
			item: this.gridItemRef,
			itemWidth: 240,
			itemSelector: 'grid-item'
		}
		this.shuffleGrid = new ShuffleGrid(this.shuffleGridOptions);
		this.doShuffle();
	}

	doShuffle = () => {
		this.shuffleGrid.doShuffle();
	}

	public render() {
		return (
		  <div className="NotesList">
		  	<div className="_list" ref={this.gridContainerRef}>
		  		{this.state.items.map((item, index) => 
		  			<div ref={this.gridItemRef} className="_item grid-item" key={index} style={{minHeight: (Math.floor(Math.random()*500) + 1) + "px"}}>
		  				<div className="_itm-inner flex flex-center">
		  					item
		  				</div>
		  			</div>
		  		)}
		  		

		  		<div  className=" photo-grid__sizer" style={{width: "200px"}}/>
		  	</div>
		  </div>
		);
	}
}
