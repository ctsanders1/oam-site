import { WINDOW_RESIZE, TOGGLE_SQUARE } from '../actions/constants';
import { BLEND_FILTER, BASE } from './constants';
import * as R from 'ramda';
import confused from '../assets/confused.mp3';
import bounceDownSynth from '../assets/confused-reverse.mp3';

const confuse = new Audio(confused);
const bounce = new Audio(bounceDownSynth);
bounce.playbackRate = 1.5;

const initialState = {
  x: 0,
  y: 0,
  s: 0,
  fill: '#0000FF',
  visible: true,
  mixBlendMode: BLEND_FILTER
};

/**
 * Square action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function square(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, getSquareDef(action));

    case TOGGLE_SQUARE:
      const visible = !state.visible;

      if (visible) {
        confuse.play();
      } else {
        bounce.play();
      }

      return R.merge(state, { visible });

    default:
      return state;
  }

}

/**
 * Get the square definition
 * @param  {Number} options.width
 * @param  {Number} options.height
 */
function getSquareDef({ width, height }) {

  const s = (width >= height ? width : height) * BASE * 2;
  const x = (width - s) / 2;
  const y = (height - s) / 2;

  return { x, y, s };

}
