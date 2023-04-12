import { Webhook } from "svix";
import { buffer } from "micro";
import db from "../../../db/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const config = {
  api: {
    bodyParser: false,
  },
};

const secret = process.env.WEBHOOK_SECRET;

export default async function handler(req, res) {
  const payload = (await buffer(req)).toString();
  const headers = req.headers;

  const wh = new Webhook(secret);
  let msg;
  try {
    msg = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({});
  }
  if (msg.type === "user.created") {
    await db.insert(users).values({
      id: msg.data.id,
      username: msg.data.username,
      email: msg.data.email_addresses[0].email_address,
    });
  } else if (msg.type === "user.deleted") {
    await db.delete(users).where(eq(users.id, msg.data.id));
  } else {
    db.update(users).set({ username: msg.data.username }).where(eq(users.id, msg.data.id));
  }

  res.json({});
}
