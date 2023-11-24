import { BrowserRouter,Routes,Route } from "react-router-dom";
// import DrawerNav from "./components/Sidenav.jsx";
import Home from "./pages/Home.jsx";
import Informatique from "./pages/Informatique.jsx";
import Comptabilite from "./pages/Comptabilite.jsx";
import Gestion from "./pages/Gestion.jsx";
import Education from "./pages/Education.jsx";
import Layout from "./components/Layout.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="informatique" element={<Informatique />} />
            <Route path="comptabilite" element={<Comptabilite />} />
            <Route path="gestion" element={<Gestion />} />
            <Route path="education" element={<Education />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
