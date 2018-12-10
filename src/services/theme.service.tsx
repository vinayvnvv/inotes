import { createMuiTheme } from '@material-ui/core/styles';
class ThemeService {
	getCreateMuiTheme() {
		return createMuiTheme({
				  palette: {
				    primary: { main: "#f34964" }, // Purple and green play nicely together.
				    secondary: { main: '#777777' }, 
				  },
				});
	}
}

export const Theme = new ThemeService();