const menu = [

  /* ======================= STARTERS ======================= */

  { id: 1, name: "Spring Rolls", price: 6.99, category: "Starters", type: "Veg", image: "https://images.unsplash.com/photo-1604908177522-432b39b9a2d1", enabled: true },
  { id: 2, name: "Bruschetta", price: 7.49, category: "Starters", type: "Veg", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950", enabled: true },
  { id: 3, name: "Paneer Tikka", price: 8.49, category: "Starters", type: "Veg", image: "https://images.unsplash.com/photo-1626776876729-bab436ae61c9", enabled: true },
  { id: 4, name: "Veg Manchurian", price: 7.99, category: "Starters", type: "Veg", image: "https://images.unsplash.com/photo-1600628422019-9b6f9c4e2b07", enabled: true },
  { id: 5, name: "Cheese Corn Balls", price: 7.49, category: "Starters", type: "Veg", image: "https://images.unsplash.com/photo-1608758447385-9c9d1d2d5e6b", enabled: true },

  { id: 6, name: "Chicken Tikka", price: 9.99, category: "Starters", type: "Non-Veg", image: "https://images.unsplash.com/photo-1604908177453-7462950a0f07", enabled: true },
  { id: 7, name: "Chicken Wings", price: 9.49, category: "Starters", type: "Non-Veg", image: "https://images.unsplash.com/photo-1544025162-d76694265947", enabled: true },
  { id: 8, name: "Fish Fingers", price: 9.29, category: "Starters", type: "Non-Veg", image: "https://images.unsplash.com/photo-1600891963921-69b8c5b0d47c", enabled: true },
  { id: 9, name: "Calamari", price: 8.99, category: "Starters", type: "Non-Veg", image: "https://images.unsplash.com/photo-1617191518004-8a3a0c6f52d3", enabled: true },
  { id: 10, name: "Prawn Tempura", price: 10.49, category: "Starters", type: "Non-Veg", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1", enabled: true },

  /* ======================= MAIN COURSE ======================= */

  { id: 11, name: "Paneer Butter Masala", price: 13.99, category: "Main Course", type: "Veg", image: "https://images.unsplash.com/photo-1626776876729-bab436ae61c9", enabled: true },
  { id: 12, name: "Shahi Paneer", price: 14.49, category: "Main Course", type: "Veg", image: "https://images.unsplash.com/photo-1600628422019-9b6f9c4e2b07", enabled: true },
  { id: 13, name: "Veg Kolhapuri", price: 12.99, category: "Main Course", type: "Veg", image: "https://images.unsplash.com/photo-1608758447385-9c9d1d2d5e6b", enabled: true },
  { id: 14, name: "Vegetable Pasta", price: 14.99, category: "Main Course", type: "Veg", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b", enabled: true },
  { id: 15, name: "Veg Biryani", price: 13.49, category: "Main Course", type: "Veg", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0", enabled: true },

  { id: 16, name: "Butter Chicken", price: 15.99, category: "Main Course", type: "Non-Veg", image: "https://images.unsplash.com/photo-1601050690294-397f3c324515", enabled: true },
  { id: 17, name: "Chicken Biryani", price: 16.49, category: "Main Course", type: "Non-Veg", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0", enabled: true },
  { id: 18, name: "Grilled Salmon", price: 18.99, category: "Main Course", type: "Non-Veg", image: "https://images.unsplash.com/photo-1604909053198-4cdd3a94b64e", enabled: true },
  { id: 19, name: "Ribeye Steak", price: 24.99, category: "Main Course", type: "Non-Veg", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", enabled: true },
  { id: 20, name: "Prawn Curry", price: 17.99, category: "Main Course", type: "Non-Veg", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", enabled: true },

  /* ======================= DESSERTS ======================= */

  { id: 21, name: "Tiramisu", price: 6.49, category: "Desserts", type: "Veg", image: "https://images.unsplash.com/photo-1603079841806-1dc3d5b3c3b6", enabled: true },
  { id: 22, name: "Cheesecake", price: 5.99, category: "Desserts", type: "Veg", image: "https://images.unsplash.com/photo-1542826438-5b06d57f1f8c", enabled: true },
  { id: 23, name: "Chocolate Brownie", price: 5.49, category: "Desserts", type: "Veg", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c", enabled: true },
  { id: 24, name: "Gulab Jamun", price: 4.49, category: "Desserts", type: "Veg", image: "https://images.unsplash.com/photo-1601050690734-7aaafc0f57b2", enabled: true },
  { id: 25, name: "Ice Cream Sundae", price: 4.99, category: "Desserts", type: "Veg", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341", enabled: true },

  /* ======================= BEVERAGES ======================= */

  { id: 26, name: "Coffee", price: 2.99, category: "Beverages", type: "Veg", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", enabled: true },
  { id: 27, name: "Cold Coffee", price: 4.49, category: "Beverages", type: "Veg", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", enabled: true },
  { id: 28, name: "Fresh Lime Soda", price: 3.49, category: "Beverages", type: "Veg", image: "https://images.unsplash.com/photo-1571079931931-1b4b9d95b81b", enabled: true },
  { id: 29, name: "Orange Juice", price: 3.99, category: "Beverages", type: "Veg", image: "https://images.unsplash.com/photo-1556881286-fc6915169721", enabled: true },
  { id: 30, name: "Mocktail Mojito", price: 4.99, category: "Beverages", type: "Veg", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e", enabled: true }

];

export default menu;
