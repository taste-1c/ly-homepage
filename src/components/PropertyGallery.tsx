import { ImageIcon } from "lucide-react";
import { useState } from "react";
import type { PropertyImage } from "../data/properties";
import { useLanguage } from "../i18n";

export function PropertyPhoto({ photo, alt, eager = false }: {
  photo?: PropertyImage;
  alt: string;
  eager?: boolean;
}) {
  const { lang, t } = useLanguage();
  const [failed, setFailed] = useState(false);
  return photo && !failed ? (
    <img
      src={photo.src}
      alt={photo.alt?.[lang] ?? alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  ) : (
    <span className="property-photo-placeholder" role="img" aria-label={t("写真はありません", "暂无照片")}>
      <ImageIcon size={24} strokeWidth={1.25} aria-hidden="true" />
    </span>
  );
}

export function PropertyGallery({ photos, name }: { photos: readonly PropertyImage[]; name: string }) {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const photo = photos[selectedIndex];

  return (
    <section className="property-gallery" aria-label={t("物件写真", "房源照片")}>
      <div className="property-gallery-main">
        <PropertyPhoto key={photo?.src} photo={photo} alt={name} eager />
      </div>
      {photos.length > 1 && (
        <ul className="property-gallery-thumbnails" role="list">
          {photos.map((thumbnail, index) => (
            <li key={thumbnail.src}>
              <button
                type="button"
                aria-label={t("写真 " + (index + 1) + " を表示", "查看第 " + (index + 1) + " 张照片")}
                aria-pressed={index === selectedIndex}
                onClick={() => setSelectedIndex(index)}
              >
                <PropertyPhoto photo={thumbnail} alt="" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
