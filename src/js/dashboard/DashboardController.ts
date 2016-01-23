import Color from "../core/Color";

class DashboardModel {
	name: string = "";
	occupation: string = "";
	color: number = 0;
};

export default class DashboardController {
	model: DashboardModel = new DashboardModel();

	colors: any[];
	selectedColor: any = "";

	submitted: boolean = false;

	constructor() {
		this.initLookups();
	}

	initLookups() {
		this.colors = Object.keys(Color).map((x: string) => {
			return {
				id: Color[x],
				name: x
			};
		});
	}

	onSubmitClick() {
		this.submitted = true;

		if (this.selectedColor) {
			this.model.color = this.selectedColor.id;
		}
	}
}
