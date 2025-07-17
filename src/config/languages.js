import strings from 'config/strings';

const languages = [
  {
    name: strings.fr,
    value: 'fr',
  },
  {
    name: strings.ar,
    value: 'ar',
  },
];

export const getDefaultLang = () => {
  const current = strings.getInterfaceLanguage().split('-')[0];
  const language = languages.find((one) => one.value === current);
  console.log('default language', language);
  return language || languages[0];
};

export default languages;
