import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './components/ListView';
import Card from './components/Card';
require('./stylesheets');

let data = [{name: 'anna.it'},
        {name: 'gianni.it'},
        {name: 'cassano.it'},
        {name: 'benigni.it'}];

ReactDOM.render(
  <ListView data={data}><Card/></ListView>,
    document.getElementById('root')
);

