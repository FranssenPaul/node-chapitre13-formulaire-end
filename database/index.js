const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connexion ok !");
  })
  .catch((err) => {
    console.log(err);
  });
