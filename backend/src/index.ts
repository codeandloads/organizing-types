import { User } from "caltypes/index";

const users: User[] = [
  { id: 1, name: "John Trivolta", email: "trivolta@gg.com", image: ".com" },
];

for (const user in users) {
  if (Object.prototype.hasOwnProperty.call(user, user)) {
    const element = user[0];
    console.log(element);
  }
}
