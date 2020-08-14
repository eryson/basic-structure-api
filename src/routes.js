import { Router } from "express";
const routes = new Router();

routes.get("/", function (req, res) {
  res.send("It's Running!!!");
});

export default routes;
