import { getMetals } from "./database.js"


const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metals") {
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItems = metals.map(metalObj => {
        return `<li>
            <input type="radio" name="metals" value="${metalObj.id}" /> ${metalObj.metal}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    
    return html
}

