let container = document.createElement("div");
container.setAttribute("id", "container")
container.setAttribute("style", "display:flex; justify-content: center")
document.body.appendChild(container);

let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "gridContainer");
container.appendChild(gridContainer);

function createGrid(row, col){

    for (let i = 0; i<row; i++){
        for (let j = 0; j<col; j++){
            let square = document.createElement("div");
            square.classList.add("square");
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
