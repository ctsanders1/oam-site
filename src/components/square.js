import React, { Component } from 'react';
import * as R from 'ramda';
import { getStyles } from '../styles/square-styles';
import confused from '../assets/confused.mp3';
import bounceDownSynth from '../assets/confused-reverse.mp3'; // '../assets/bounce-down-synth.mp3';

const confuse = new Audio(confused);
const bounce = new Audio(bounceDownSynth);
bounce.playbackRate = 1.5;


/**
 * The Square
 */
export default class Square extends Component {

  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  render() {

    const { fill, x, y, s, visible, mixBlendMode } = this.props;
    const styles = getStyles(visible, mixBlendMode, s);

    if (visible) {
      confuse.play();
    } else {
      bounce.play();
    }

    return (
      <g transform={ 'translate(' + x + ', ' + y + ')' }>
        <rect style={ styles }
          fill={ fill }
          x={ 0 }
          y={ 0 }
          width={ s }
          height={ s } />
      </g>
    );

  }

}
