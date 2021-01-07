import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Drawer, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      flexWrap: 'nowrap',
    },
    sidebarDrawerPaper: {
      padding: theme.spacing(0, 2, 6),
      top: 48,
      maxWidth: 390,
      minWidth: 260,
      width: 'calc(25% - 12px)',
      zIndex: 1000,
      [theme.breakpoints.down('xs')]: {
        width: '33%',
        minWidth: 0,
      },
    },
    sidebar: {
      minWidth: `calc(${260}px + ${theme.spacing(1.5)}px)`,
      [theme.breakpoints.down('xs')]: {
        minWidth: 0,
      },
    },
  })
);

interface LayoutProps {
  children: JSX.Element;
  sidebarContent: JSX.Element;
}

const Layout = ({ children, sidebarContent }: LayoutProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container maxWidth={false} disableGutters>
        <Grid container className={classes.container}>
          <Grid item xs={4} sm={3} className={classes.sidebar}>
            <Drawer
              classes={{
                paper: classes.sidebarDrawerPaper
              }}
              open
              elevation={4}
              variant="permanent"
            >
              <div>
                {sidebarContent}
              </div>
            </Drawer>
          </Grid>
          <Grid item sm={11} xs={8}>  
            <Grid item md={12}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
