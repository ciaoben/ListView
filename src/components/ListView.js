import React from 'react';
import _ from 'lodash';

var ListView = React.createClass({
    propTypes: {
      //* todo *//
    },

    getInitialState: function() {
      return {
        loading: true,
        toRender: undefined,
        children: React.Children.only(this.props.children)
      }
    },

    componentDidMount: function() {
      this._createComponentList();
    },
    // generate a random key prop to render
    _addKeyForRender: function(object) {
      object.key = Math.floor(Math.random()*10000)
      return object
    },

    _createComponentList: function() {
      let toRender = _.map(this.props.data, (componentData) => {
        return React.cloneElement(this.state.children, this._addKeyForRender(componentData));
      });

      this.setState({toRender: toRender});

    },

    render: function() {
      return <div>
              {
                this.state.toRender
              }
            </div>;
    }
});

module.exports = ListView;