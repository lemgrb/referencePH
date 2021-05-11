const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname,'components'),
      path.join(__dirname,'styles'),
    ],
  },
}
