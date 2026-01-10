const express  = require("express");
const app  = express();
const apiRouter = require("./routers");
const { serverConfig } = require("./config");
app.use(express.json());
app.use(express.urlencoded());

app.use("/api" , apiRouter);




app.listen(serverConfig.PORT , () => {
    console.log("Server running on port:", serverConfig.PORT);
    
})