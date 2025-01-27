import test from "@playwright/test";

test('get started link', async ({ page }) => {
  await page.goto('https://cosmocode.io/automation-practice-webtable/');
  const tableContainer= await page.locator("//table[@id='countries']")
  const rows= await tableContainer.locator("//tr").all()
  console.log(rows.length)
  /*for(let row of rows)
  {
    console.log(await row.allInnerTexts())
  }*/

    const row1= rows[1]
    //console.log(await row1.allInnerTexts())
    const countryName= await row1.locator('//td[2]').innerText()
    const capitalName= await row1.locator('//td[3]').innerText()
    const curremcyName= await row1.locator('//td[4]').innerText()
    const primaryLanguageName= await row1.locator('//td[5]').innerText()
    //console.log(`County: ${countryName} \n Capital: ${capitalName} \n Currency: ${curremcyName} \n primary language: ${primaryLanguageName}`)
    //llenar objeto con formato interface
    const paises: Pais[]=[]
    for(let row of rows){
        let pais: Pais={
            name: await row.locator("//td[2]").innerText(),
            capital:await row.locator("//td[3]").innerText(),
            moneda: await row.locator("//td[4]").innerText(),
            lenguajePrimario: await row.locator("//td[5]").innerText(),
        }

         paises.push(pais)

    }
    //imprimir cada posicion del ojeto pais
    for(let pais of paises){
        console.log(pais)

    }

    //interfaz para entrgar resultados
    interface Pais{
        name:string
        capital: string
        moneda: string
        lenguajePrimario: string
    }

 
});

/*traer elementos de una tabla*/
/*
elemento contenedor: //table[@id='countries']
//table[@id='countries']//tr[2]//td[1]-Check
//table[@id='countries']//tr[2]//td[2]--Country
//table[@id='countries']//tr[2]//td[3]--capital
//table[@id='countries']//tr[2]//td[3]---Currency
//table[@id='countries']//tr[2]//td[5]---Primary Language(s)

*/