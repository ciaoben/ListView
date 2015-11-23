import React from 'react';
import _ from 'lodash';

var ListView = React.createClass({
  propTypes: {
    // Todo
  },

  getDefaultProps: function() {
    return {
      onPaginate: function() {},
      status: 'loading',
      per: 25,
      page: 1,
      filter: null,
    };
  },

  getInitialState: function() {
    return {
      loading: true,
      toRender: 'is loading',
      data: this.props.data,
      children: React.Children.only(this.props.children),
    };
  },

  componentDidMount: function() {
    if (typeof (this.props.data) == 'function') {
      this.props.data().then((response)=> {
        this.state.data = response.data;
        this._createComponentList();
      }).catch((e) => {
        throw e;
      });
    } else {
      this._createComponentList();
    }
  },
  // Generate a random key prop to render
  _addKeyForRender: function(object) {
    object.key = Math.floor(Math.random() * 10000000);
    return object;
  },

  _createComponentList: function() {
      let toRender = _.map(this.state.data, (componentData) => {
        return React.cloneElement(this.state.children,
                                  this._addKeyForRender(componentData));
      });
      let slice = this._calcSliceForPagination();
      this.setState({toRender: toRender.slice(slice[0], slice[1])});
    },

  _calcSliceForPagination() {
    let start = (this.props.page * this.props.per) - this.props.per;
    let end = (this.props.page * this.props.per);
    return [start, end];
  },

  render: function() {
      return (<div>
              {
                this.state.toRender
              }
            </div>);
    },
});

module.exports = ListView;
