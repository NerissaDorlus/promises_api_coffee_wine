// get hot coffees from sampleapis.com and output a list of ingredients in a latte
import fetch from "node-fetch";

const url = "https://api.sampleapis.com/coffee/hot";

const dotThen = () => {
  fetch(url)
    .then((data) => data.json())
    // .then(data => {
    //     return data.json()
    // })
    .then((coffeeList) => {
      const res = coffeeList.filter((coffee) => coffee.title === "Latte");
      console.log("These are the ingredients of a latte", res[0].ingredients);
    })
    .catch((error) => {
      console.error("This is the error", error);
    });
};

//dotThen()

const dotThenAsync = async () => {
  try {
    const data = await fetch(url);
    const coffeeList = await data.json();
    const lattes = coffeeList.filter((coffee) => coffee.title === "Latte");
    console.log("These are the ingredients of a latte", lattes[0].ingredients);
  } catch (error) {
    console.error("This is the error", error);
  }
};

dotThenAsync();
