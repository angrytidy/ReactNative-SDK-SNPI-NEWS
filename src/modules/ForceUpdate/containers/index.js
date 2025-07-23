import React from 'react';

// the components
import ForceUpdateComponent from './components';

// Injectors
import injectLocales from '../../../utils/injectLocales';



// import locales
import fr from '../locales/fr';

const ForceUpdate = (props) => {
  injectLocales({fr});
  return <ForceUpdateComponent {...props} />;
};

export default ForceUpdate;
