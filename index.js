const express = require("express");
const app = express();
const path = require("path");
let mensagem = "";
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

const pokedex = [
  {
    Id: "01",
    Nome: "Charmeleon",
    Tipo: "Fire",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    Descricao:
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    Altura: "1.1 m",
    Peso: "19.0 kg",
    Categoria: "Flame",
    Habilidade: "Blaze",
  },
  {
    Id: "02",
    Nome: "Charizard",
    Tipo: "Fire",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    Descricao:
      "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    Altura: "1.7 m",
    Peso: "90.5 kg",
    Categoria: "Flame",
    Habilidade: "Blaze",
  },
  {
    Id: "03",
    Nome: "Squirtle",
    Tipo: "Water",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    Descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force..",
    Altura: "0.5 m",
    Peso: "9.0 kg",
    Categoria: "Tiny Turtle",
    Habilidade: "Torrent",
  },
];

app.get("/", (req, res) => {
  setTimeout(() => {
    mensagem = "";
  }, 1000);
  res.render("index", { pokedex, mensagem });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.Id = pokedex.length + 1;
  pokedex.push(pokemon);
  mensagem = "Parabéns , você adicionou um novo Pokemon!";
  res.redirect("/");
});

app.post("/btn", (req, res) => {
  res.redirect("/");
});

app.get("/detalhes/:Id", (req, res) => {
  const id = req.params.Id - 1;
  pokemon = pokedex[id];

  res.render("detalhes", { pokemon });
});

app.listen(3000, () => console.log("Sevidor rodando em http://localhost:3000"));
