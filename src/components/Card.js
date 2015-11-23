import React from 'react';

var Card = React.createClass({
  getDefaultProps: function() {
      return {
          onPaginate: function() {},
          status: 'loading',
          per: 25,
          page: 1,
          filter: null
        };
    },

  render: function() {
    return (<div className='card'>
                <div className='header'>
                  <span className='status'>Status: Active</span>
                  {this.props.title}
                </div>
                <div className='body'>
                  <span className='info'>45 email accounts</span>
                  <span className='separator'></span>
                  <span className='info'>3.5GB spazio occupato</span>
                  <span className='separator'></span>
                  <span className='info'>attivo dal 13 agosto 2015</span>
                </div>
              </div>);
  }
});

module.exports = Card;
