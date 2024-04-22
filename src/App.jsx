
import { CssBaseline, Grid, StyledEngineProvider } from '@mui/material';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brain from './components/Brain';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});
theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    primaryBlue: theme.palette.augmentColor({
      color: {
        main: '#99b5df',
      },
      name: 'primaryBlue',
    }),
    primaryAqua: theme.palette.augmentColor({
      color: {
        main: '#77d5d3',
      },
      name: 'primaryAqua',
    }),
    yellow: theme.palette.augmentColor({
      color: {
        main: '#d8be6a',
      },
      name: 'yellow',
    }),
    green: theme.palette.augmentColor({
      color: {
        main: '#9cd27d',
      },
      name: 'green',
    }),
    black: theme.palette.augmentColor({
      color: {
        main: '#4a4a4a',
      },
      name: 'black',
    }),
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="brain" element={<Brain />} />
      <Route path="/" element={<Navigate to="brain" />} />
      <Route path="*" element={<Navigate to="brain" />} />

    </Route>
  )
)

function App({ routes }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst >
        <CssBaseline />
        <Grid container>
          <RouterProvider router={router} />
        </Grid>
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default App;