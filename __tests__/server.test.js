const { MongoClient } = require("mongodb")

describe("insert", () => {
  let connection
  let db

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    db = await connection.db()
  })

  afterAll(async () => {
    await connection.close()
  })

  it("should insert a doc into collection", async () => {
    const trips = db.collection("trips")
    const mockTrip = { _id: "1", name: "Touring the Alps" }
    await trips.insertOne(mockTrip)
    const insertedTrip = await trips.findOne({ _id: "1" })
    expect(insertedTrip).toEqual(mockTrip)
  })
})
