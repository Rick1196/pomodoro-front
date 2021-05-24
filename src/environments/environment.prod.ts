import { firebaseConfig } from './firebase';
import { languages } from './supportedLanguages';

export const environment = {
  languages: languages,
  firebase: firebaseConfig,
  production: true,
};
