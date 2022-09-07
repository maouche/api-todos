const app = require("./config/server");
const routesTodo = require("./route/todo");

// ADD ROUTES
app.use("/api/v1", routesTodo);