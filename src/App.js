import React from 'react';
import {AppBar, Paper, Container, Toolbar, 
  IconButton ,Typography, Box, Grid, 
  CardContent, Card, CardMedia,CardActions, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoritesIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import DialogContentText from '@material-ui/core/DialogContentText'

import './App.css';


export const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow: 1
  },
  mainFeaturesPost:{
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "Cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent:{
    position:"relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)

  },
  overlay:{
    position:" absolute",
    top: 0,
    botton: 0,
    left: 0,
    right: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"

  },
  cardMedia:{
    paddingTop: "56.25%",
  },
  cardContent:
  {
    flexGrow: 1
  },
  cardGrid:{
    marginTop: theme.spacing(4)
  }
}))
const cards = [1,2,3,4,5,6,7,8,9]
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  } 
  const [open,setOpen] = React.useState(false);
  const handleClickOpen = () =>
  {
    setOpen(true);
  }
  const handleClose = () =>
  {
    setOpen(false);
  }
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" 
            color="inherit" aria-label="menu" className={classes.menuButton}><MenuIcon /></IconButton>
            
            <Typography variant="h6" className={classes.title}>Portfolio blog</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>LogIn</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" >Log In</DialogTitle>
                <DialogContent >
                  <DialogContentText> Log in to see videos</DialogContentText>
                  <TextField autoFocus margin="dense" id="name" 
                  label="Email Adress" 
                  type="email" fullWidth></TextField>
                  <TextField autoFocus margin="dense" id="pass" 
                  label="Password" 
                  type="password" fullWidth></TextField>
                </DialogContent>
                <DialogActions >
                  <Button onClick={handleClose } color="primary">Cancel</Button>
                  <Button onClick={handleClose } color="primary">Log In</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{background: 'url(https://source.unsplash.com/random)'}}>

            <Container fixed>
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturesPostContent}>
                    <Typography component="h1" color="inherit" gutterBottom variant="h3">
                      Portfolio Blog
                    </Typography>
                    <Typography component="h5" color="inherit" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.
                    </Typography >
                    <Button variant="contained" color="secondary">
                      Learn More
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>

        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Portfolio Blog</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={5} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Start Now</Button>
              </Grid>
              <Grid item>                
                <Button variant="contained" color="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image="https:/source.unsplash.com/random" title="Image title"/>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>Blog Post</Typography>
                      <Typography >Blog Post . PortFolio Blog PortFolio Blog .Blog post</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayerIcon />
                       <PlayCircleFilledIcon />
                    </CardActions>
                    

                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          </Container>
        </div>
      </main>
      <footer>
      <Typography variant="h6" align="center" gutterButtom> 
          Footer           
        </Typography>
          <BottomNavigation value={value} 
          onChange={handleChange}  
          className={classes.root}>
            <BottomNavigationAction label="Recents" 
            value="recents" icon={<RestoreIcon />}
             />
              <BottomNavigationAction label="Favorites" 
            value="favorites" icon={<FavoritesIcon />}
             />
             <BottomNavigationAction label="Nearby" 
            value="nearby" icon={<LocationOnIcon />}
             />
             <BottomNavigationAction label="Folder" 
            value="folder" icon={<FolderIcon />}
             /> 
          </BottomNavigation>
          <Typography  align="center" color="textSecondary" component="p" variant="subtitle1" > 
         React material ui project created for a portfolio blog          
        </Typography>
      </footer>
    </>
  );
}

export default App;
