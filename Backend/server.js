const PORT = 8000;
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
require("dotenv").config();

app.use(cors());

const username = process.env.USERNAMER;
const password = process.env.PASSWORDR;

app.get("/deals", async (req, res) => {
  try {
    const body = {
      source: "amazon_search",
      domain: "in",
      query: "deals of the day",
      start_page: 1,
      pages: 1,
      parse: true,
    };
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });

    const data = await response.json();
    const results = data.results[0].content.results.organic;
    const filteredDeals = results.filter((deal) => deal.price_strikethrough);
    const sortedByBestDeal = filteredDeals.sort((b, a) => {
      ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
        ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100;
    });
    res.send(sortedByBestDeal);
    // console.log(await response.json());
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
