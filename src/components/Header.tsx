import {
  useEffect,
  useId,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
} from "react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "motion/react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Building2, ChevronDown, Menu, MessageSquareText, X } from "lucide-react";
import { propertyCategories, propertyCategoryIds } from "../data/properties";
import { headerNavigation } from "../data/site";
import { useLanguage } from "../i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Brand } from "./Shared";
import "../styles/header.css";

type DropdownItem = Extract<(typeof headerNavigation)[number], { links: unknown } | { path: "/properties" }>;
type DropdownKind = "properties" | "corporate";
type OpenDropdown = { kind: DropdownKind; source: "hover" | "button" } | null;

const corporateIcons = {
  "/message": MessageSquareText,
  "/about": Building2,
};

function DropdownLink({ to, labelJa, labelZh, visual, onNavigate }: {
  to: string;
  labelJa: string;
  labelZh: string;
  visual: ReactNode;
  onNavigate: () => void;
}) {
  return (
    <NavLink className="nav-dropdown-link" to={to} end onClick={onNavigate}>
      {visual}
      <span className="nav-dropdown-label">
        <span lang="ja">{labelJa}</span>
        <span lang="zh-Hans">{labelZh}</span>
      </span>
      <ArrowRight className="nav-dropdown-arrow" size={16} strokeWidth={1.5} aria-hidden="true" />
    </NavLink>
  );
}

