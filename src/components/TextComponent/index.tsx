import { useTheme } from '@material-ui/core';
import React from 'react';

const TextComponent = () => {
  const theme = useTheme();

  return (
    <div>{`This is ${theme.palette.type} theme`}</div>
  );
};


export default TextComponent;
