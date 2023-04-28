const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Key } = webdriver;

// Configurações do navegador
const options = new chrome.Options();
options.addArguments('--start-maximized');

// Caminho para o driver do Chrome
const driverPath = '/Caminho/Para/Chromedriver.exe';

// Inicializa o navegador com o driver do Chrome
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

// URLs das abas a serem abertas e trocadas
const urls = [
  'https://np.poscontrole.com.br/dashboard',
  'https://monitor.tecnospeed.com.br/?&filter-doc=nfce&filter-uf=sp',
  'https://eformsnfce.e-datacenter.nddigital.com.br/eForms_NFCeeMonitor/Account/Login',
  'https://atendimento.poscontrole.com.br/Home'
];

// Loop infinito de troca de abas
(async function() {
  while (true) {
    for (let url of urls) {
      await driver.get(url);

      // Fazer login apenas para a primeira URL
      if (url === urls[0]) {
        await driver.findElement(webdriver.By.css('input[type="text"]')).sendKeys('tw2tecnologia');
        await driver.findElement(webdriver.By.css('input[type="password"]')).sendKeys('GhT438*$@23v', webdriver.Key.RETURN);
        await driver.sleep(5000);
      }

      if (url === urls[2]) {
        await driver.findElement(webdriver.By.css('input[type="text"]')).sendKeys('tw2tecnologia');
        await driver.findElement(webdriver.By.css('input[type="password"]')).sendKeys('GhT438*$@23v', webdriver.Key.RETURN);
        await driver.sleep(5000);
      }

      await driver.sleep(2000); // Tempo em milissegundos
    }
  }
})();
