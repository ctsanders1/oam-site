import React, { Component, classSet } from 'react';
import classNames from 'classNames';

/**
 * The Triangle
 */
export default class Triangle extends Component {

  render() {

    const { fill, vertices, visible } = this.props;
    const d = [
      'M', ...vertices[0],
      'L', ...vertices[0],
      'L', ...vertices[1],
      'L', ...vertices[2],
      'Z'
    ].join(' ');

    const classes = classNames({ 'display-none': !visible });

    return (
      <path className={ classes }
        fill={ fill }
        opacity={ 0.5 }
        d={ d } />
    );

  }

}
