import { Container, Grid, Card, Typography, CardMedia, CardContent, CssBaseline, Box, Paper, imageListClasses } from '@mui/material';


export default function Gridproject () {
    return (
      <CssBaseline>
        <Grid mt = {10} container justifyContent="center" item xs={12}>
            <Paper  elevation={3} sx={{p:3, borderRadius: '2%'}}> 
        <Card>
            </Card>
      <Container >
        <Box mt = {5}>
        <Typography variant="h3"> Grade de Projetos </Typography>
        <Grid mt={3} container justifyContent="left" spacing={4} >
          <Grid item>
            <Card>
            <CardContent >
              <CardMedia
                component="img"
                style={{ width: '220px', height: '180px',  }}
                src='src/assets/mapa.png'
              />
                <Typography variant="h5">Nome do Projeto</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
            <CardContent>
              <CardMedia
                component="img"
                style={{ width: '220px', height: '180px',  }}
                src='src/assets/mapa.png'
              />
                <Typography variant="h5">Nome do Projeto</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
            <CardContent>
              <CardMedia
                component="img"
                style={{ width: '220px', height: '180px',  }}
              src='src/assets/mapa.png'
              />
                <Typography variant="h5">Nome do Projeto</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
            <CardContent>
              <CardMedia
                component="img"
                style={{ width: '220px', height: '180px',  }}
                src='src/assets/mapa.png'
              />
                <Typography variant="h5">Nome do Projeto</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
            <CardContent>
              <CardMedia
                component="img"
                style={{ width: '220px', height: '180px',  }}
                src='src/assets/mapa.png'
              />
                <Typography variant="h5">Nome do Projeto</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Box>
      </Container>
      </Paper>
      </Grid>
      </CssBaseline>
    );
  }
 
 
