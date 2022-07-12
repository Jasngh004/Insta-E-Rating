import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-[#fff] md:rounded-lg p-7 drop-shadow-2xl">
        <h1 className="text-2xl md:text-3xl text-center font-bold">
          Drop Instagram Username Here
        </h1>
        <div className="flex flex-col mt-7 m-7">
          <p className="text-blue-500">Public Account Required</p>
          <input
            placeholder="Instagram Username"
            className="border px-3 py-2 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="space-y-3 md:space-y-0 md:space-x-2 flex flex-col md:flex-row items-center">
          <Link to={`/rate?q=${search}`}>
            <button
              disabled={!search}
              className="disabled:opacity-75 disabled:focus:opacity-75 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-16"
            >
              Engagement Rate
            </button>
          </Link>
          <button
            onClick={() => {
              window.location.href = "https://www.instagram.com/";
            }}
            className="disabled:opacity-75 disabled:focus:opacity-75 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
