
exports.min = function min (array) {
  if(!array || array.length == 0) {
    return 0;
  }
  
  return array.reduce((previous, current) => previous < current ? previous : current );
}

exports.max = function max (array) {
  if(!array || array.length == 0) {
    return 0;
  }
  
  return array.reduce((previous, current) => previous > current ? previous : current );
}

exports.avg = function avg (array) {
  if(!array || array.length == 0) {
    return 0;
  }
  
  return array.reduce((previous, current) => previous + current ) / array.length;
}
