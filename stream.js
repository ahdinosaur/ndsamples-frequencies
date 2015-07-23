var through = require('through2')

var frequencies = require('./')

module.exports = frequenciesStream

function frequenciesStream () {
  return through.obj(function (input, enc, cb) {
    cb(null, frequencies(input))
  })
}
