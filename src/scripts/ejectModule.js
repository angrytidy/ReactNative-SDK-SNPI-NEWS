var fs = require('fs-extra');
var path = require('path');

try {
  const moduleName = 'Home';
  fs.copySync(
    path.join(process.cwd(), 'src', 'modules', moduleName),
    path.join(process.cwd(), 'src', 'modules', moduleName),
  );
} catch (err) {
  console.log('Error: ' + err);
}
