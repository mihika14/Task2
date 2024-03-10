const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

require("./models/Database");
const Data = mongoose.model("data");

app.use(express.json());
let addCount = 0;
let updateCount = 0;

// Add: On clicking the Add button, if there is any data it should get clear and the user should be able to add new data. 
app.post("/adddata", async (req, res) => {
    try {
        
        addCount++;

        // Data getting cleared
        await Data.deleteMany({});
        const { name } = req.body;

        // Data being Created
        await Data.create({ name });

        res.status(200).json({ status: "ok", message: "data added" });

        // handling error
    } catch (error) {
        console.error(error);
        res.status(400).json({ status: "error", error: error.message });
    }
});

// Update: On this button click, the user should be able to update the data. 
app.put("/updatedata/:id", async (req, res) => {
    try {
        updateCount++;

        const { name } = req.body;
        const updatedData = await Data.findByIdAndUpdate(req.params.id, { name }, { new: true });

        if (!updatedData) {
            return res.status(404).json({ error: "Data not found" });
        }

        res.status(200).json(updatedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update data" });
    }
});

// Count: API to show number of times (count), user has called add and update API
app.get("/count", (req, res) => {
    res.json({ addCount, updateCount });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
