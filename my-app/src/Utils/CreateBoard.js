
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

export default CreateBoard (row,col,bombs)
{
    let board=[];
    let minesLocation=[];
    // create empty board
    for (let x = 0; x < row; x++) {
        let subCol = [];
        for (let y = 0; y < col; y++) {
            subCol.push({
                x:x,
                y:y,
                flagged:false,
                revealed:false,
            });
        }
        board.push(subCol);
    }
    let bombs_count=0;
    while(bombs_count<bombs)
    {
        let x= getRandomNumber(0,row-1);
        let y=getRandomNumber(0,col-1) ;
        if(board[x][y].value===0)
        {
            board[x][y].value="X";
            minesLocation.push([x,y]);
            bombs_count++;
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
          if (board[i][j].value === "X") {
            continue;
          }
          // top 
          if(i>0 && board[i - 1][j].value === "X"){
            board[i][j].value++;
          }
          // top right 
          if(i>0 && j<col-1 && board[i-1][j+1].value==="X")
          {
            board[i][j].value++;
          }
          // top left
          if(i>0 && j>0 && board[i-1][j-1].value==="X")
          {
            board[i][j].value++;
          }
          // left
          if(j>0 && board[i ][j-1].value === "X"){
            board[i][j].value++;
          }
          // right
          if(j<col-1 && board[i ][j+1].value === "X"){
            board[i][j].value++;
          }
          // Botoom Right
        if (
            i < row - 1 &&
            j < col - 1 &&
            board[i + 1][j + 1].value === "X"
          ) {
            board[i][j].value++;
          }

        
          // Bottom
          if (i < row - 1 && board[i + 1][j].value === "X") {
            board[i][j].value++;
          }
    
          // Bottom Left
          if (
            i < row - 1 &&
            j > 0 &&
            board[i + 1][j - 1].value === "X"
          ) {
            board[i][j].value++;
          }
        }
    }
    return { board, minesLocation };
};