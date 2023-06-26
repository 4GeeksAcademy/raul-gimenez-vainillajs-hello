function excuseGenerator() {
  let sujeto = ["The dog", "My grandma", "His turtle", "My bird"];
  let verbo = ["ate", "peed", "crushed", "broke"];
  let CD = ["my homework", "the keys", "the car"];
  let CCT = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomNumSujeto = Math.floor(Math.random() * sujeto.length);
  let randomNumVerbo = Math.floor(Math.random() * verbo.length);
  let randomNumCD = Math.floor(Math.random() * CD.length);
  let randomNumCCT = Math.floor(Math.random() * CCT.length);
  let excuse =
    "<h1>" +
    sujeto[randomNumSujeto] +
    " " +
    verbo[randomNumVerbo] +
    " " +
    CD[randomNumCD] +
    " " +
    CCT[randomNumCCT] +
    "." +
    "</h1>";
  document.write(excuse);
}
excuseGenerator();
