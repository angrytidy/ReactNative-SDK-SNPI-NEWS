import { useEffect } from 'react';
import strings from 'config/strings';

import { merge } from 'lodash';

export default function injectLocales(locales) {
  const currentConfig = strings.getContent();
  const newContent = merge(currentConfig, locales);

  strings.setContent(newContent);
}

export function useInjectLocales(locales) {
  useEffect(() => {
    injectLocales(locales);
  }, [locales]);
}
