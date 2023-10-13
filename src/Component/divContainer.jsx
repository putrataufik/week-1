import React from "react";
    
const heading = React.createElement('h1', null, 'react');
  const strong = React.createElement('strong', null, 'best tool');
  const paragraph = React.createElement('p', null, 'for build');
  const divContainer = React.createElement('div', { className: 'container' }, 
  [heading,
    strong,
    paragraph]);

  export default divContainer;