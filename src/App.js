import React from 'react';
// Material UI
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import Navbar from './components/Navbar';

let theme = createTheme({
  palette: {
    type: 'dark',
  },
});

theme = responsiveFontSizes(theme);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: true,
    };
  }

  switchMode = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar
            title='CV CREATOR'
            isEditing={this.state.isEditing}
            switchMode={this.switchMode}
          />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
