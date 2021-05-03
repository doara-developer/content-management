import express from "express";
import logger from "./logger";
import { getItems, addItem } from "@server/views/items";

const app: express.Express = express();

const clientRootPath = "dist/templates";
app.use(express.static(clientRootPath));
app.use(express.json());

app.get("/items", getItems);
app.post("/items", addItem);

app.get("*", (req, res) => {
    res.sendFile("index.html", { root: clientRootPath });
});

app.listen(4000, () => {
    logger.debug("Item management server on port 4000!");
});

export default app;
