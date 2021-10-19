import { getSizes } from "./database.js"


const sizes = getSizes()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "size") {
            window.alert(`User chose ${changeEvent.target.name}`)
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(sizeObj => {
        return `<li>
            <input type="radio" name="size" value="${sizeObj.id}" /> ${sizeObj.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

