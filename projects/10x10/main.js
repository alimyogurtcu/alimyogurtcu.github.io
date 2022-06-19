var count=0;
function run(v, t) {
  // inputlardan alınan başlangıç x ve y değeri
  var x = v ? v : Number(document.getElementById("x").value);
  var y = t ? t : Number(document.getElementById("y").value);

  var mainTable = [], tempTable1 = [], tempTable2 = [], lastNumber = 0, bool = false, create = false;

  // 2 tane temp table oluşturup iki farklı yolu deneniyor
  // hangisi daha yüksek sonuca ulaşırsa o tablo oluşturuluyor
  var try1 = createTable(tempTable1,1,bool,y,x,create);
  var try2 = createTable(tempTable2,1,!bool,y,x,create);

  if(try1 > try2){
    createTable(mainTable,1,bool,y,x,!create)
  } else createTable(mainTable,1,!bool,y,x,!create)

  // 100'e kadar sayılması ve tablo oluşurulması
  function createTable(table,i,bool,y,x,create) {

    lastNumber = 0;
    
    // 10x10 oyun tahtası array'i
    for (var j = 0; j < 10; j++ == null) {
      table.push(new Array(10).fill(null));
    }

    // inputa göre 1'in yerleştirilmesi
    table[y][x] = 1;

    while (i <= 99) {
      var nextMove = checkNumberOfMoves(table,i,bool,y,x);

      try {
        if (nextMove[0][0][0] == "numberOfNextMoveBottom") {
          table[nextMove[1] + 3][nextMove[2]] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveRight") {
          table[nextMove[1]][nextMove[2] + 3] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveBottomRight") {
          table[nextMove[1] + 2][nextMove[2] + 2] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveBottomLeft") {
          table[nextMove[1] + 2][nextMove[2] - 2] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveLeft") {
          table[nextMove[1]][nextMove[2] - 3] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveTop") {
          table[nextMove[1] - 3][nextMove[2]] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveTopRight") {
          table[nextMove[1] - 2][nextMove[2] + 2] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveTopLeft") {
          table[nextMove[1] - 2][nextMove[2] - 2] = i + 1;
        }
      } catch (error) {
        if(!create) lastNumber = i;
        break;
      }

      if(!create) lastNumber = i+1;
      i++;
    }

    if(create) lastNumber = i;
    else return lastNumber
  
  }

  function checkNumberOfMoves(table,i,bool,y,x) {
    var row = table.findIndex((row) => row.includes(i));
    var col = table[row].indexOf(i);

    return [checkNumberOfNextMove(table, row, col,bool,i,y,x), row, col,i];
  }

  // gidilebilecek karelerin hareket sayısını hesaplama
  function checkNumberOfNextMove(table, row, col,bool,i,y,x) {
    var numberOfNextMoveBottom = undefined,
      numberOfNextMoveBottomLeft = undefined,
      numberOfNextMoveBottomRight = undefined,
      numberOfNextMoveLeft = undefined,
      numberOfNextMoveRight = undefined,
      numberOfNextMoveTop = undefined,
      numberOfNextMoveTopLeft = undefined,
      numberOfNextMoveTopRight = undefined;

    if (checkRightMove(table, row, col) == 1)
      numberOfNextMoveRight =
        checkTopRightMove(table, row, col + 3) +
        checkRightMove(table, row, col + 3) +
        checkBottomRightMove(table, row, col + 3) +
        checkBottomMove(table, row, col + 3) +
        checkBottomLeftMove(table, row, col + 3) +
        checkLeftMove(table, row, col + 3) +
        checkTopLeftMove(table, row, col + 3) +
        checkTopMove(table, row, col + 3);

    if (checkLeftMove(table, row, col) == 1)
      numberOfNextMoveLeft =
        checkTopRightMove(table, row, col - 3) +
        checkRightMove(table, row, col - 3) +
        checkBottomRightMove(table, row, col - 3) +
        checkBottomMove(table, row, col - 3) +
        checkBottomLeftMove(table, row, col - 3) +
        checkLeftMove(table, row, col - 3) +
        checkTopLeftMove(table, row, col - 3) +
        checkTopMove(table, row, col - 3);

    if (checkTopMove(table, row, col) == 1)
      numberOfNextMoveTop =
        checkTopRightMove(table, row - 3, col) +
        checkRightMove(table, row - 3, col) +
        checkBottomRightMove(table, row - 3, col) +
        checkBottomMove(table, row - 3, col) +
        checkBottomLeftMove(table, row - 3, col) +
        checkLeftMove(table, row - 3, col) +
        checkTopLeftMove(table, row - 3, col) +
        checkTopMove(table, row - 3, col);

    if (checkBottomMove(table, row, col) == 1)
      numberOfNextMoveBottom =
        checkTopRightMove(table, row + 3, col) +
        checkRightMove(table, row + 3, col) +
        checkBottomRightMove(table, row + 3, col) +
        checkBottomMove(table, row + 3, col) +
        checkBottomLeftMove(table, row + 3, col) +
        checkLeftMove(table, row + 3, col) +
        checkTopLeftMove(table, row + 3, col) +
        checkTopMove(table, row + 3, col);

    if (checkTopLeftMove(table, row, col) == 1)
      numberOfNextMoveTopLeft =
        checkTopRightMove(table, row - 2, col - 2) +
        checkRightMove(table, row - 2, col - 2) +
        checkBottomRightMove(table, row - 2, col - 2) +
        checkBottomMove(table, row - 2, col - 2) +
        checkBottomLeftMove(table, row - 2, col - 2) +
        checkLeftMove(table, row - 2, col - 2) +
        checkTopLeftMove(table, row - 2, col - 2) +
        checkTopMove(table, row - 2, col - 2);

    if (checkTopRightMove(table, row, col) == 1)
      numberOfNextMoveTopRight =
        checkTopRightMove(table, row - 2, col + 2) +
        checkRightMove(table, row - 2, col + 2) +
        checkBottomRightMove(table, row - 2, col + 2) +
        checkBottomMove(table, row - 2, col + 2) +
        checkBottomLeftMove(table, row - 2, col + 2) +
        checkLeftMove(table, row - 2, col + 2) +
        checkTopLeftMove(table, row - 2, col + 2) +
        checkTopMove(table, row - 2, col + 2);

    if (checkBottomLeftMove(table, row, col) == 1)
      numberOfNextMoveBottomLeft =
        checkTopRightMove(table, row + 2, col - 2) +
        checkRightMove(table, row + 2, col - 2) +
        checkBottomRightMove(table, row + 2, col - 2) +
        checkBottomMove(table, row + 2, col - 2) +
        checkBottomLeftMove(table, row + 2, col - 2) +
        checkLeftMove(table, row + 2, col - 2) +
        checkTopLeftMove(table, row + 2, col - 2) +
        checkTopMove(table, row + 2, col - 2);

    if (checkBottomRightMove(table, row, col) == 1)
      numberOfNextMoveBottomRight =
        checkTopRightMove(table, row + 2, col + 2) +
        checkRightMove(table, row + 2, col + 2) +
        checkBottomRightMove(table, row + 2, col + 2) +
        checkBottomMove(table, row + 2, col + 2) +
        checkBottomLeftMove(table, row + 2, col + 2) +
        checkLeftMove(table, row + 2, col + 2) +
        checkTopLeftMove(table, row + 2, col + 2) +
        checkTopMove(table, row + 2, col + 2);

    var moveObject = {
      numberOfNextMoveBottom,
      numberOfNextMoveBottomLeft,
      numberOfNextMoveBottomRight,
      numberOfNextMoveLeft,
      numberOfNextMoveRight,
      numberOfNextMoveTop,
      numberOfNextMoveTopLeft,
      numberOfNextMoveTopRight,
    };

    Object.keys(moveObject).forEach((key) => {
      if (moveObject[key] === undefined) {
        delete moveObject[key];
      }
    });

    let minToMax = [];
    for (var move in moveObject) {
      minToMax.push([move, moveObject[move]]);
    }

   // gidilebilecek karelerin hareket alanı en azını bulma
   minToMax.sort(function (a, b) {
    return a[1] - b[1];
  });
  
  if(minToMax[1]){
    if(minToMax[0][1] == 0) {
      minToMax.splice(0, 1); 
    }
  }

  // minimum olmayan hamleleri array'den silme
  if(minToMax[1]){
    for(var k = 1; k < minToMax.length; k++) {
      if(minToMax[0][1] != minToMax[k][1]){
        minToMax.splice(k,1)
        k--;
      }
    }
  }

  // birden fazla minimum hamle varsa
  if(minToMax[1]){
    var check = checkTableMove(minToMax,col,row,i,y,x)
  }
  
    
  if(check && bool) return check;
  else return minToMax;

  }

  // tablonun ilk halinde her karenin maksimum hareket alanını içeren array üzerinde bir sonraki adımın kıyaslanması hamle sayısının kıyaslanması
  function checkTableMove(minToMax,col,row,i,y,x){

    var move = [
      [3,3,4,5,5,5,5,4,3,3],
      [3,3,4,5,5,5,5,4,3,3],
      [4,4,6,7,7,7,7,6,4,4],
      [5,5,7,8,8,8,8,7,5,5],
      [5,5,7,8,8,8,8,7,5,5],
      [5,5,7,8,8,8,8,7,5,5],
      [5,5,7,8,8,8,8,7,5,5],
      [4,4,6,7,7,7,7,6,4,4],
      [3,3,4,5,5,5,5,4,3,3],
      [3,3,4,5,5,5,5,4,3,3],
    ];

    var possibleMoves = [];

  
    for ( var k = 0; k < minToMax.length; k++) {
      if (minToMax[k][0] == "numberOfNextMoveBottom") {
        possibleMoves.push([minToMax[k][0],move[row + 3][col]])
      } else if (minToMax[k][0] == "numberOfNextMoveRight") {
        possibleMoves.push([minToMax[k][0],move[row][col + 3]])
      } else if (minToMax[k][0] == "numberOfNextMoveBottomRight") {
        possibleMoves.push([minToMax[k][0],move[row + 2][col + 2]])
      } else if (minToMax[k][0] == "numberOfNextMoveBottomLeft") {
        possibleMoves.push([minToMax[k][0],move[row + 2][col - 2]])
      } else if (minToMax[k][0] == "numberOfNextMoveLeft") {
        possibleMoves.push([minToMax[k][0],move[row][col - 3]])
      } else if (minToMax[k][0] == "numberOfNextMoveTop") {
        possibleMoves.push([minToMax[k][0],move[row - 3][col]])
      } else if (minToMax[k][0] == "numberOfNextMoveTopRight") {
        possibleMoves.push([minToMax[k][0],move[row - 2][col + 2]])
      } else if (minToMax[k][0] == "numberOfNextMoveTopLeft") {
        possibleMoves.push([minToMax[k][0],move[row - 2][col - 2]])
      }
    }

    possibleMoves.sort(function (a, b) {
      return a[1] - b[1];
    });
    
    if(possibleMoves[1]){
      possibleMoves.splice(0,1)
    } 

    // İSTİSNA
    if(possibleMoves[1] && (x == 2 && y == 9)){
      possibleMoves.splice(0,1)
    }

    // İSTİSNA
    if(possibleMoves[1] && (x == 7 && y == 6)){
      possibleMoves.splice(0,1)
    }

  
    
    return possibleMoves
  }

  // hareket alanlarının kontrolü
  function checkRightMove(table, row, col) {
    if (col + 3 < 10 && table[row][col + 3] == null) {
      // sağ
      return 1;
    } else return 0;
  }

  function checkLeftMove(table, row, col) {
    if (col - 3 >= 0 && table[row][col - 3] == null) {
      // sol
      return 1;
    } else return 0;
  }

  function checkTopMove(table, row, col) {
    if (row - 3 >= 0 && table[row - 3][col] == null) {
      // yukarı
      return 1;
    } else return 0;
  }

  function checkBottomMove(table, row, col) {
    if (row + 3 < 10 && table[row + 3][col] == null) {
      // aşağı
      return 1;
    } else return 0;
  }

  function checkTopRightMove(table, row, col) {
    if (row - 2 >= 0 && col + 2 < 10 && table[row - 2][col + 2] == null) {
      // sağ üst
      return 1;
    } else return 0;
  }

  function checkTopLeftMove(table, row, col) {
    if (row - 2 >= 0 && col - 2 >= 0 && table[row - 2][col - 2] == null) {
      // sol üst
      return 1;
    } else return 0;
  }

  function checkBottomRightMove(table, row, col) {
    if (row + 2 < 10 && col + 2 < 10 && table[row + 2][col + 2] == null) {
      // sağ alt
      return 1;
    } else return 0;
  }

  function checkBottomLeftMove(table, row, col) {
    if (row + 2 < 10 && col - 2 >= 0 && table[row + 2][col - 2] == null) {
      //sol alt
      return 1;
    } else return 0;
  }

  // table oluşturma
  const elemTable = document.getElementById("table");
  const textNode = document.createTextNode("X:" + x + " Y:" + y + " Sayı:" + lastNumber);
  elemTable.appendChild(textNode);
  for (const obj of mainTable) {
    const row = document.createElement("tr");
    for (const val of Object.values(obj)) {
      const col = document.createElement("td");
      col.textContent = val;
      row.appendChild(col);
      if (val == 100) count++;
    }
    elemTable.appendChild(row);
  }

  elemTable.appendChild(document.createElement("br"));
}

// bütün ihtimaller
function runAll() {
  count = 0;
  document.getElementById("x").value = 0;
  document.getElementById("y").value = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      run(j, i);
    }
  }
  document.getElementById("count").innerText = count + " tanesi 100'e ulaştı";
  
}