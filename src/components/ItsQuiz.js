/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../actions/movies';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import appStyle from './main.scss';


import Movies from './Movies';


class ItsQuiz extends Component {
  render() {
    return (
      <Movies caption="TEST" movies={this.props.movies.movies} actions={this.props.moviesActions} />
    );
  }
}

ItsQuiz.propTypes = {
  movies: PropTypes.object.isRequired,
  moviesActions: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    movies: state.movies,
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  // const actions = { facebook: require('../actions/facebook.js') };
  // const actionMap = { actions: bindActionCreators(actions, dispatch) };
  // return actionMap;
  return {
    moviesActions: bindActionCreators(moviesActions, dispatch),
    // harmonyActions: bindActionCreators(harmonyActions, dispatch),
    // fbActions: bindActionCreators(fbActions, dispatch),
    // viewActions: bindActionCreators(viewActions, dispatch),
    // invitationActions: bindActionCreators(invitationActions, dispatch),
    // testActions: bindActionCreators(testActions, dispatch)
  };
}
export default withStyles(appStyle)(connect(mapStateToProps, mapDispatchToProps)(ItsQuiz));
