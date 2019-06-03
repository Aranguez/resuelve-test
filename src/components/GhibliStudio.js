import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//routes
import routes from '../routes';

//components
import Nav from './Nav'

const GhibliStudio = () => {
  return (
    <Router>
      {<Nav/>}
      { routes.map(({path, component:C}, index) => {
        return (<Route path={path}
                       exact
                       render={(props) => <C {...props}/>}
                       key={index} />)
      })}
    </Router>
  );
};

export default GhibliStudio;

