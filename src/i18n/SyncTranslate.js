import en from "Translation/en.json";
// import ge from 'Translation/ge.json';
import i18n from 'i18next';


i18n.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: en               // 'common' is our custom namespace
        },
        // ge:{
        //     common:ge
        // }
    },
});


export default i18n;