import React from 'react';
import uniqid from 'uniqid';
// Material UI
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import Navbar from './components/Navbar';
import Form from './components/Form';

let theme = createTheme({
  palette: {
    type: 'dark',
  },
  MuiPickersToolbar: {
    toolbar: {
      backgroundColor: '#3f51b5',
    },
  },
});

theme = responsiveFontSizes(theme);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      education: [
        {
          id: uniqid(),
          courseName: '',
          institution: '',
          startDate: '',
          endDate: '',
        },
      ],
      experience: [
        {
          id: uniqid(),
          jobTitle: '',
          companyName: '',
          startDate: '',
          endDate: '',
        },
      ],
    };
  }

  switchMode = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleTextFieldChange = (event, section, id) => {
    let { name, value } = event.target;
    const isArray = Array.isArray(this.state[section]);

    if (isArray) {
      const newArray = this.state[section].map((item) => {
        if (item.id === id) item[name] = value;
        return item;
      });

      this.setState({
        [section]: newArray,
      });
      return;
    }

    this.setState({
      [section]: {
        ...this.state[section],
        [name]: value,
      },
    });
  };

  handleAddItemButtonClick = (section) => {
    const newItem = {
      education: {
        id: uniqid(),
        courseName: '',
        institution: '',
        startDate: '',
        endDate: '',
      },
      experience: {
        id: uniqid(),
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
      },
    };

    const newArray = [...this.state[section], newItem[section]];
    this.setState({
      [section]: newArray,
    });
  };

  handleDeleteItemButtonClick = (section, id) => {
    const newArray = this.state[section].filter((item) => item.id !== id);
    this.setState({
      [section]: newArray,
    });
  };

  render() {
    const data = {
      ...this.state,
      handleTextFieldChange: this.handleTextFieldChange,
      handleAddItemButtonClick: this.handleAddItemButtonClick,
      handleDeleteItemButtonClick: this.handleDeleteItemButtonClick,
    };

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar
            title='CV Creator'
            isEditing={this.state.isEditing}
            switchMode={this.switchMode}
          />
          {this.state.isEditing ? <Form data={data} /> : null}
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
