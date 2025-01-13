


//Gå gjennom alle produkter, generere HTML for hvert produkt, skrive dette til idex.html 
let resourcesHTML = ""

//En variabel som kan holde på HTML-en for produktene 
resources.map((resource, index) => resourcesHTML += 
            `<article class="product-card">
                
                <h2>${product.title}</h2>
                <p> ${product.price}</p>
                <ul>
                    <li><a </a></li> 
                    <li><a </a></li>
                    <li><a </a></li>
                </ul>
            </article>`)


//Finn id #productlist, og fyll den med verdiene i variebelen productHTML
document.getElementById("productlist").innerHTML = productHTML