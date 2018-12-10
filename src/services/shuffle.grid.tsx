export interface IShuffleGridOptions {
	container: HTMLElement;
	item: HTMLElement| any;
	itemWidth: number;
	itemSelector: string;
}
export class ShuffleGrid {
	private options: IShuffleGridOptions;
	private yAxis: any[];
	private noOfItems: number;
	private init: boolean = false;
	constructor(options: IShuffleGridOptions) {
		this.options = options;
	}

	doShuffle() {
		this.options.container.style.width = 'initial';
		this.noOfItems = Math.floor((this.options.container.clientWidth / this.options.itemWidth));
		this.yAxis = new Array(this.noOfItems).fill(0);
		console.log(this.options, this, this.yAxis);
		console.log(this.findSmallAxis());
		this.startShuffle();
		if(!this.init) {
			window.addEventListener('resize', this.onWindowResize);
			this.init = true;
		}	
	}

	onWindowResize = () => {
		if(this.options && this.options.container)
			this.doShuffle();
		else 
			window.removeEventListener('resize', this.onWindowResize);
	}

	private startShuffle() {
		this.options.container.childNodes.forEach((item: HTMLElement) => {
			console.log(item);
			const smallAxis = this.findSmallAxis();
			const xPos = (smallAxis * this.options.itemWidth);
			const yPos = this.yAxis[smallAxis];
			item.style.transform = "translate(" + xPos + "px," + yPos + "px)";
			this.yAxis[smallAxis] = (this.yAxis[smallAxis] + item.offsetHeight);
			console.log('last=--->', this.yAxis, smallAxis)
		})
		this.options.container.style.height = this.findLargeAxis() + "px";
		this.options.container.style.width = (this.yAxis.length * this.options.itemWidth) + "px";
	}

	private findSmallAxis() {
		let small = this.yAxis[0];
		let smallIndex = 0;
		this.yAxis.map((item, index) => {
			if(item < small) {
				small = item;
				smallIndex = index;
			}
		});
		return smallIndex;
	}

	private findLargeAxis() {
		let large = this.yAxis[0];
		this.yAxis.map((item, index) => {
			if(item > large) {
				large = item;
			}
		});
		return large;
	}
}
