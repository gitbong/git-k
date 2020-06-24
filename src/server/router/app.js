import express from "express";

import { ROUTE_TABLE } from "../constants";
import db from "../data/db";

const router = express.Router();

router.get("/routes", (req, res) => {
  res.send(db().getData(ROUTE_TABLE));
});

router.patch("/routes/:id", (req, res) => {
  const routeId = req.params.id;
  const body = req.body;

  db().updateData(ROUTE_TABLE, routeId, body);

  res.send(db().getData(ROUTE_TABLE, routeId));
});

export default router;
