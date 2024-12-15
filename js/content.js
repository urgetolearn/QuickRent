
function dynamicGadgetSection(ob) {
    let boxDiv = document.createElement("div");
    boxDiv.id = "box";

    let boxLink = document.createElement("a");
    boxLink.href = "/pages/contentDetails.html?id=" + ob.id;

    let imgTag = document.createElement("img");
    imgTag.src = ob.preview;  

    let detailsDiv = document.createElement("div");
    detailsDiv.id = "details";

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(ob.name);
    h3.appendChild(h3Text);

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode(ob.brand);
    h4.appendChild(h4Text);

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("rs  " + ob.price);
    h2.appendChild(h2Text);

    
    boxDiv.appendChild(boxLink);
    boxLink.appendChild(imgTag);
    boxLink.appendChild(detailsDiv);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(h4);
    detailsDiv.appendChild(h2);

    return boxDiv;
}


let gadgets = [
    { id: 1, name: "Smartphone", brand: "BrandX", price: 13000, preview: "/img/smartphone.webp" },
    { id: 2, name: "Laptop", brand: "BrandY", price: 50000, preview: "/img/laptop.jpeg" },
    { id: 3, name: "Game Console", brand: "BrandZ", price: 19999, preview: "/img/game.jpeg" },
    { id: 4, name: "Camera", brand: "BrandA", price: 4900, preview: "/img/camera.jpeg" }
];


let containerGadgets = document.getElementById("containergadgets");


gadgets.forEach(gadget => {
    containerGadgets.appendChild(dynamicGadgetSection(gadget));
});
