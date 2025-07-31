async function carregarCotacoes() {
  try {
    const response = await fetch("https://api.allorigins.win/raw?url=https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml")
    const text = await response.text()

    const parser = new DOMParser()
    const xml = parser.parseFromString(text, "application/xml")

    const dataTag = xml.querySelector("Cube[time]")
    const data = dataTag.getAttribute("time")
    document.getElementById("data-cotacao").textContent = `Data da Cotação: ${data}`

    const cotacoes = xml.querySelectorAll("Cube[currency]")

    const tbody = document.querySelector("#tabela-cotacoes tbody")
    tbody.innerHTML = ""

    cotacoes.forEach(cube => {
      const moeda = cube.getAttribute("currency")
      const taxa = cube.getAttribute("rate")

      const tr = document.createElement("tr")
      tr.innerHTML = `<td>${moeda}</td><td>${taxa}</td>`
      tbody.appendChild(tr)
    });

  } catch (err) {
    document.getElementById("data-cotacao").textContent = "Erro ao carregar cotações."
    console.error("Erro:", err)
  }
}

document.addEventListener("DOMContentLoaded", carregarCotacoes)