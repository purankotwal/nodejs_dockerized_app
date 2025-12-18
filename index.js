const express = require("express");
const app = express();
const db = require("./db.js");

const PORT = 8082;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//GET all employees
app.get("/list", async (req, res) => {
    const dbInstance = await db.GetDB();
    const data = await dbInstance.collection('employee').find({}).toArray();

    await db.CloseDB();
    res.send(data);
});

// add new employee
app.post("/add", async (req, res) => {
    const empObj = req.body;
    const dbInstance = await db.GetDB();
    const data = await  dbInstance.collection('employee').insertOne(empObj);
    console.log("data inserted in DB", {data});
    await db.CloseDB();
    res.send({ message: "Employee added successfully", "_id": data.insertedId });
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});