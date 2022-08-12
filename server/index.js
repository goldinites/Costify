import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  databaseURL: "https://costify-app-default-rtdb.firebaseio.com"
}
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
