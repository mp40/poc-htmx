import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(__dirname + "/public"));

export function setupExpressServer() {
  return app;
}

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  res.send(`<div class='page-div'>Home Again</div>`);
});

app.post("/shooting", (req, res) => {
  res.send(`<div class='page-div'>Shooting</div>`);
});

app.post("/shotguns", (req, res) => {
  res.send(`<div class='page-div'>Shotguns</div>`);
});

app.post("/hand-to-hand", (req, res) => {
  res.send(`<div class='page-div'>Hand To Hand</div>`);
});
