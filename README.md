# Tabcicle

O Tabcicle é um script desenvolvido por mim, Robson Nonato Filho, em JavaScript que utiliza o Selenium WebDriver para abrir e trocar automaticamente entre abas em um navegador Chrome. Ele foi desenvolvido para automatizar a abertura de URLs específicas e realizar ações, como fazer login em determinadas páginas.

## Pré-requisitos

Antes de executar o script, certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Node.js
- Selenium WebDriver
- ChromeDriver

## Instalação

1. Clone este repositório em seu ambiente local.
2. Certifique-se de ter o Node.js instalado.
3. Execute o seguinte comando para instalar as dependências necessárias: npm install selenium-webdriver chrome
4. Faça o download do ChromeDriver e defina o caminho para o executável no arquivo `tabreciclejs.js`, na variável `driverPath`.

## Uso

1. Abra o arquivo `tabreciclejs.js` e adicione as URLs das abas que deseja abrir e trocar na matriz `urls`.
2. Personalize as ações dentro do loop de troca de abas, se necessário.
3. Execute o script utilizando o seguinte comando:node tabreciclejs.js

O navegador Chrome será iniciado e as abas serão abertas e alternadas indefinidamente.

## Observações

- Certifique-se de inserir as informações de login corretas, se necessário, no trecho de código relevante.
- Você pode ajustar os tempos de espera (em milissegundos) conforme necessário, utilizando a função `driver.sleep()`.
- Este script foi desenvolvido para uso específico e pode requerer modificações para se adequar às suas necessidades.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests) para melhorar este projeto.

## Licença

Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

