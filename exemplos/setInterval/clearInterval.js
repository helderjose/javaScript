function move() {
  var width = 0;
  var intervalId = setInterval(frame, 10);

  function frame() {
    if (width == 100) {
      clearInterval(intervalId);
    } else {
      width++;
      console.log(width + '%');
    }
  }
}


move();