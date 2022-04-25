const url = "https://api.sampleapis.com/wines/reds";
const getWineReviews = async () => {
  try {
    const data = await fetch(url);
    const wineList = await data.json();
    const cartuxaWine = wineList.filter((wine) => wine.winery === "Cartuxa");
    console.log("These are ", cartuxaWine[0].rating.reviews);
  } catch (error) {
    console.error("This is the error", error);
  }
};

getWineReviews();