function NavigationDropdown({
  item,
  mobile,
  dropdown,
  setDropdown,
  onNavigate,
}: {
  item: DropdownItem;
  mobile: boolean;
  dropdown: OpenDropdown;
  setDropdown: Dispatch<SetStateAction<OpenDropdown>>;
  onNavigate?: () => void;
}) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const id = useId();
  const groupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const corporate = "links" in item;
  const kind: DropdownKind = corporate ? "corporate" : "properties";
  const open = dropdown?.kind === kind;
  const currentPath = pathname.toLowerCase().replace(/\/+$/, "");
  const active = corporate
    ? item.links.some((link) => link.path === currentPath)
    : currentPath === item.path || currentPath.startsWith(`${item.path}/`);

  function close() {
    window.clearTimeout(closeTimer.current);
    setDropdown((current) => current?.kind === kind ? null : current);
  }

  function navigate() {
    close();
    onNavigate?.();
  }

  useEffect(() => {
    if (mobile || !open) return;
    const desktop = window.matchMedia("(min-width: 901px)");
    function closeCurrent() {
      setDropdown((current) => current?.kind === kind ? null : current);
    }
    function closeOnOutsideClick(event: PointerEvent) {
      if (!groupRef.current?.contains(event.target as Node)) closeCurrent();
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      closeCurrent();
      buttonRef.current?.focus();
    }
    function closeOnResize() {
      if (!desktop.matches) closeCurrent();
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnResize);
    return () => {
      window.clearTimeout(closeTimer.current);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnResize);
    };
  }, [kind, mobile, open, setDropdown]);

  return (
    <div
      ref={groupRef}
      className={`nav-dropdown nav-dropdown--${kind}`}
      onPointerEnter={mobile ? undefined : (event) => {
        if (event.pointerType !== "mouse") return;
        window.clearTimeout(closeTimer.current);
        const focusedPanel = document.activeElement?.closest(".nav-dropdown-panel");
        if (focusedPanel && focusedPanel !== panelRef.current) buttonRef.current?.focus();
        setDropdown((current) => current?.kind === kind ? current : { kind, source: "hover" });
      }}
      onPointerLeave={mobile ? undefined : (event) => {
        if (event.pointerType !== "mouse" || !open) return;
        closeTimer.current = window.setTimeout(() => {
          if (panelRef.current?.contains(document.activeElement)) buttonRef.current?.focus();
          close();
        }, 220);
      }}
      onBlur={mobile ? undefined : (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (mobile && open && event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          close();
          buttonRef.current?.focus();
        }
      }}
    >
      <div className="nav-dropdown-trigger">
        {!corporate && (
          <NavLink to={item.path} onClick={navigate}>
            {t(item.label, item.labelZh)}
          </NavLink>
        )}
        <button
          ref={buttonRef}
          type="button"
          className={`nav-dropdown-toggle${active ? " active" : ""}`}
          aria-label={corporate ? undefined : t("物件カテゴリー", "房源分类")}
          aria-expanded={open}
          aria-controls={id}
          onClick={(event) => {
            const pointerClick = event.detail > 0;
            setDropdown((current) => {
              if (current?.kind === kind && (current.source === "button" || !pointerClick)) return null;
              return { kind, source: "button" };
            });
          }}
        >
          {corporate && t(item.label, item.labelZh)}
          <ChevronDown size={15} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </div>
      <div ref={panelRef} id={id} className="nav-dropdown-panel" hidden={!open}>
        <div className="nav-dropdown-heading">
          <span lang="ja">{corporate ? item.label : "物件カテゴリー"}</span>
          <span lang="en">{corporate ? "CORPORATE INFORMATION" : "PROPERTY CATEGORIES"}</span>
        </div>
        <div className="nav-dropdown-links">
          {corporate ? item.links.map((link) => {
            const Icon = corporateIcons[link.path];
            return (
              <DropdownLink
                key={link.path}
                to={link.path}
                labelJa={link.label}
                labelZh={link.labelZh}
                visual={<Icon className="nav-dropdown-icon" size={21} strokeWidth={1.5} aria-hidden="true" />}
                onNavigate={navigate}
              />
            );
          }) : propertyCategoryIds.map((categoryId) => {
            const category = propertyCategories[categoryId];
            return (
              <DropdownLink
                key={categoryId}
                to={`${item.path}/${categoryId}`}
                labelJa={category.nameJa}
                labelZh={category.nameZh}
                visual={<img src={`/images/${category.image}`} alt="" loading="lazy" width="66" height="50" />}
                onNavigate={navigate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PrimaryNavigation({ mobile = false, onNavigate }: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const { t } = useLanguage();
  const [dropdown, setDropdown] = useState<OpenDropdown>(null);

  return (
    <nav
      className={mobile ? undefined : "desktop-nav"}
      aria-label={t("メインナビゲーション", "主导航")}
    >
      {headerNavigation.map((item) => (
        "links" in item || item.path === "/properties" ? (
          <NavigationDropdown
            key={item.label}
            item={item}
            mobile={mobile}
            dropdown={dropdown}
            setDropdown={setDropdown}
            onNavigate={onNavigate}
          />
        ) : (
          <NavLink key={item.path} to={item.path} end={item.path === "/"} onClick={onNavigate}>
            {t(item.label, item.labelZh)}
            <ArrowUpRight className="mobile-link-icon" size={20} strokeWidth={1} aria-hidden="true" />
          </NavLink>
        )
      ))}
    </nav>
  );
}

function MobileMenu({ panelRef, onDismiss, onNavigate }: {
  panelRef: RefObject<HTMLDivElement | null>;
  onDismiss: () => void;
  onNavigate: () => void;
}) {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const present = useIsPresent();

  return (
    <motion.div
      className="mobile-menu-layer"
      inert={!present}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.25 }}
    >
      <button
        type="button"
        className="menu-backdrop"
        aria-label={t("メニューの外側を閉じる", "关闭菜单遮罩")}
        tabIndex={-1}
        onClick={onDismiss}
      />
      <motion.div
        ref={panelRef}
        id="mobile-menu"
        className="mobile-menu"
        initial={{ y: reduced ? 0 : -14 }}
        animate={{ y: 0 }}
        exit={{ y: reduced ? 0 : -14 }}
      >
        <span className="eyebrow" lang="en">KOUU INC.</span>
        <PrimaryNavigation mobile onNavigate={onNavigate} />
        <p>{t("日本の街に、次世代の価値を。", "为日本城市创造面向下一代的价值。")}</p>
      </motion.div>
    </motion.div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function dismissMobileMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        dismissMobileMenu();
      }
      if (event.key === "Tab") {
        const focusable = [
          ...(actionsRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? []),
          ...(panelRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []),
        ].filter((element) => element.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    const media = window.matchMedia("(max-width: 900px)");
    function onResize() {
      if (!media.matches) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
        <div className="header-inner">
          <Brand />
          <PrimaryNavigation />
          <div ref={actionsRef} className="header-actions">
            <LanguageSwitcher />
            <button
              ref={toggleRef}
              className="menu-toggle"
              type="button"
              aria-label={open ? t("メニューを閉じる", "关闭菜单") : t("メニューを開く", "打开菜单")}
              aria-expanded={open}
              aria-controls={open ? "mobile-menu" : undefined}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <MobileMenu
            panelRef={panelRef}
            onDismiss={dismissMobileMenu}
            onNavigate={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
