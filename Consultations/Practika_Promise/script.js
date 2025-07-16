const catFactsElement = document.getElementById("cat-facts");

fetch("https://catfact.ninja/fact")
  .then((res) => res.json()) //paarveido
  .then(object => {
    const {fact, length} = object

    catFactsElement.textContent = `Facts about cats: ${fact} ${length}`
  });
