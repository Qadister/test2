(function() {
  var canvas = document.getElementById('cardCanvas');
  var canvasAnimated = document.getElementById('cardCanvas2')
  var context = canvas.getContext('2d');
  var contextAnimated = canvasAnimated.getContext('2d');
  var globalScale = 0;
  var maxScale = 4;
  var hearts = [];
  var current, end, start, opacity = 0;
  var Heart = (function() {

    return function(x, y, scale, color) {
      var speed = Math.floor((Math.random() * 10) + 2);
      var speedX = Math.floor((Math.random() * 2) - 1);

      function draw(context) {

        if (globalScale > maxScale) {
          speed = 0.1;
          speedX = 0;
        }

        y += speed;
        x += speedX;
        drawHeart(context, x, y, scale, color);

        if (y > 400) {
          x = Math.floor((Math.random() * 450) - 50);
          y = Math.floor((Math.random() * 20) - 20);
        }

      }

      return {
        draw: draw
      }
    }
  })();

  var x = 0;
  var y = 0;

  hearts.push(new Heart(Math.floor((Math.random() * 450) - 50), 0, Math.floor((Math.random() * 5)), 'rgb(140,40,40)'));
  hearts.push(new Heart(Math.floor((Math.random() * 450) - 50), 0, 5, 'rgb(140,40,40)'));
  hearts.push(new Heart(Math.floor((Math.random() * 450) - 50), 0, 5, 'rgb(140,40,40)'));
  hearts.push(new Heart(Math.floor((Math.random() * 450) - 50), 0, 5, 'rgb(140,40,40)'));
  hearts.push(new Heart(Math.floor((Math.random() * 450) - 50), 0, 5, 'rgb(140,40,40)'));

  function buildPixel(context, x, y, scale, colour) {
    context.fillStyle = colour; // sets the color to fill in the rectangle with
    context.fillRect(x, y, scale, scale);
  }

  function randomGrey() {
    var value = Math.floor((Math.random() * 155) + 1);
    return 'rgb(' + value + ',40,40)';
  }

  function drawS(context, x, y, scale, colour) {
    buildPixel(context, x + 0, y + 0, scale, colour);
    buildPixel(context, x + scale, y + 0, scale, colour);
    buildPixel(context, x + scale * 2, y + 0, scale, colour);
    buildPixel(context, x + scale * 3, y + 0, scale, colour);
    buildPixel(context, x + 0, y + scale, scale, colour);
    buildPixel(context, x + 0, y + scale * 2, scale, colour);
    buildPixel(context, x + scale, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 2, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 4, scale, colour);
    buildPixel(context, x + scale * 2, y + scale * 4, scale, colour);
    buildPixel(context, x + scale, y + scale * 4, scale, colour);
    buildPixel(context, x + 0, y + scale * 4, scale, colour);
  }

  function drawJ(context, x, y, scale, colour) {
    buildPixel(context, x + scale * 4, y + 0, scale, colour);
    buildPixel(context, x + scale * 4, y + scale, scale, colour);
    buildPixel(context, x + scale * 4, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 4, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 4, scale, colour);
    buildPixel(context, x + scale * 2, y + scale * 4, scale, colour);
    buildPixel(context, x + scale * 1, y + scale * 3, scale, colour);
  }

  function drawPlus(context, x, y, scale, colour) {
    buildPixel(context, x + scale * 3, y + scale, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 4, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 5, scale, colour);

    buildPixel(context, x + scale * 1, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 2, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 4, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 5, y + scale * 3, scale, colour);

  }

  function drawHeart(context, x, y, scale, colour) {
    buildPixel(context, x + scale * 1, y + 0, scale, colour);
    buildPixel(context, x + scale * 5, y + 0, scale, colour);
    buildPixel(context, x + 0, y + scale, scale, colour);
    buildPixel(context, x + scale, y + scale, scale, colour);
    buildPixel(context, x + scale * 2, y + scale, scale, colour);
    buildPixel(context, x + scale * 4, y + scale, scale, colour);
    buildPixel(context, x + scale * 5, y + scale, scale, colour);
    buildPixel(context, x + scale * 6, y + scale, scale, colour);

    buildPixel(context, x + 0, y + scale * 2, scale, colour);
    buildPixel(context, x + scale, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 2, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 4, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 5, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 6, y + scale * 2, scale, colour);
    buildPixel(context, x + scale * 1, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 2, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 4, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 5, y + scale * 3, scale, colour);
    buildPixel(context, x + scale * 2, y + scale * 4, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 4, scale, colour);
    buildPixel(context, x + scale * 4, y + scale * 4, scale, colour);
    buildPixel(context, x + scale * 3, y + scale * 5, scale, colour);
  }

  function drawBackground() {
    contextAnimated.clearRect(0, 0, canvas.width, canvas.height);
    globalScale += 0.01;
    for (var i = 0; i < 4; i++) {
      x = Math.floor((Math.random() * 450) - 50);
      y = Math.floor((Math.random() * 450) - 50);
      drawHeart(context, x, y, globalScale, randomGrey());
    }
    if (globalScale < maxScale) {
      setTimeout(function() {
        window.requestAnimationFrame(drawBackground);
      }, 50);
    } else {

      start = new Date();
      end = 2000;
      window.requestAnimationFrame(reveal);

    }
  }

  function addSeconds(date, seconds) {
    return new Date(date.getTime() + seconds * 1000);
  }

  function reveal() {
    current = new Date() - start;
    opacity = current / end;
    document.getElementById("end").style.opacity = opacity.toString();
    if (current < end) {
      window.requestAnimationFrame(reveal);
    } else {
      setTimeout(function() {
      drawHeart(context, 332, 350, 5, 'rgb(255,255,255)');

      //drawJ(context, 330, 360, 2, 'rgb(255,255,255)');
      //drawPlus(context, 342, 358, 2, 'rgb(255,255,255)');
      //drawS(context, 358, 360, 2, 'rgb(255,255,255)');
      },500);
      //the end
    }
  }

  function drawForeground() {
    contextAnimated.clearRect(0, 0, canvas.width, canvas.height);

    for (var j = 0; j < hearts.length; j++) {
      hearts[j].draw(contextAnimated);
    }
 if (globalScale < maxScale) {
    setTimeout(function() {
      window.requestAnimationFrame(drawForeground);
    }, 10);
 }
  }

  window.requestAnimationFrame(drawBackground);
  window.requestAnimationFrame(drawForeground);

})();