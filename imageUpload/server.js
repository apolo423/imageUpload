const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');

const users = require("./routes/api/users");
const facebooks = require("./routes/api/facebooks")
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  
  if (req.method === "OPTIONS"){
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
      return res.status(200).json({})
  }

  next()
})
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/facebooks",facebooks)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
const port = process.env.PORT || 5555;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
