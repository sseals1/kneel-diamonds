import { getOrders, getMetals, getSizes, getStyles } from "./database.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (theRealActualClickEvent) => {
        if (theRealActualClickEvent.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

// orders.map((order) => {})
const buildOrderListItem = (order) => {
    const metals = getMetals()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )



    const sizes = getSizes()

    // Remember that the function you pass to find() must return true/false
    const foundSize = sizes.find(
        (sizes) => {
            return sizes.id === order.sizeId
        }
    )




    const styles = getStyles()

    // Remember that the function you pass to find() must return true/false
    const foundStyles = styles.find( // iterating through the styles array and
        //  passing in the style object as an argument to the style.find function.

        (style) => { // defining a placeholder variable for the function
            return style.id === order.styleId // return statement checks if 
            //style.id
        }
    )


    
    const totalCost = foundMetal.price + foundSize.price + foundStyles.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} costs ${costString}
    </li>`


    
}





export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



