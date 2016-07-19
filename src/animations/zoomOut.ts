export const zoomOut: ja.IAnimationOptions = {
  keyframes: [
    {
      opacity: 1,
      transform: 'none',
      transformOrigin: 'center middle'
    },
    {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)'
    },
    {
      opacity: 0,
      transform: 'none',
      transformOrigin: 'center middle'
    }
  ],
  timings: {
    duration: 1000,
    easing: 'elegantSlowStartEnd'
  },
  name: 'zoomOut'
};