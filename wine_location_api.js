//async await
import fetch from "node-fetch";

const url = "https://api.sampleapis.com/wines/reds";

const getWineryLocation = async () => {
  try {
    const data = await fetch(url);
    const wineList = await data.json();
    console.log(wineList);
    const redWines = wineList.filter((wine) => wine.winery === "Cartuxa");
    console.log("The location of this wine is", redWines[0].location);
  } catch (error) {
    console.error("This is the error", error);
  }
};

getWineryLocation();
