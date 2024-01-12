import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SingIn } from "./pages/signin";
import { SingUp } from "./pages/signup";
import { CreateDemande } from "./pages/create-demande";
import { CreatePrestataire } from "./pages/create-prestataire";
import { CreateService } from "./pages/create-service";
import { Profile } from "./pages/profile";
import {
  PrivateRoute,
  PrivateRouteSuperAdmin,
} from "./components/PrivateRoute";
import { Header } from "./components/Header";
import { ServicePage } from "./components/ServicePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-demande" element={<CreateDemande />} />
          <Route path="/create-prestataire" element={<CreatePrestataire />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SingUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route element={<PrivateRouteSuperAdmin />}>
              <Route path="/create-service" element={<CreateService />} />
            </Route>
          </Route>
          <Route path="/service/:id" element={<ServicePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
