// Object TypeScript

const city: string = "Dhaka";
const fruits: string[] = ["mango", "banana", "apple"];

//Object likhte hole age etar type declare kora lage. Sheta object er moddhe o kora jay or object er bahireo kora jay
//declare object type
type Person = {
  name: string;
  age: number;
  salary: number;
};
const student: Person = {
  name: "kamal Ataturk",
  age: 115,
  salary: 56000,
};
