const canvas = document.querySelector('canvas');
const game = GameLife(canvas, {
  graphics: {
      board: {width: 500, height: 500},
      colors: {grid: '#555'}
  }
});