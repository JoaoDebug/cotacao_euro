# cotacao_euro
Aplicação web que exibe a cotação atual do Euro em relação a diversas moedas, utilizando dados oficiais do Banco Central Europeu. Feita com HTML, CSS e JavaScript puro

Este projeto é uma aplicação web desenvolvida com HTML, CSS e JavaScript que consome os dados da API oficial do Banco Central Europeu (ECB) em formato XML, exibindo a cotação atual do Euro (EUR) em relação a várias moedas do mundo

Tecnologias utilizadas:
 - HTML5
 - CSS3
 - JavaScript (Vanilla)
 - API ECB XML (https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml)

Funcionalidades:
 - Exibição da taxa de câmbio do Euro frente a moedas como USD, BRL, JPY, GBP, entre outras
 - Consulta em tempo real dos valores oficiais
 - Conversão de XML para dados JS via DOMParser
 - Interface moderna, responsiva e fácil de usar

Observação importante:
 - Como a API oficial da ECB não possui suporte a CORS, foi utilizado um proxy público (https://api.allorigins.win) para viabilizar o consumo dos dados diretamente no navegador
