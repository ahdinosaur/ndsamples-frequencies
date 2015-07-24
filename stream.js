var through = require('through2')

var frequencies = require('./')

module.exports = frequenciesStream

function frequenciesStream (opts) {
  return through.obj(opts, function (input, enc, cb) {
    cb(null, frequencies(input))
  })
}
