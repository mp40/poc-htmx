import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import Mustache from "mustache";
import { readFileSync } from "fs";
import bodyParser from "body-parser";
import { generateLocations } from "./model/shotguns.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

export function setupExpressServer() {
  return app;
}

app.get("/", (_, res) => {
  const template = readFileSync(`${__dirname}/index.html`, "utf-8");
  const homeTemplate = readFileSync(`${__dirname}/view/home.html`, "utf-8");
  const page = Mustache.render(template, null, {
    home: homeTemplate,
  });

  res.send(page);
});

app.post("/", (_, res) => {
  res.sendFile(`${__dirname}/view/home.html`);
});

app.post("/shooting", (_, res) => {
  res.send(`<div class='page-div'>Shooting</div>`);
});

app.post("/shotguns", (_, res) => {
  res.sendFile(`${__dirname}/view/shotguns.html`);
});

app.post("/shotguns/random-locations", (req, res) => {
  const { salm, hitCount, diceType, impactPoint } = req.body;
  const locations = generateLocations(salm, diceType, hitCount, impactPoint);

  const template = `{{#locations}}<span>{{.}}</span>{{/locations}}`;
  const fragmement = Mustache.render(template, { locations });

  res.send(fragmement);
});

app.delete("/shotguns/random-locations", (_, res) => {
  res.send();
});

app.post("/hand-to-hand", (_, res) => {
  res.sendFile(`${__dirname}/view/hand-to-hand.html`);
});
