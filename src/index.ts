import express from "express";
import db from "./database/db";

const app = express();
const PORT = 3000;

app.use(express.json());

// Test route to confirm DB works
app.get("/health", (req, res) => {
  const row = db.prepare("SELECT datetime('now') as now").get() as {
    now: string;
  };

  res.json({
    status: "ok",
    dbTime: row?.now,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
