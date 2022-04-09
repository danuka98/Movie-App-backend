const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "config/config.env" });

const connectDatabase = function () {
  mongoose.connect(
    process.env.MONGODB_URL,
    {
      //useCreateIndex : true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.log("Database error: ", error.message);
      }
    }
  );

  mongoose.connection.once("open", () => {
    console.log("Database connected");
  });
};
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
