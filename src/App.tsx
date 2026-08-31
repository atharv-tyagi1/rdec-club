import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ClubsPage from "./pages/ClubsPage";
import ClubPage from "./pages/ClubPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-paper">
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/clubs" replace />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/clubs/:clubId" element={<ClubPage />} />
            <Route path="*" element={<Navigate to="/clubs" replace />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </HashRouter>
  );
}
