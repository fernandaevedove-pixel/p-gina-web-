const btn = document.getElementById("btn");

const cores = [
    "#f4f4f4",
    "#FFD166",
    "#06D6A0",
    "#118AB2",
    "#EF476F",
    "#8338EC",
    "#3A86FF"
];

let indice = 0;

btn.addEventListener("click", () => {
    indice = (indice + 1) % cores.length;
    document.body.style.backgroundColor = cores[indice];
});
