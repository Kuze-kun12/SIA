const express = require('express');
const app = express()

app.listen(3000, "192.168.2.31", () => {
  console.log("server is running...");
})