import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "@/components/Basic/NavigationBar.jsx";
import Footer from "@/components/Basic/Footer.jsx";
import Home from "@/pages/Home/Home.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/map" element={<Home />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
