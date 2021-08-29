import React, { useState } from 'react';
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
import Preview from './components/Preview';

let theme = createTheme({
  palette: {
    type: 'dark',
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
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
  });

  const switchMode = () => {
    setIsEditing(!isEditing);
  };

  const handleTextFieldChange = (event, section, id) => {
    let { name, value } = event.target;
    const isArray = Array.isArray(info[section]);

    if (isArray) {
      const newArray = info[section].map((item) => {
        if (item.id === id) item[name] = value;
        return item;
      });

      setInfo({
        ...info,
        [section]: newArray,
      });
    } else {
      setInfo({
        ...info,
        [section]: {
          ...info[section],
          [name]: value,
        },
      });
    }
  };

  const handleAddItemButtonClick = (section) => {
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

    const newArray = [...info[section], newItem[section]];
    setInfo({
      ...info,
      [section]: newArray,
    });
  };

  const handleDeleteItemButtonClick = (section, id) => {
    const newArray = info[section].filter((item) => item.id !== id);
    setInfo({
      ...info,
      [section]: newArray,
    });
  };

  const data = {
    ...info,
    handleTextFieldChange,
    handleAddItemButtonClick,
    handleDeleteItemButtonClick,
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar
          title='CV Creator'
          isEditing={isEditing}
          switchMode={switchMode}
        />
        {isEditing ? <Form data={data} /> : <Preview data={data} />}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
