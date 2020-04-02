// Standard easing puts subtle attention at the end of an animation,
// by giving more time to deceleration than acceleration.
// It is the most common form of easing.
const standardEase = 'cubic-bezier(0.4, 0.0, 0.2, 1)';

// Incoming elements are animated using deceleration easing,
// which starts a transition at peak velocity (the fastest
// point of an element’s movement) and ends at rest.
const incomingEase = 'cubic-bezier(0.0, 0.0, 0.2, 1)';

// Elements exiting a screen use acceleration easing,
// where they start at rest and end at peak velocity.
const exitingEase = 'cubic-bezier(0.4, 0.0, 1, 1);';

// Fixes jitter effect on elements that use transform()
const fixShake = `
  backface-visibility: hidden;
  transform: translateZ(0) scale(1.0, 1.0);
`;

// No text highlighting enabled
const noSelect = `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

// Centers element
// Parent must be relative
const absCenter = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export {
  absCenter,
  noSelect,
  standardEase,
  incomingEase,
  exitingEase,
  fixShake,
};
