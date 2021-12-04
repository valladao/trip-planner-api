const app = require("../server")
const request = require("supertest")

beforeAll(function (done) {
  app.on("appStarted", done)
})

afterAll(() => {
  app.emit("closeApp")
})

describe("Test trips API", () => {
  it("should create a new trip", (done) => {
    request(app)
      .post("/trip")
      .send({
        name: "Toring the Alps",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .end(done)
  })
})
