// interface declare er time a Name ta capital a dewa hoy

interface Player {
  name: string;
  club: string;
  salary: number;
  wife?: string; // ? diye condition dewa hoise thakteo pare nao thakte pare.
}

const messy: Player = {
  name: "L Messi",
  club: "Abohani",
  salary: 12000,
  wife: "Nosimon Ara Begum",
};
// Extends kora ekta theke arekta call kora.
interface employee {
  name: string;
  designation: string;
  salary: number;
  age: number;
}
interface Developer extends employee {
  //employee ke extends kore or property niye asche.
  language: string;
  codeEditor: string;
}
