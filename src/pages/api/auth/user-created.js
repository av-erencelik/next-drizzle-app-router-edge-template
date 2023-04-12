import { Webhook } from "svix";
import { buffer } from "micro";
import db from "../../../db/db";
import { users } from "@/db/schema";
import { env } from "@/env.mjs";
export const config = {
  api: {
    bodyParser: false,
  },
};

const secret = env.WEBHOOK_SECRET;

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
    db.insert(users).values({
      id: msg.data.id,
      username: msg.data.username,
      email: msg.data.email_addresses[0].email_address,
    });
  }

  res.json({});
}
