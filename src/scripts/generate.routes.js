var path = require('path');
var writeFileSync = require('fs').writeFileSync;

// GET ROUTING CONFIG FILE PATH
const routerPath = path.join(process.cwd(), 'src', 'router');
const routingConfigPath = `${routerPath}/routingConfig.js`;

// GLOB LIB
var glob = require('glob');

// RETRIEVE ALL MODULES ROUTES FILES
const routesFiles = glob.sync('routes.js', {
  cwd: process.cwd() + '/src',
  root: '/',
  matchBase: true,
});

// WRITE THE ROUTING CONFIG FILE CONTENT
try {
  const routesNames = routesFiles.map(file => {
    return file.split('/')[1].toLowerCase() + 'Routes';
  });
  const routesImports = routesFiles.map(file => {
    const name = file.split('/')[1].toLowerCase() + 'Routes';
    return 'import ' + name + ' from ' + '"' + file + '"';
  });

  // content to write in the file
  const content = `
/*
* Routing component (from modules folder)
*/
${routesImports.toString().replace(/[,]/gi, '\n')}

export default function configureRoutes() {
    const routes = [
        ${routesNames
          .map(name => '...' + name)
          .toString()
          .replace(',', ',\n')}
    ];

    return routes;
}
`;

  //TODO : check 'routingConfigPath' file exist
  writeFileSync(routingConfigPath, content);
} catch (error) {
  console.log('routing configuration error', error);
}
