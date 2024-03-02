import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Doctor, DoctorDetails, Footer, Header, Home, Landing, Services } from "./Router";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {
            isAuthenticated ? (
              <>
                <Route path="/" element=<Home /> exact />
                <Route path="/about" element=<About /> exact />
                <Route path="/services" element=<Services /> exact />
                <Route path="/about" element=<About /> exact />
                <Route path="/contact" element=<Contact /> exact />
                <Route path="/doctors" element=<Doctor /> exact />
                <Route path="/doctors/:id" element=<DoctorDetails /> exact />

              </>
            ) : (
              <Route path="/" element=<Landing /> exact />
            )

          }
          <Route path="*" element=<Landing /> exact />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
