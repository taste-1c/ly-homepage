import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { propertyCategoryIds } from "./data/properties";
import { businessSectionPath, services } from "./data/site";
import Home from "./pages/Home";
import { useRouteEffects } from "./hooks/useRouteEffects";
import { useLanguage } from "./i18n";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Process = lazy(() => import("./pages/Process"));
const Properties = lazy(() => import("./pages/Properties"));
const PropertyCategory = lazy(() => import("./pages/PropertyCategory"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const RepresentativeMessage = lazy(() => import("./pages/RepresentativeMessage"));
const Organization = lazy(() => import("./pages/Organization"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageRoutes() {
  useRouteEffects();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      {services.map(({ id }) => (
        <Route key={id} path={`/${id}`} element={<Navigate to={businessSectionPath(id)} replace />} />
      ))}
      <Route path="/process" element={<Process />} />
      <Route path="/properties" element={<Properties />} />
      {propertyCategoryIds.map((category) => (
        <Route key={category} path={`/properties/${category}`} element={<PropertyCategory category={category} />} />
      ))}
      <Route path="/properties/:slug" element={<PropertyDetail />} />
      <Route path="/message" element={<RepresentativeMessage />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/*" element={<Navigate to="/contact" replace />} />
      <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("本文へスキップ", "跳至正文")}
      </a>
      <Header key={pathname} />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="page-loading" role="status">
              {t("読み込み中です…", "正在加载…")}
            </div>
          }
        >
          <PageRoutes />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
