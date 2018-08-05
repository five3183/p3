const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000;
const app = express();


app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});