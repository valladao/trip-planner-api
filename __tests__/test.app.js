const app = require("../server")

beforeAll(function (done) {
  app.on("appStarted", done)
})

afterAll(() => {
  app.emit("closeApp")
})
