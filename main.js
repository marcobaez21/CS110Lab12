//Marco Baez 
//SID 862040802
//All work is mine, If ive gotten help from an online source I have it commented at the top of the function

var curr = "X"; //Variable that represents X or O
var board = [ //game board
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
var playercount=2;
var scorex=0;
var scoreo=0;
var hardmode =0;

function changecurr(){ //switches between X or O
    if(curr=="X"){curr="O"; document.getElementById("playerid").innerHTML = "Player  O";}
    else if(curr=="O"){curr="X"; document.getElementById("playerid").innerHTML = "Player  X";}
    else{print("error man");}
}

function singlebutton(){ //enable single player
    playercount=1;
    document.getElementById("playermode").innerHTML = "Single Player";
}

function doublebutton(){ //enable 2 player
    playercount=2;
    document.getElementById("playermode").innerHTML = "2 Player";
}

function checkendgame(){ //checks if game ended aka no one has won but board is full and resets if so
    if(board[0][0]!=0&&board[0][1]!=0&&board[0][2]!=0&&
        board[1][0]!=0&&board[1][1]!=0&&board[1][2]!=0&&
        board[2][0]!=0&&board[2][1]!=0&&board[2][2]!=0){
            console.log("No Winner!");
            reset();
            return true;
        }
        else {
            return false;
        }
}

function updatescore(){ //changes score variables and also displays them
    if (curr=="X"){scorex++;}
    else if(curr=="O"){scoreo++;}
    document.getElementById("score").innerHTML = scorex+"-"+scoreo;
}

function hardmodetoggle(){ //enables hard mode (Please try this)
    if(hardmode){hardmode=0;document.body.style.backgroundColor = "#87cefa";}
    else if(hardmode==0){hardmode=1;document.body.style.backgroundColor = "red";}
    else{console.log("Error on hard mode bro");}
}

function getindex(id){ //takes id of div and returns array of positions for use with board array
    var temparray = [];
    if(id=="tl") temparray= [0,0];
    else if(id=="ml") temparray=[1,0];
    else if(id=="bl") temparray= [2,0];
    else if(id=="tm") temparray= [0,1];
    else if(id=="mm") temparray= [1,1];
    else if(id=="bm") temparray= [2,1];
    else if(id=="tr") temparray= [0,2];
    else if(id=="mr") temparray= [1,2];
    else if(id=="br") temparray= [2,2];
    return temparray;
}

function getid(r,r2){ //takes 2 variables and returns string that respresents id of div
    var tempstring = "";
    if(r==0 && r2==0) {tempstring="tl";}
    if(r==1 && r2==0) {tempstring= "ml";}
    if(r==2 && r2==0) {tempstring="bl";}
    if(r==0 && r2==1) {tempstring="tm";}
    if(r==1 && r2==1) {tempstring="mm";}
    if(r==2 && r2==1) {tempstring= "bm";}
    if(r==0 && r2==2) {tempstring= "tr";}
    if(r==1 && r2==2) {tempstring= "mr";}
    if(r==2 && r2==2) {tempstring= "br";}
    console.log(tempstring);
    return tempstring;
}

function checkwinner(){ //checks if anyone has won, updates the score and resets if so
    if((board[0][0]=="X"&&board[0][1]=="X"&&board[0][2]=="X")||(board[1][0]=="X"&&board[1][1]=="X"&&board[1][2]=="X")||(board[2][0]=="X"&&board[2][1]=="X"&&board[2][2]=="X") || //checks rows for wins
    (board[0][0]=="O"&&board[0][1]=="O"&&board[0][2]=="O")||(board[1][0]=="O"&&board[1][1]=="O"&&board[1][2]=="O")||(board[2][0]=="O"&&board[2][1]=="O"&&board[2][2]=="O") || //checks rows for wins
    (board[0][0]=="X"&&board[1][0]=="X"&&board[2][0]=="X") || (board[0][1]=="X"&&board[1][1]=="X"&&board[2][1]=="X") || (board[0][2]=="X"&&board[1][2]=="X"&&board[2][2]=="X") || //checks columns for wins
    (board[0][0]=="O"&&board[1][0]=="O"&&board[2][0]=="O") || (board[0][1]=="O"&&board[1][1]=="O"&&board[2][1]=="O") || (board[0][2]=="O"&&board[1][2]=="O"&&board[2][2]=="O") || //checks columns for wins
    (board[0][0]=="X"&&board[1][1]=="X"&&board[2][2]=="X") || (board[0][2]=="X"&&board[1][1]=="X"&&board[2][0]=="X") || //checks diagonals for wins
    (board[0][0]=="O"&&board[1][1]=="O"&&board[2][2]=="O") || (board[0][2]=="O"&&board[1][1]=="O"&&board[2][0]=="O")){ //checks diagonals for wins
        console.log("Winner winner chicken dinner!");
        alert("Player "+curr+" wins!");
        updatescore();
        reset();
        return true;
    }
    return false;
}

function reset(){ //resets the game
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    curr="O";
    document.getElementById("tl").innerHTML ="";
    document.getElementById("ml").innerHTML ="";
    document.getElementById("bl").innerHTML ="";
    document.getElementById("tm").innerHTML ="";
    document.getElementById("mm").innerHTML ="";
    document.getElementById("bm").innerHTML ="";
    document.getElementById("tr").innerHTML ="";
    document.getElementById("mr").innerHTML ="";
    document.getElementById("br").innerHTML ="";
}

function newgame(){ //starts a new game
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    curr="O";
    changecurr();
    document.getElementById("tl").innerHTML ="";
    document.getElementById("ml").innerHTML ="";
    document.getElementById("bl").innerHTML ="";
    document.getElementById("tm").innerHTML ="";
    document.getElementById("mm").innerHTML ="";
    document.getElementById("bm").innerHTML ="";
    document.getElementById("tr").innerHTML ="";
    document.getElementById("mr").innerHTML ="";
    document.getElementById("br").innerHTML ="";
}

function timer(){ //https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
    var totaltime = 25;
    var timerid = setInterval(count, 1000);
    function count(){
        if(totaltime==-1){
            clearTimeout(timerid);
        }
        else{
            document.getElementById("timer").innerHTML=totaltime;
            totaltime--;
        }
    }
}

function insertXO(id){ //main function, responsible for placing X or O's
    var temparray = getindex(id);

    if(board[temparray[0]][temparray[1]]!=0){
        alert("That spot is already taken!");        
    }

    else if (playercount==2){
    document.getElementById(id).innerHTML +=curr;
    board[temparray[0]][temparray[1]] = curr;
    console.log(board);
    //checkwinner();
    setTimeout(() => {checkwinner(); }, 1);
    if(checkendgame()){alert("End of Game! No Winners!");}
    setTimeout(() => {changecurr(); }, 1);
    }

    else if(playercount==1){
    document.getElementById(id).innerHTML +=curr;
    board[temparray[0]][temparray[1]] = curr;
    console.log(board);
    if(checkwinner()){changecurr(); return;}
    if(checkendgame()){alert("End of Game! No Winners!");return;}
    changecurr();
    var bool = true;
    if(hardmode==0){
    while(bool){
        var r =Math.floor(Math.random()*3);
        var r2 =Math.floor(Math.random()*3);
        if(board[r][r2]==0){
            var temparray2 = [r,r2];
            console.log(temparray2);
            var tempid = getid(r,r2);
            console.log(tempid);
            document.getElementById(tempid).innerHTML +=curr;
            board[temparray2[0]][temparray2[1]] = curr;
            console.log(board);
            setTimeout(() => {checkwinner(); }, 1);
            if(checkendgame()){alert("End of Game! No Winners!");}
            setTimeout(() => {changecurr(); }, 1);
            bool=false;
        }

     }
    }
    else if(hardmode){
        console.log(temparray[0]);
        if(temparray[0]==0){
            document.getElementById("bl").innerHTML +=curr;
            document.getElementById("bm").innerHTML +=curr;
            document.getElementById("br").innerHTML +=curr;
            board[2][0] = curr;
            board[2][1] = curr;
            board[2][2] = curr;
        }
        else{
            document.getElementById("tl").innerHTML +=curr;
            document.getElementById("tm").innerHTML +=curr;
            document.getElementById("tr").innerHTML +=curr;
            board[0][0] = curr;
            board[0][1] = curr;
            board[0][2] = curr;
        }
        setTimeout(() => {checkwinner(); }, 1);
        setTimeout(() => {changecurr(); }, 1);
    }
    }
}
