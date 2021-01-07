import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      textTransform:'capitalize',
      float:'right'
    },
    green:{
        background:'#3BBC66',
        color:'white'
    },
    blue:{
        background:'#317CD5',
        color:'white'
    },
    none:{
        color:'#888888'
    }
  }),
);

type PeopleButtonColor = 'green' | 'blue' | 'none';

export interface PeopleButtonProps {
    label: string;
    color: PeopleButtonColor;
    action: () => void;
}

export default function PeopleButton(props: PeopleButtonProps) {
  const classes = useStyles();

  const buttonColorClass = (): string => {
    if(props.color === 'green') return classes.green;
    if(props.color === 'blue') return classes.blue;
    return classes.none;
  }

  return (
    <div>
      <Button
        variant={props.color !== 'none' ? "contained" : undefined}
        color="secondary"
        className={`${classes.button} ${buttonColorClass()}`}
        startIcon={props.color !== 'none' && <PersonAddIcon />}
        onClick={props.action}
      >
        {props.label}
      </Button>
    </div>
  );
}