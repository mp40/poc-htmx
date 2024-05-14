import { setupExpressServer } from "./index.js";
import process from "process";

const PORT = process.env.PORT || 3030;
const app = setupExpressServer();

app.listen(PORT, () => {
  console.log("Server running on:", PORT);
});
