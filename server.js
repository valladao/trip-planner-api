const express = require("express")
const mongo = require("mongodb").MongoClient

const app = express()

app.post("/trip", (req, res) => {
  /* */
})

app.get("/trips", (req, res) => {
  /* */
})

app.post("/expense", (req, res) => {
  /* */
})

app.get("/expenses", (req, res) => {
  /* */
})

app.listen(3000, () => console.log("Server ready"))
