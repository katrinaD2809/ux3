const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    port: "3307",
    user: "root",
    //password: "root",
    database: "proj2plants",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM plant";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.post("/api/post", (req, res) => {
    const { plantTitle, latinTitle, yearDiscovered, category, amountSold, countryOrigin, plantImagePath, gardenerID } = req.body;
    const sqlInsert = 
        "INSERT INTO plant (plantTitle, latinTitle, yearDiscovered, category, amountSold, countryOrigin, plantImagePath, gardenerID) VALUES (?,?,?,?,?,?,?,?)";
        db.query(sqlInsert, [plantTitle, latinTitle, yearDiscovered, category, amountSold, countryOrigin, plantImagePath, gardenerID], (error, result) => {
            if (error) {
                console.log(error);
            }
        });
});

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove =
    "DELETE FROM plant WHERE plantID = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});

app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    console.log(id)
    const sqlGet = "SELECT * FROM plant WHERE plantID = ?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        console.log(result)
        res.send(result);
    });
});

app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const {plantTitle, latinTitle, yearDiscovered, category, amountSold, countryOrigin, plantImagePath, gardenerID} = req.body;
    const sqlUpdate = "UPDATE plant SET plantTitle = ?, latinTitle = ?, yearDiscovered = ?, category = ?, amountSold = ?, countryOrigin = ?, plantImagePath = ?, gardenerID = ? WHERE plantID = ?";
    db.query(sqlUpdate, [plantTitle, latinTitle, yearDiscovered, category, amountSold, countryOrigin, plantImagePath, gardenerID, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});


////// here i will add gardeners api calls

app.get("/api/getgardener", (req, res) => {
    const sqlGet = "SELECT * FROM gardener";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


app.post("/api/postgardener", (req, res) => {
    const { name, surname, nationality, birthYear, deathYear } = req.body;
    const sqlInsert = 
        "INSERT INTO gardener (name, surname, nationality, birthYear, deathYear) VALUES (?,?,?,?,?)";
        db.query(sqlInsert, [name, surname, nationality, birthYear, deathYear], (error, result) => {
            if (error) {
                console.log(error);
            }
        });
});

app.delete("/api/removegardener/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove =
    "DELETE FROM gardener WHERE gardenerID = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});

app.get("/api/getgardener/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    console.log(id)
    const sqlGet = "SELECT * FROM gardener WHERE gardenerID = ?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        console.log(result)
        res.send(result);
    });
});


app.put("/api/updategardener/:id", (req, res) => {
    const { id } = req.params;
    const {name, surname, nationality, birthYear, deathYear} = req.body;
    const sqlUpdate = "UPDATE gardener SET name = ?, surname = ?, nationality = ?, birthYear =?, deathYear = ? WHERE gardenerID = ?";
    db.query(sqlUpdate, [name, surname, nationality, birthYear, deathYear, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});


app.get("/", (req, res) => {
   // const sqlInsert = 
     //   "INSERT INTO gardener (name, surname, nationality, birthYear, deathYear) VALUES ('sunflower','yellow','italian','1955','1988')";
    //db.query(sqlInsert, (error, result) => {
      //  console.log("error", error);
        //console.log("result", result);
        res.send("hey hey express here");
    });
//});

app.listen(8080, () => {
    console.log("server is running on port 8080");
})