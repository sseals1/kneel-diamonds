import { getMetals } from "./database.js"


const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    
    const listItems = metals.map(metalObj => {
        return `<li>
            <input type="radio" name="size" value="${metalObj.id}" /> ${metalObj.metal}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    
    return html
}

