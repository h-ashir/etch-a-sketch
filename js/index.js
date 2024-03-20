let container = document.createElement("div");
container.setAttribute("id", "container")
container.setAttribute("style", "display:flex; justify-content: center")
document.body.appendChild(container);

let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "gridContainer");
container.appendChild(gridContainer);

function createGrid(row, col){
    gridContainer.innerHTML = "";

    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;

    let squareSize = Math.min(containerWidth/col, containerHeight/row);

    gridContainer.style.width = squareSize*col + "px";
    gridContainer.style.height = squareSize*row + "px";

    for (let i = 0; i<row; i++){
        for (let j = 0; j<col; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            gridContainer.appendChild(square);
            square.addEventListener("mouseover", () => {
                square.classList.add("grid-hover");
            });
            square.addEventListener("mouseout", () => {
                square.classList.remove("grid-hover");
            });
        }
        let br = document.createElement("br");
        gridContainer.appendChild(br);
    }
}
createGrid(16, 16);

let gridBtn = document.querySelector("#changeValue");
gridBtn.addEventListener("click", () => {
    let number = Number(prompt("Enter the preferred number of rows and col"))
    if (!isNaN(number) && number>0){
        createGrid(number, number);
    }else{
        alert("Enter a valid number");
    }
});