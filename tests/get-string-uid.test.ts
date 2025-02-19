import { getStringUid } from "../mod.ts";

function randomString(
  length: number,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const db = new Map<string, number>();

Deno.test("getStringUid with alphabet and numbers", () => {
  for (let i = 1; i <= 10000; i++) {
    for (let k = 0; k < 30; k++) {
      const rnd = randomString(i);
      const uid = getStringUid(rnd);

      if (db.has(rnd)) {
        if (db.get(rnd) !== uid) {
          throw new Error(`Expected ${db.get(rnd)} but got ${uid} for ${rnd}`);
        } else {
          db.set(rnd, uid);
        }
      }
    }
  }
});

Deno.test("getStringUid with ABCabc random string", () => {
  for (let i = 1; i <= 10000; i++) {
    for (let k = 0; k < 30; k++) {
      const rnd = randomString(i, "ABCabc");
      const uid = getStringUid(rnd);

      if (db.has(rnd)) {
        if (db.get(rnd) !== uid) {
          throw new Error(`Expected ${db.get(rnd)} but got ${uid} for ${rnd}`);
        } else {
          db.set(rnd, uid);
        }
      }
    }
  }
});
