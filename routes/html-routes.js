const path = require("path");

// HTML Routes ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
}
