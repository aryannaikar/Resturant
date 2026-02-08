import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../admin.css";

const EMPTY_ITEM = {
  name: "",
  price: "",
  category: "Starters",
  type: "Veg",
  image: "",
  enabled: true,
};

export default function MenuManager() {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState(EMPTY_ITEM);

  // LOAD MENU
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("menu_items")) || [];
    setMenu(data);
  }, []);

  // SAVE MENU
  useEffect(() => {
    localStorage.setItem("menu_items", JSON.stringify(menu));
  }, [menu]);

  // ---------- TOGGLE ----------
  const toggleItem = (id) => {
    setMenu(prev =>
      prev.map(item =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  // ---------- EDIT ----------
  const startEdit = (item) => {
    setEditingItem(item.id);
    setFormData(item);
    setShowForm(true);
  };

  // ---------- ADD ----------
  const startAdd = () => {
    setEditingItem(null);
    setFormData(EMPTY_ITEM);
    setShowForm(true);
  };

  const saveItem = () => {
    if (!formData.name || !formData.price) {
      alert("Name and price are required");
      return;
    }

    if (editingItem) {
      // UPDATE
      setMenu(prev =>
        prev.map(item =>
          item.id === editingItem ? { ...formData } : item
        )
      );
    } else {
      // ADD NEW
      setMenu(prev => [
        ...prev,
        {
          ...formData,
          id: Date.now(),
          price: Number(formData.price),
          enabled: true,
        },
      ]);
    }

    setShowForm(false);
    setFormData(EMPTY_ITEM);
    setEditingItem(null);
  };

  const filteredMenu = menu.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <h2>Menu Management</h2>

          {/* SEARCH + ADD */}
          <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: 1, padding: 8 }}
            />
            <button onClick={startAdd}>+ Add Item</button>
          </div>

          {/* FORM */}
          {showForm && (
            <div className="form-card">
              <h3>{editingItem ? "Edit Item" : "Add New Item"}</h3>

              <input
                placeholder="Item name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />

              <input
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />

              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option>Starters</option>
                <option>Main Course</option>
                <option>Desserts</option>
                <option>Beverages</option>
              </select>

              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option>Veg</option>
                <option>Non-Veg</option>
              </select>

              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={saveItem}>Save</button>
                <button onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </div>
          )}

          {/* MENU LIST */}
          {filteredMenu.map(item => (
            <div key={item.id} className="list-card">
              <div>
                <strong>{item.name}</strong>
                <p>
                  ₹{item.price} • {item.category} • {item.type}
                </p>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => startEdit(item)}>Edit</button>
                <button
                  className={item.enabled ? "btn-on" : "btn-off"}
                  onClick={() => toggleItem(item.id)}
                >
                  {item.enabled ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
          ))}

          {filteredMenu.length === 0 && <p>No item found</p>}
        </div>
      </div>
    </div>
  );
}
