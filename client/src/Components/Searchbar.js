import { useState } from "react";
import { useHistory } from "react-router-dom";

// styles
import "./Searchbar.css";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState("/");
  const history = useHistory();

  history.listen((location) => {
    if (
      location.pathname === "/" ||
      location.pathname === "/clothes" ||
      location.pathname === "/phase2" ||
      location.pathname === "/phase3" ||
      location.pathname === "/phase4"
    ) {
      setCurrentPage(location.pathname);
    } else {
      return;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "") {
      setTerm("");
      history.push(currentPage);
    } else {
      setTerm("");
      history.push(`/search?q=${term}`);
    }
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          placeholder="Search Assignments"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </form>
    </div>
  );
}