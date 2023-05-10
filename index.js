const Main = document.getElementById("Main");

let data = ["imgs/IMG-20230508-WA0002.jpg", "imgs/IMG-20230508-WA0003.jpg"]


for (const i in data) {
    let img = document.createElement('img')
    img.id = i
    img.src = data[i];
    img.className = "Products"
    Main.appendChild(img)
}
