import { AppBar, Badge, CircularProgress, CssBaseline, Grid, ThemeProvider, Toolbar, Typography } from '@mui/material';
import theme from './theme'
import { Box, Container } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>

        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h4'><Box fontWeight={'bold'} display={'inline'}>p</Box>etbook</Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Typography variant='h2' align={'center'}>Hello Material world</Typography>
          <Grid container justifyContent={'center'}>
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        </Container>

      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
