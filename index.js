var ndarray = require('ndarray')
var fft = require('ndarray-fft')
var mag = require('ndarray-complex').mag

module.exports = frequencies

function frequencies (input) {
  var data = new Float32Array(input.data.length)
  for (var i = 0; i < input.length; i++) {
      data[i] = Math.min(1, Math.max(-1, data.input[i]))
  }
  
  var reals = ndarray(data, input.shape, input.stride, input.offset)
  var imags = ndarray(new Float32Array(data.length), input.shape, input.stride, input.offset)
  
  fft(1, reals, imags)
  mag(reals, reals, imags)

  return reals
}
