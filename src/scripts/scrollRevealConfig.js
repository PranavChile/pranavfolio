export const targetElements = [
  {
    element: '.hero-title',
    animation: {
      delay: 200,
      distance: '40px',
      origin: 'bottom',
      duration: 1000,
    },
  },
  {
    element: '.text-color-main',
    animation: {
      delay: 400,
      distance: '20px',
      origin: 'left',
      duration: 1000,
    },
  },
];

export const defaultProps = {
  distance: '20px',
  duration: 500,
  easing: 'ease-out',
};
