import { components } from "./types";

const user: components["schemas"]["User"] = {
  email: "test.com",
  name: "codeandload",
  id: "32",
};

console.log(` === HEY, I AM FRONTEND === , ${user}`);
