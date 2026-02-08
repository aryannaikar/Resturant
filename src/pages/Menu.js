import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import "./Menu.css";

function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  useEffect(() => {
    const storedMenu =
      JSON.parse(localStorage.getItem("menu_items")) || [];
    setMenuData(storedMenu);
  }, []);

  const filteredMenu = menuData
    .filter(item => item.enabled)
    .filter(item => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || item.category === category;

      const matchType =
        type === "All" || item.type === type;

      return matchSearch && matchCategory && matchType;
    });

  return (
    <div className="menu-page">

      {/* TITLE */}
      <div className="menu-title">
        <h1>Menu</h1>
        <span>{filteredMenu.length} items</span>
      </div>
      <div className="menu-intro">
  <h2>What are you craving today? 🍽️</h2>
  <p>Hand-picked dishes, freshly prepared</p>
</div>


      {/* STICKY TOOLBAR */}
      <div className="menu-toolbar">

        {/* SEARCH */}
        <input
          className="menu-search-input"
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* CATEGORY */}
        <div className="toolbar-group">
          {["All", "Starters", "Main Course", "Desserts", "Beverages"].map(cat => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VEG FILTER */}
        <div className="toolbar-group">
          <button
            className={`veg ${type === "Veg" ? "active" : ""}`}
            onClick={() => setType(type === "Veg" ? "All" : "Veg")}
          >
            🟢 Veg
          </button>
          <button
            className={`nonveg ${type === "Non-Veg" ? "active" : ""}`}
            onClick={() => setType(type === "Non-Veg" ? "All" : "Non-Veg")}
          >
            🔴 Non-Veg
          </button>
        </div>

      </div>

      {/* GRID */}
      <div className="menu-grid">
        {filteredMenu.length > 0 ? (
          filteredMenu.map(item => (
            <MenuItem key={item.id} item={item} />
          ))
        ) : (
          <p className="no-results">No dishes found</p>
        )}
      </div>

    </div>
  );
}

export default Menu;
