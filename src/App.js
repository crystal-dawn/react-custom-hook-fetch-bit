import React from "react";
import SearchPage from "./components/search-page/SearchPage";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return <SearchPage />;
}

export default App;
