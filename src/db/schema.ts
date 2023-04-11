import { text, mysqlTable, serial, varchar, binary, int } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 256 })
    .primaryKey()
    .default(sql`(UUID())`),
  fullName: text("full_name").notNull(),
  phone: varchar("phone", { length: 256 }),
});
