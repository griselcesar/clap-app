import mongoose from "mongoose";
import { config } from "dotenv";

import app from "./server/index.js";

config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`connect db success`);
    app.listen(process.env.PORT, () => {
      console.log(`API listen on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
