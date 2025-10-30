const {chromium} = require("@playwright/test");
 
//const rp = require("request-promise");
const pathToExtension = require('path').join(__dirname, '../extensao/capmonster');
const keycaptcha = "digite aqui  key";

  let  browser = " " 
async function run (Cpf, Senha){

 
try {
  
  browser = await chromium.launchPersistentContext('', {
    headless: false,
    viewport: {"width": 1193, "height": 1013},
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`
    ]
  });

  const page = await browser.newPage();
  //const page1 = await browser.newPage(); 
  //
 await page.goto('chrome://extensions/', {timeout: 0});
  await page.waitForSelector("[id='detailsButton']", {timeout: 0});
  await page.locator("[id='detailsButton']").click()
const link = await page.url()
const id = link.split('id=')[1];
console.log(id);
console.log(link)
await page.goto(`chrome-extension://${id}/popup.html`, {timeout: 0});
  await page.waitForSelector("#client-key-input", {timeout: 0})
  
  await page.type("#client-key-input", keycaptcha);
  await page.waitForTimeout(1900)
  await page.waitForSelector("#client-key-save-btn", {timeout: 0})

  await page.click("#client-key-save-btn", {timeout: 0});

    await page.goto("https://lessons.zennolab.com/captchas/recaptcha/invisible.php?level=high", {timeout: 0});

    await page.waitForSelector('[class="g-recaptcha submit"]', {timeout: 0})
    await page.locator('[class="g-recaptcha submit"]').click()

    await page.waitForSelector("#main > div", {timeout: 0})

    let date = await page.evaluate(()=>{
     let data =   document.querySelector("#main > div").innerText
     return data
    })
   

    

 
 }catch (error) {

    console.log("erro aqui",error);
  browser.close()
    
    return {
        sucess: false,
        msg: "Erro Interno: erro no cpf ou senha",
       
    }
    
}

}

// "37590729Bi$"

//module.exports = run

run ("14290184880", "18071212rA@")