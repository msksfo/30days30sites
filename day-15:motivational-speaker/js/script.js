var canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


  window.onload = function() {
    try {
      TagCanvas.Start('myCanvas','tags',{
        textHeight: 25,
        textColour: null,
        outlineColour: '#ff4500',
        reverse: true,
        depth: .9,
        maxSpeed: 0.01,
        weight: true, 
        initial: [0.5, -0.3]
      });
    } catch(e) {
      // something went wrong, hide the canvas container
      console.log('something went wrong');
      //document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
