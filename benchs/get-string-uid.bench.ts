import { getStringUid } from "../mod.ts";

function randomString(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

Deno.bench({
  name: "getStringUid",
  fn: () => void getStringUid("hello world"),
});

const randomStrings: Record<number, string> = {
  100: randomString(100),
  200: randomString(200),
  300: randomString(300),
  400: randomString(400),
  500: randomString(500),
  600: randomString(600),
  700: randomString(700),
  800: randomString(800),
  900: randomString(900),
  1000: randomString(1000),
};

for (let i = 100; i <= 1000; i += 100) {
  Deno.bench(`getStringUid vs ${i} string length`, () => {
    const rnd = randomStrings[i];
    getStringUid(rnd);
  });
}
