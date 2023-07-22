import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ItemListContainer} />

        <Route path="*" element={<h1>Page not found: 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
