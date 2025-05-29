const app = require("express").Router();
import user_router from "./userroute";
import product_router from "./product";
import sale_router from "./sale";
import inventory_router from './inventory'

app.use("/user", user_router);
app.use("/product", product_router);
app.use("/sale", sale_router);
app.use("/inventory", inventory_router);

module.exports = app;
