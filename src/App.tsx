import * as React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Theme, Auth } from './services';
import { Notes } from './modules/notes';
import { Login } from './modules/login';


interface IState {
  isLogin: boolean;
}

class App extends React.Component<any, IState> {
  state: IState;
  constructor(props: any) {
    super(props);
    this.state = {
      isLogin: !Auth.isAuth()
    }
  }

  onLogin = (status: boolean) => {
    console.log('on login');
    if(status) this.setState({
      isLogin: true
    })
  }

  public render() {
    return (
      <MuiThemeProvider theme={Theme.getCreateMuiTheme}>
        {this.state.isLogin ? (
            <Notes />
          ) : (
            <Login onLogin={this.onLogin}/>
        )}
      </MuiThemeProvider>
    );
  }
}

export default App;
