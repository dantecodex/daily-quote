import mongoose from "mongoose";
import "dotenv/config"

import app from "./app.js";
import { loadEmailData, refreshUsersAndQuote } from "./sendQuote.js";

mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('DB connection successfull');
    loadEmailData();
    refreshUsersAndQuote();
}).catch((err) => {
    console.error('Failed to connect with DB', err);
})

app.listen(process.env.PORT || 4201, (req, res) => {
    console.log(`Server has been started in ${process.env.ENVI} mode on http://localhost:${process.env.PORT ?? 4201}`);
})

