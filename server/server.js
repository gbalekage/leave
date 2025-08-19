const express = require("express");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/error");
require("dotenv").config();
const userRoutes = require("./routes/user");
const leavesRoutes = require("./routes/leave");
const statsRoutes = require("./routes/stats");
const cron = require("node-cron");
const { checkLeavesEndingToday } = require("./controllers/leave");
const path = require("path");
const fs = require("fs");
const fileUpload = require("express-fileupload");

const port = process.env.PORT || 3001;
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

const app = express();

// middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: clientUrl }));
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use("/api/users", userRoutes);
app.use("/api/leaves", leavesRoutes);
app.use("/api/leaves/stats", statsRoutes);

// error handling
app.use(notFound);
app.use(errorHandler);

// run the server
app.listen(port, () => {
  console.log(`Le serveur est en ligne sur http://localhost:${port}`);
  cron.schedule("0 7 * * *", async () => {
    console.log("Running daily leave check at 7:00 AM...");
    await checkLeavesEndingToday();
  });
});
