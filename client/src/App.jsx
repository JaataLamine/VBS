import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SingIn } from "./pages/signin";
import { SingUp } from "./pages/signup";
import { FaireDemande } from "./pages/faire-demande";
import { CreatePrestataire } from "./pages/create-prestataire";
import { CreateService } from "./pages/create-service";
import { Profile } from "./pages/Profile";
import { Demandes } from "./pages/demandes";
import { Prestataires } from "./pages/prestataires";
import {
  PrivateRoute,
  PrivateRouteAdmin,
  PrivateRouteSuperAdmin,
} from "./components/PrivateRoute";
import { Header } from "./components/Header";
import { ServicePage } from "./components/ServicePage";
import { SavedPrestataire } from "./pages/saved-prestataire";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faire-demande" element={<FaireDemande />} />
          <Route path="/create-prestataire" element={<CreatePrestataire />} />
          <Route path="/saved-prestataire" element={<SavedPrestataire />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SingUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />} />
            <Route element={<PrivateRouteSuperAdmin />}>
              <Route path="/create-service" element={<CreateService />} />
            </Route>
            <Route element={<PrivateRouteAdmin />}>
              <Route path="/demandes" element={<Demandes />} />
              <Route path="/prestataires" element={<Prestataires />} />
            </Route>
          </Route>
          <Route path="/service/:id" element={<ServicePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
