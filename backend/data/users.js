import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@mail.ru",
    password: bcrypt.hashSync("123", 10),
    isAdmin: true,
    phone: 998901234567,
  },
  {
    name: "Ibrokhim",
    email: "ibroxim@mail.ru",
    password: bcrypt.hashSync("123", 10),
    phone: 998901112211,
  },
  {
    name: "Abdullajon",
    email: "abdulla@mail.ru",
    password: bcrypt.hashSync("123", 10),
    phone: 998909989911,
  },
  {
    name: "test",
    email: "test@mail.ru",
    password: bcrypt.hashSync("123", 10),
    phone: 998909989912,
  },
];
export default users;
