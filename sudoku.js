var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    createBoard();
}

function createBoard() {
    //  digits

    for( let i = 1; i <= 9; i++ ) {
        let digit = document.createElement("div");
        digit.id = i;
        digit.innerText = i;
        digit.addEventListener("click", selectNumber);
        digit.classList.add("digit");
        document.getElementById("digits").appendChild(digit);
       
    }

    // 9 x 9 grid
    for (let r = 0; r< 9; r++) {
        for (let c = 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString()  + '-' + c.toString();
            if (board[r][c] != '-'){
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5){
                tile.classList.add("hr-line");
            }
            if (c == 2 || c == 5){
                tile.classList.add("vr-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }

    function selectNumber(){
        if (numSelected != null) {
            numSelected.classList.remove("digit-selected");
        }
        numSelected = this;
        numSelected.classList.add("digit-selected");
    }

    function selectTile(){
        if( numSelected) {
            if(this.innerText!= ''){
                return;
            }

            let coord = this.id.split("-");
            let r = parseInt(coord[0]);
            let c = parseInt(coord[1]);

            if (solution[r][c] == numSelected.id) {
                this.innerText = numSelected.id;
            }
            else{
                errors++;
                document.getElementById("errors").innerText = errors;
            }
        }
    }
}
