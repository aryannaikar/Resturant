import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import menu from "../data/menuData";

// 🔥 SEED MENU TO FIRESTORE (ONLY ONCE)
export async function seedMenuOnce() {
  try {
    const menuRef = collection(db, "menu");
    const snap = await getDocs(menuRef);

    // 🚫 Do not seed again if menu already exists
    if (!snap.empty) {
      console.log("✅ Menu already exists in Firestore");
      return;
    }

    // ✅ Push menuData items to Firestore
    for (const item of menu) {
      const { id, ...menuItem } = item; // remove local id
      await addDoc(menuRef, menuItem);
    }

    console.log("🔥 Menu successfully seeded to Firestore");
  } catch (err) {
    console.error("❌ Menu seeding failed", err);
  }
}
