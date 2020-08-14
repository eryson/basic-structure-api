require("dotenv/config");
import app from "./app";

app.listen(3001, () => {
  console.log(`🚀 API is running on port ${3001}!`);
});
