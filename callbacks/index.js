import {readFile} from 'fs';

readFile('input.txt', 'utf8', function callback(err, data) {
    if (err) {
      console.error("Error:", err); // 'err' is an argument here
    } else {
      console.log("File contents:", data); // 'data' is another argument here
    }
  });

  const numbers = [1, 2, 3, 4];

numbers.forEach((number) => {
  console.log(number * 2);
});

function greet(name, Hii){
    console.log(`hello ${name}`)
    Hii()
}

function Hii () {
    console.log("Hii")
}

greet("ram saloke" , Hii)  