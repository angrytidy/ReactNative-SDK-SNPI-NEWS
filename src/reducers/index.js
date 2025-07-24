const reducerModule = {
  global: require('./globalReducer'),
  auth: require('../modules/Auth/reducers'),
  list: require('../modules/Home/reducers'),
  profile: require('../modules/Profile/reducers'),
  notificationsPermissions: require('./notificationsPermissionsReducer'),
  adherentCard: require('./adherentCardReducer'),
};

const moduleNames = [
  'global',
  'auth',
  'list',
  'profile',
  'notificationsPermissions',
  'adherentCard',
];

const Reducers = {};

Object.entries(reducerModule).forEach(([name, mod]) => {
  // Check if it's a function (default export)
  if (typeof mod === 'function' || typeof mod.default === 'function') {
    Reducers[name] = mod.default || mod;
    console.log(`✅ Loaded reducer: ${name}`);
  } else {
    console.warn(`⚠️ Missing or invalid reducer for module: ${name}`);
  }
});

export default Reducers;
