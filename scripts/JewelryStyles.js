import { getStyles, setStyle } from "./database.js"


const Styles = getStyles()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "Styles") {
            setStyle(parseInt(event.target.value))
        } 
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = Styles.map(Styles => {
            return `<li>
                <input type="radio" name="Styles" value="${Styles.id}" /> ${Styles.style}
            </li>`
        }
    )
    html += listItemsArray.join("")
    
    html += "</ul>"
    return html
}

