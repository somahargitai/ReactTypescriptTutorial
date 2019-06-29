import { createMuiTheme } from '@material-ui/core/styles';

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: ['GE Inspira Sans'],
    fontSize: 14,
    useNextVariants: true
  },
  palette: {
    primary: {
      // main: '#2f3133'
      main: '#eae'
    },
    secondary: {
      main: '#1890ff'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow:
          '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        background: 'transparent',
      },
      raised: {
        '&$disabled': {
          color: '#ececf0',
          backgroundColor: '#ececf0'
        }
      },
      raisedPrimary: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      flat: {
        '&$disabled': {
          color: '#ececf0',
          backgroundColor: '#ececf0'
        }
      },
      flatPrimary: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#f4f5f8',
        position: 'inherit'
      }
    },
    MuiTab: {
      '&$selected': {
        fontWeight: 'bold'
      }
    },
    MuiTableCell: {
      head: {
        color: '#2f3133',
        fontWeight: 'bold',
        fontSize: 16,
        borderBottom: '3px solid #1890ff'
      },
      body: {
        fontSize: 14
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#1890ff'
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: '2px solid #1890ff'
        },
        '&:hover:not($disabled):not($error):not($focused):before': {
          borderBottom: '2px solid #1890ff'
        }
      }
    },
    MuiInputLabel: {
      outlined: {
        '&$shrink': {
          color: '#1890ff'
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#1890ff',
          borderWidth: 2
        }
      }
    }
  }
});

export default null;
