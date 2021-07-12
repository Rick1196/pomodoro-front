import { commonData } from './commonData';
import { firebaseConfig } from './firebase';
import { languages } from './supportedLanguages';

export const environment = {
  languages: languages,
  commonData: commonData,
  firebase: firebaseConfig,
  production: true,
};
