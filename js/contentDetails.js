
let gadgets = [
    { id: 1, name: "Smartphone", brand: "BrandX", price: 13000, preview: "/img/smartphone.webp", description: "Latest smartphone with high-end features." },
    { id: 2, name: "Laptop", brand: "BrandY", price: 50000, preview: "/img/laptop.jpeg", description: "Powerful laptop for all your needs." },
    { id: 3, name: "Game Console", brand: "BrandZ", price: 19999, preview: "/img/game.jpeg", description: "Experience next-level gaming with this console." },
    { id: 4, name: "Camera", brand: "BrandA", price: 4900, preview: "/img/camera.jpeg", description: "High-quality DSLR camera for photography lovers." },
];


function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


let gadgetId = getQueryParameter("id");


let selectedGadget = gadgets.find((gadget) => gadget.id == gadgetId);


if (selectedGadget) {
    document.getElementById("gadgetName").innerText = selectedGadget.name;
    document.getElementById("gadgetImage").src = selectedGadget.preview;
    document.getElementById("gadgetBrand").innerText = selectedGadget.brand;
    document.getElementById("gadgetPrice").innerText = selectedGadget.price;
    document.getElementById("gadgetDescription").innerText = selectedGadget.description;
} else {
    document.getElementById("detailsContainer").innerHTML = "<h2>Gadget not found!</h2>";
}
document.getElementById("rentNowBtn").addEventListener("click", function () {
    alert(`Thank you for choosing to rent the ${selectedGadget.name}!`);
    window.location.href = "/index.html";
});

