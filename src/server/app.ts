import express from "express";
import logger from "./logger";
import { getItems } from "@server/views/items";

const app: express.Express = express();

const clientRootPath = "dist/templates";
app.use(express.static(clientRootPath));

app.get("/items", getItems);

app.get("*", (req, res) => {
    res.sendFile("index.html", { root: clientRootPath });
});

app.listen(4000, () => {
    logger.debug("Item management server on port 4000!");
});

export default app;
