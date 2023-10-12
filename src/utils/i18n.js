import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const fr = {
  translation: {},
};

const it = {
  translation: {
    landing: {
      text: "Qual è il tuo livello di inglese?",
      subText: "Testalo ora!",
      instructionOne:
        "Assicurati di trovarti in un ambiente tranquillo e di avere abbondante tempo per completare il test.",
      instructionTwo:
        "Nel caso in cui non lo completassi, sarai tenuto a ricominciare dall'inizio",
      button: "Iniziamo!",
    },
    quiz: {
      instructionOne:
        "Rispondi alla domanda basandoti sulla registrazione qui sotto. Puoi ascoltare la registrazione una sola volta.",
      instructionTwo: "Rispondi alla domanda, scegliendo la risposta giusta",
      backButton: "Indietro",
      button: "Avanti",
    },
    result: {
      text: "Fantastico! Grazie per aver dedicato del tempo per svolgere il test",
      instructionOne: "Il tuo livello verrà valutato dal nostro team.",
      instructionTwo: "Vai al login e miglioralo quando inizia il tuo corso.",
      instructionThree: "Speriamo che ti divertirai durante il corso!",
      button: "Vai al login",
    },
  },
};

const en = {
  translation: {
    landing: {
      text: "What is your English level?",
      subText: "Test it now!",
      instructionOne:
        "Ensure that you are situated in a tranquil setting and have ample time to complete the test. ",
      instructionTwo:
        "In the event of non-completion, you will be required to restart from the beginning",
      button: "Get started!",
    },
    quiz: {
      text: "What is your English level?",
      subText: "Test it now!",
      instructionOne:
        "Answer the question based on the recording below. You can listen to the recording once only.",
      instructionTwo: "Answer the question, choosing the right answer ",
      backButton: "Back",
      button: "Next",
    },
    result: {
      text: "Great! Thanks for taking the time to do the test",
      subText: "Test it now!",
      instructionOne: "Your level will be assessed by our team.",
      instructionTwo: "Go to the login and improve it when your course starts.",
      instructionThree: "We hope you will enjoy the course!",
      button: "Go to login",
    },
  },
};

const es = {
  translation: {},
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: { it, en, es, fr },
  });

export default i18n;
