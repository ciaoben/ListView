import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './components/ListView';
import Card from './components/Card';
import axios from 'axios';
require('./stylesheets');

let data = [{title: 'anna.it'},
            {title: 'gianni.it'},
            {title: 'cassano.it'},
            {title: 'benigni.it'}];

let getData =  (page, per, query) => {
  return axios
          .get(
            `http://jsonplaceholder.typicode.com/posts`);
};

ReactDOM.render(
  <ListView data={getData}>
    <Card/>
  </ListView>,
  document.getElementById('root')
);

