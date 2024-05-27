const mongoose = require("mongoose");
const colors = require("colors");
//function mmongodb dfatabase connection
const connectDb = async () => {
  try {
    //use env variable for prod
    await mongoose.connect(
      "mongodb+srv://martindevelopske:JGrwuxjYyJYQTdXF@food-db.p4vx6kq.mongodb.net/?retryWrites=true&w=majority&appName=food-db"
    );
    console.log(`Connected To Database ${mongoose.connection.host} `.bgWhite);
  } catch (error) {
    console.log("DB Error", error);
  }
};
module.exports = connectDb;
