const prompt = require("prompt-sync")();

console.log("-----------")
console.log("   [PT]")
console.log("   [EN]")
console.log("   [ES]")
console.log("   [FR]")
console.log("   [JP]")
console.log("-----------")
console.log("")
console.log("--------------------------------------")
const plano  = prompt("Digite o idioma: ")
console.log("--------------------------------------")
console.log("")

switch (plano) {
    case "PT":
        console.log("----------------------------------")
        console.log("Idioma configurado para Português.")
        console.log("----------------------------------")
        break

    case "EN":
        console.log("------------------------")
        console.log("Language set to English.")
        console.log("------------------------")
        break
       
    case "ES":
        console.log("-----------------------------")
        console.log("Idioma configurado a Español.")
        console.log("-----------------------------")
        break

    case "FR":
        console.log("-------------------------------")
        console.log("Langue définie sur le Français.")
        console.log("-------------------------------")
        break

    case "JP":
        console.log("----------------------------")
        console.log("日本におけるイディオーマ設定.")
        console.log("----------------------------")
        break

    default:
        console.log("---------------------")
        console.log("Idioma não suportado.")
        console.log("---------------------")
        break;
}