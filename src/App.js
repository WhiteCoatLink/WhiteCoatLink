import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Footer, Header, Home, Landing } from "./Router";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="font-sans">
      <Router>
        <Header />
        <Routes>
          {
            isAuthenticated ? (
              <>
                <Route path="/" element=<Landing /> exact />
                <Route path="/about" element=<About /> exact />

              </>
            ) : (
              <Route path="/" element={<Home />} exact />
            )

          }
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
