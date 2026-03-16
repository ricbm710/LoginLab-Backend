import Database from "better-sqlite3";
import path from "path";

//current working dir + db + login-lab.db
const dbPath = path.join(process.cwd(), "..", "db", "login-lab.db");

const db = new Database(dbPath);
db.pragma("foreign_keys = ON");

export default db;
