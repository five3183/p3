const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")

// DB CONFIG
// const db = require("./config/keys").mongoURI

//CONNECT TO Mongo
// mongoose.connect(db)
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err))

// ***** LOCAL MONGOOSE *****
const config = require("./config/database")

mongoose.connect(config.database)

mongoose.connection.on("connected", () => {
  console.log("connected to database: " + config.database)
})

const app = express();
const users = require("./routes/users")

const PORT = process.env.PORT || 5000;

//BRING IN CORS
app.use(cors())

//SET STATIC FOLDER 
app.use(express.static(path.join(__dirname, 'public')))

//BODYPARSER CHEAT CODES
app.use(bodyParser.json())

//PASSPORT
app.use(passport.initialize())
app.use(passport.session())

require("./config/passport")(passport)

//USER ROUTES
app.use("/users", users)

// INDEX ROUTE
app.get("/", (req, res) => {
  res.send("NO PAGE FOR YOU!")
})

//Server is listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});