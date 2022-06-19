var count=0;
function run(v, t) {
  // inputlardan alınan başlangıç x ve y değeri
  var x = v ? v : Number(document.getElementById("x").value);
  var y = t ? t : Number(document.getElementById("y").value);

  var mainTable = [], tempTable1 = [], tempTable2 = [];

  // 10x10 oyun tahtası array'i
  for (var j = 0; j < 10; j++ == null) {
    mainTable.push(new Array(10).fill(null));
  }

  for (var j = 0; j < 10; j++ == null) {
    tempTable1.push(new Array(10).fill(null));
  }

  for (var j = 0; j < 10; j++ == null) {
    tempTable2.push(new Array(10).fill(null));
  }

  // inputa göre 1'in yerleştirilmesi
  mainTable[y][x] = 1;
  tempTable1[y][x] = 1;
  tempTable2[y][x] = 1;

  var i = 1;
  var bool = false;
  var lastNumber = 0;

  // 2 tane tempTable oluşturup iki farklı yolu deneniyor
  // hangisi daha yüksek sonuca ulaşırsa o tablo oluşturuluyor
  if(tempTable(tempTable1,1,bool) > tempTable(tempTable2,1,!bool)){
    createTable(mainTable,i,bool)
  } else createTable(mainTable,i,!bool)

  // tempTable denenmesi
function tempTable(tableName,i,bool){
    while (i <= 99) {
    var nextMove = checkNumberOfMoves(tableName,i,bool);

    try {
      if (nextMove[0][0][0] == "numberOfNextMoveBottom") {
        tableName[nextMove[1] + 3][nextMove[2]] = i + 1;
      } else if (nextMove[0][0][0] == "numberOfNextMoveRight") {
        tableName[nextMove[1]][nextMove[2] + 3] = i + 1;
      } else if (nextMove[0][0][0] == "numberOfNextMoveBottomRight") {
        tableName[nextMove[1] + 2][nextMove[2] + 2] = i + 1;
      } else if (nextMove[0][0][0] == "numberOfNextMoveBottomLeft") {
        tableName[nextMove[1] + 2][nextMove[2] - 2] = i + 1;
      } else if (nextMove[0][0][0] == "numberOfNextMoveLeft") {
        tableName[nextMove[1]][nextMove[2] - 3] = i + 1;
      } else if (nextMove[0][0][0] == "numberOfNextMoveTop") {
        tableName[nextMove[1] - 3][nextMove[2]] = i + 1;
      } else if (nextMove[0][0][0] == "numberOfNextMoveTopRight") {
        tableName[nextMove[1] - 2][nextMove[2] + 2] = i + 1;
      } else if (nextMove[0][0][0] == "numberOfNextMoveTopLeft") {
        tableName[nextMove[1] - 2][nextMove[2] - 2] = i + 1;
      }
    } catch (error) {
      lastNumber = i;
      break;
    }
    lastNumber = i+1;
    i++;
  }
  return lastNumber;
}

  // 100'e kadar sayılması ve tablo oluşurulması
  function createTable(tableName,i,bool) {
    lastNumber = 0;
    while (i <= 99) {
      var nextMove = checkNumberOfMoves(tableName,i,bool);
      try {
        if (nextMove[0][0][0] == "numberOfNextMoveBottom") {
          tableName[nextMove[1] + 3][nextMove[2]] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveRight") {
          tableName[nextMove[1]][nextMove[2] + 3] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveBottomRight") {
          tableName[nextMove[1] + 2][nextMove[2] + 2] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveBottomLeft") {
          tableName[nextMove[1] + 2][nextMove[2] - 2] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveLeft") {
          tableName[nextMove[1]][nextMove[2] - 3] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveTop") {
          tableName[nextMove[1] - 3][nextMove[2]] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveTopRight") {
          tableName[nextMove[1] - 2][nextMove[2] + 2] = i + 1;
        } else if (nextMove[0][0][0] == "numberOfNextMoveTopLeft") {
          tableName[nextMove[1] - 2][nextMove[2] - 2] = i + 1;
        }
      } catch (error) {
        break;
      }
      i++;
    }
    lastNumber = i
  }

  function checkNumberOfMoves(tableName,i,bool) {
    var row = tableName.findIndex((row) => row.includes(i));
    var col = tableName[row].indexOf(i);

    return [checkNumberOfNextMove(tableName, row, col,bool), row, col,i];
  }

  // gidilebilecek karelerin hareket sayısını hesaplama
  function checkNumberOfNextMove(tableName, row, col,bool) {
    var numberOfNextMoveBottom = undefined,
      numberOfNextMoveBottomLeft = undefined,
      numberOfNextMoveBottomRight = undefined,
      numberOfNextMoveLeft = undefined,
      numberOfNextMoveRight = undefined,
      numberOfNextMoveTop = undefined,
      numberOfNextMoveTopLeft = undefined,
      numberOfNextMoveTopRight = undefined;

    if (checkRightMove(tableName, row, col) == 1)
      numberOfNextMoveRight =
        checkTopRightMove(tableName, row, col + 3) +
        checkRightMove(tableName, row, col + 3) +
        checkBottomRightMove(tableName, row, col + 3) +
        checkBottomMove(tableName, row, col + 3) +
        checkBottomLeftMove(tableName, row, col + 3) +
        checkLeftMove(tableName, row, col + 3) +
        checkTopLeftMove(tableName, row, col + 3) +
        checkTopMove(tableName, row, col + 3);

    if (checkLeftMove(tableName, row, col) == 1)
      numberOfNextMoveLeft =
        checkTopRightMove(tableName, row, col - 3) +
        checkRightMove(tableName, row, col - 3) +
        checkBottomRightMove(tableName, row, col - 3) +
        checkBottomMove(tableName, row, col - 3) +
        checkBottomLeftMove(tableName, row, col - 3) +
        checkLeftMove(tableName, row, col - 3) +
        checkTopLeftMove(tableName, row, col - 3) +
        checkTopMove(tableName, row, col - 3);

    if (checkTopMove(tableName, row, col) == 1)
      numberOfNextMoveTop =
        checkTopRightMove(tableName, row - 3, col) +
        checkRightMove(tableName, row - 3, col) +
        checkBottomRightMove(tableName, row - 3, col) +
        checkBottomMove(tableName, row - 3, col) +
        checkBottomLeftMove(tableName, row - 3, col) +
        checkLeftMove(tableName, row - 3, col) +
        checkTopLeftMove(tableName, row - 3, col) +
        checkTopMove(tableName, row - 3, col);

    if (checkBottomMove(tableName, row, col) == 1)
      numberOfNextMoveBottom =
        checkTopRightMove(tableName, row + 3, col) +
        checkRightMove(tableName, row + 3, col) +
        checkBottomRightMove(tableName, row + 3, col) +
        checkBottomMove(tableName, row + 3, col) +
        checkBottomLeftMove(tableName, row + 3, col) +
        checkLeftMove(tableName, row + 3, col) +
        checkTopLeftMove(tableName, row + 3, col) +
        checkTopMove(tableName, row + 3, col);

    if (checkTopLeftMove(tableName, row, col) == 1)
      numberOfNextMoveTopLeft =
        checkTopRightMove(tableName, row - 2, col - 2) +
        checkRightMove(tableName, row - 2, col - 2) +
        checkBottomRightMove(tableName, row - 2, col - 2) +
        checkBottomMove(tableName, row - 2, col - 2) +
        checkBottomLeftMove(tableName, row - 2, col - 2) +
        checkLeftMove(tableName, row - 2, col - 2) +
        checkTopLeftMove(tableName, row - 2, col - 2) +
        checkTopMove(tableName, row - 2, col - 2);

    if (checkTopRightMove(tableName, row, col) == 1)
      numberOfNextMoveTopRight =
        checkTopRightMove(tableName, row - 2, col + 2) +
        checkRightMove(tableName, row - 2, col + 2) +
        checkBottomRightMove(tableName, row - 2, col + 2) +
        checkBottomMove(tableName, row - 2, col + 2) +
        checkBottomLeftMove(tableName, row - 2, col + 2) +
        checkLeftMove(tableName, row - 2, col + 2) +
        checkTopLeftMove(tableName, row - 2, col + 2) +
        checkTopMove(tableName, row - 2, col + 2);

    if (checkBottomLeftMove(tableName, row, col) == 1)
      numberOfNextMoveBottomLeft =
        checkTopRightMove(tableName, row + 2, col - 2) +
        checkRightMove(tableName, row + 2, col - 2) +
        checkBottomRightMove(tableName, row + 2, col - 2) +
        checkBottomMove(tableName, row + 2, col - 2) +
        checkBottomLeftMove(tableName, row + 2, col - 2) +
        checkLeftMove(tableName, row + 2, col - 2) +
        checkTopLeftMove(tableName, row + 2, col - 2) +
        checkTopMove(tableName, row + 2, col - 2);

    if (checkBottomRightMove(tableName, row, col) == 1)
      numberOfNextMoveBottomRight =
        checkTopRightMove(tableName, row + 2, col + 2) +
        checkRightMove(tableName, row + 2, col + 2) +
        checkBottomRightMove(tableName, row + 2, col + 2) +
        checkBottomMove(tableName, row + 2, col + 2) +
        checkBottomLeftMove(tableName, row + 2, col + 2) +
        checkLeftMove(tableName, row + 2, col + 2) +
        checkTopLeftMove(tableName, row + 2, col + 2) +
        checkTopMove(tableName, row + 2, col + 2);

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

    if(minToMax[1]){
      if(minToMax[0][1] == minToMax[1][1]){
        var check = checkTableMove(minToMax,col,row)
      }
    }
    
    if(check && bool) return check;
    else return minToMax;
  }

  // tablonun ilk halinde her karenin maksimum hareket alanını içeren array üzerinde bir sonraki adımın kıyaslanması hamle sayısının kıyaslanması
  function checkTableMove(minToMax,col,row){

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

    if (minToMax[0][0] == "numberOfNextMoveBottom") {
      possibleMoves.push([minToMax[0][0],move[row + 3][col]])
    } else if (minToMax[0][0] == "numberOfNextMoveRight") {
      possibleMoves.push([minToMax[0][0],move[row][col + 3]])
    } else if (minToMax[0][0] == "numberOfNextMoveBottomRight") {
      possibleMoves.push([minToMax[0][0],move[row + 2][col + 2]])
    } else if (minToMax[0][0] == "numberOfNextMoveBottomLeft") {
      possibleMoves.push([minToMax[0][0],move[row + 2][col - 2]])
    } else if (minToMax[0][0] == "numberOfNextMoveLeft") {
      possibleMoves.push([minToMax[0][0],move[row][col - 3]])
    } else if (minToMax[0][0] == "numberOfNextMoveTop") {
      possibleMoves.push([minToMax[0][0],move[row - 3][col]])
    } else if (minToMax[0][0] == "numberOfNextMoveTopRight") {
      possibleMoves.push([minToMax[0][0],move[row - 2][col + 2]])
    } else if (minToMax[0][0] == "numberOfNextMoveTopLeft") {
      possibleMoves.push([minToMax[0][0],move[row - 2][col - 2]])
    }

    if (minToMax[1][0] == "numberOfNextMoveBottom") {
      possibleMoves.push([minToMax[1][0],move[row + 3][col]])
    } else if (minToMax[1][0] == "numberOfNextMoveRight") {
      possibleMoves.push([minToMax[1][0],move[row][col + 3]])
    } else if (minToMax[1][0] == "numberOfNextMoveBottomRight") {
      possibleMoves.push([minToMax[1][0],move[row + 2][col + 2]])
    } else if (minToMax[1][0] == "numberOfNextMoveBottomLeft") {
      possibleMoves.push([minToMax[1][0],move[row + 2][col - 2]])
    } else if (minToMax[1][0] == "numberOfNextMoveLeft") {
      possibleMoves.push([minToMax[1][0],move[row][col - 3]])
    } else if (minToMax[1][0] == "numberOfNextMoveTop") {
      possibleMoves.push([minToMax[1][0],move[row - 3][col]])
    } else if (minToMax[1][0] == "numberOfNextMoveTopRight") {
      possibleMoves.push([minToMax[1][0],move[row - 2][col + 2]])
    } else if (minToMax[1][0] == "numberOfNextMoveTopLeft") {
      possibleMoves.push([minToMax[1][0],move[row - 2][col - 2]])
    }

    possibleMoves.sort(function (a, b) {
      return a[1] - b[1];
    });

    return possibleMoves;

  }

  // hareket alanlarının kontrolü
  function checkRightMove(tableName, row, col) {
    if (col + 3 < 10 && tableName[row][col + 3] == null) {
      // sağ
      return 1;
    } else return 0;
  }

  function checkLeftMove(tableName, row, col) {
    if (col - 3 >= 0 && tableName[row][col - 3] == null) {
      // sol
      return 1;
    } else return 0;
  }

  function checkTopMove(tableName, row, col) {
    if (row - 3 >= 0 && tableName[row - 3][col] == null) {
      // yukarı
      return 1;
    } else return 0;
  }

  function checkBottomMove(tableName, row, col) {
    if (row + 3 < 10 && tableName[row + 3][col] == null) {
      // aşağı
      return 1;
    } else return 0;
  }

  function checkTopRightMove(tableName, row, col) {
    if (row - 2 >= 0 && col + 2 < 10 && tableName[row - 2][col + 2] == null) {
      // sağ üst
      return 1;
    } else return 0;
  }

  function checkTopLeftMove(tableName, row, col) {
    if (row - 2 >= 0 && col - 2 >= 0 && tableName[row - 2][col - 2] == null) {
      // sol üst
      return 1;
    } else return 0;
  }

  function checkBottomRightMove(tableName, row, col) {
    if (row + 2 < 10 && col + 2 < 10 && tableName[row + 2][col + 2] == null) {
      // sağ alt
      return 1;
    } else return 0;
  }

  function checkBottomLeftMove(tableName, row, col) {
    if (row + 2 < 10 && col - 2 >= 0 && tableName[row + 2][col - 2] == null) {
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

function runAll() {
  document.getElementById("x").value = 0;
  document.getElementById("y").value = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      run(j, i);
    }
  }
  console.log("100'e ulaşma ", count)
}