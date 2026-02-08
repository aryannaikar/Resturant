import menu from "../data/menuData";

export function seedMenuOnce() {
  const existing = localStorage.getItem("menu_items");

  if (!existing || JSON.parse(existing).length === 0) {
    localStorage.setItem(
      "menu_items",
      JSON.stringify(menu)
    );
    console.log("✅ menu_items seeded from menuData.js");
  }
}
