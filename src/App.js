import { AiOutlineInstagram } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import Rate from "./pages/Rate";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = "https://www.instagram.com/";
        }}
        className="absolute mt-2 ml-2 text-2xl hover:scale-150 ease-in-out duration-300"
      >
        <AiOutlineInstagram fill="#fff" />
      </button>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
    </div>
  );
}

export default App;
