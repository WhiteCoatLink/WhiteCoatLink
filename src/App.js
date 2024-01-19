import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Footer, Header, Landing } from "./Router";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
