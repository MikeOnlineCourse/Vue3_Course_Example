const { ref } = Vue;

export function useLanguages() {
  const lang = ref(navigator.language);
  window.addEventListener("languagechange", () => {
    lang.value = navigator.language;
  });
  return { lang };
}

export function useSetLanguagesFn() {
  const set = (lang) => {
    document.getElementsByTagName("html")[0].lang = lang;
  };
  return { set };
}
