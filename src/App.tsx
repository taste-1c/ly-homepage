import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import { useRouteEffects } from "./hooks/useRouteEffects";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageRoutes() {
  useRouteEffects();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact/*" element={<Navigate to="/" replace />} />
      <Route path="/contact.html" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へスキップ
      </a>
      <Header key={pathname} />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="page-loading" role="status">
              読み込み中です…
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
