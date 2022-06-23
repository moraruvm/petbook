import { AppBar, Container, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material';
import theme from './theme'
import { Box } from '@mui/system';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FeedPage from './feed/feedPage';
import { MockData } from './mocks/data';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>

          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h4'><Box fontWeight={'bold'} display={'inline'}>p</Box>etbook</Typography>
            </Toolbar>
          </AppBar>

          <Container>
            <Routes>
              <Route path='/' element={<Navigate to='/feed'></Navigate>}>
              </Route>
              <Route path="feed" element={<FeedPage pets={MockData.PETS} />}></Route>
            </Routes>
          </Container>

        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
