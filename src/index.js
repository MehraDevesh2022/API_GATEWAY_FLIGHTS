const express = require("express");
const app = express();
const { ServerConfig } = require("../src/config")

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on PORT ${ServerConfig.PORT}`);

})



