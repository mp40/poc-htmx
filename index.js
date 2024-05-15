import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import Mustache from "mustache";
import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(__dirname + "/public"));

export function setupExpressServer() {
  return app;
}

app.get("/", (req, res) => {
  const template = readFileSync(`${__dirname}/index.html`, "utf-8");
  const homeTemplate = readFileSync(`${__dirname}/view/home.html`, "utf-8");
  const page = Mustache.render(template, null, {
    home: homeTemplate,
  });

  res.send(page);
});

app.post("/", (req, res) => {
  res.sendFile(`${__dirname}/view/home.html`);
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
