import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";
import { useContext } from "react";
import { Store } from "./Store";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { posts, user } = state;
  return (
    <div className="w-h flex">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
        {!user && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
