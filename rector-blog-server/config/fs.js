const fs = require('fs');
const path = require('path');

const removeMedia = file => fs.existsSync(path.join(__dirname, '..', 'uploads', file)) ? fs.unlinkSync(path.join(__dirname, '..', 'uploads', file)) : false;

module.exports = removeMedia;