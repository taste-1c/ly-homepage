import { useLanguage } from "../i18n";

export function LanguageSwitcher() {
  const { lang, t, setLang } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label={t("表示言語", "页面语言")}>
      <button type="button" lang="ja" aria-label="日本語 (JP)" aria-pressed={lang === "ja"} onClick={() => setLang("ja")}>
        JP
      </button>
      <span aria-hidden="true">/</span>
      <button type="button" lang="zh-Hans" aria-pressed={lang === "zh"} onClick={() => setLang("zh")}>
        中文
      </button>
    </div>
  );
}
