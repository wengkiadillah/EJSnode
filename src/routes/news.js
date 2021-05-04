const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

newsRouter.get("/", async (req, res) => {
  try {
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts`);
    res.render("index", { articles: newsAPI.data });
    // console.log(newsAPI.data);
  } catch (error) {
    console.error("error", error.message);
  }
});

module.exports = newsRouter;
