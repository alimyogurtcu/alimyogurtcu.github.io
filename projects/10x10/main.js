function run() {
  // inputlardan alınan başlangıç x ve y değeri
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);

  var table = [];

  // 10x10 oyun tahtası array'i
  for (var j = 0; j < 10; j++ == null) {
    table.push(new Array(10).fill(null));
  }

  // inputa göre 1'in yerleştirilmesi
  table[x][y] = 1;

  var i = 1;

  // 100'e kadar sayılması
  while (i <= 99) {
    
    var nextMove = checkNumberOfMoves(i);

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
      break;
    }
    i++;
  }


  function checkNumberOfMoves(i) {
    var row = table.findIndex((row) => row.includes(i));
    var col = table[row].indexOf(i);

    return [checkNumberOfNextMove(row, col), row, col];
  }

  // gidilebilecek karelerin hareket sayısını hesaplama
  function checkNumberOfNextMove(row, col) {
    var numberOfNextMoveBottom = undefined,
      numberOfNextMoveBottomLeft = undefined,
      numberOfNextMoveBottomRight = undefined,
      numberOfNextMoveLeft = undefined,
      numberOfNextMoveRight = undefined,
      numberOfNextMoveTop = undefined,
      numberOfNextMoveTopLeft = undefined,
      numberOfNextMoveTopRight = undefined;

    if (checkRightMove(row, col) == 1)
      numberOfNextMoveRight =
        checkTopRightMove(row, col + 3) +
        checkRightMove(row, col + 3) +
        checkBottomRightMove(row, col + 3) +
        checkBottomMove(row, col + 3) +
        checkBottomLeftMove(row, col + 3) +
        checkLeftMove(row, col + 3) +
        checkTopLeftMove(row, col + 3) +
        checkTopMove(row, col + 3);

    if (checkLeftMove(row, col) == 1)
      numberOfNextMoveLeft =
        checkTopRightMove(row, col - 3) +
        checkRightMove(row, col - 3) +
        checkBottomRightMove(row, col - 3) +
        checkBottomMove(row, col - 3) +
        checkBottomLeftMove(row, col - 3) +
        checkLeftMove(row, col - 3) +
        checkTopLeftMove(row, col - 3) +
        checkTopMove(row, col - 3);

    if (checkTopMove(row, col) == 1)
      numberOfNextMoveTop =
        checkTopRightMove(row - 3, col) +
        checkRightMove(row - 3, col) +
        checkBottomRightMove(row - 3, col) +
        checkBottomMove(row - 3, col) +
        checkBottomLeftMove(row - 3, col) +
        checkLeftMove(row - 3, col) +
        checkTopLeftMove(row - 3, col) +
        checkTopMove(row - 3, col);

    if (checkBottomMove(row, col) == 1)
      numberOfNextMoveBottom =
        checkTopRightMove(row + 3, col) +
        checkRightMove(row + 3, col) +
        checkBottomRightMove(row + 3, col) +
        checkBottomMove(row + 3, col) +
        checkBottomLeftMove(row + 3, col) +
        checkLeftMove(row + 3, col) +
        checkTopLeftMove(row + 3, col) +
        checkTopMove(row + 3, col);

    if (checkTopLeftMove(row, col) == 1)
      numberOfNextMoveTopLeft =
        checkTopRightMove(row - 2, col - 2) +
        checkRightMove(row - 2, col - 2) +
        checkBottomRightMove(row - 2, col - 2) +
        checkBottomMove(row - 2, col - 2) +
        checkBottomLeftMove(row - 2, col - 2) +
        checkLeftMove(row - 2, col - 2) +
        checkTopLeftMove(row - 2, col - 2) +
        checkTopMove(row - 2, col - 2);

    if (checkTopRightMove(row, col) == 1)
      numberOfNextMoveTopRight =
        checkTopRightMove(row - 2, col + 2) +
        checkRightMove(row - 2, col + 2) +
        checkBottomRightMove(row - 2, col + 2) +
        checkBottomMove(row - 2, col + 2) +
        checkBottomLeftMove(row - 2, col + 2) +
        checkLeftMove(row - 2, col + 2) +
        checkTopLeftMove(row - 2, col + 2) +
        checkTopMove(row - 2, col + 2);

    if (checkBottomLeftMove(row, col) == 1)
      numberOfNextMoveBottomLeft =
        checkTopRightMove(row + 2, col - 2) +
        checkRightMove(row + 2, col - 2) +
        checkBottomRightMove(row + 2, col - 2) +
        checkBottomMove(row + 2, col - 2) +
        checkBottomLeftMove(row + 2, col - 2) +
        checkLeftMove(row + 2, col - 2) +
        checkTopLeftMove(row + 2, col - 2) +
        checkTopMove(row + 2, col - 2);

    if (checkBottomRightMove(row, col) == 1)
      numberOfNextMoveBottomRight =
        checkTopRightMove(row + 2, col + 2) +
        checkRightMove(row + 2, col + 2) +
        checkBottomRightMove(row + 2, col + 2) +
        checkBottomMove(row + 2, col + 2) +
        checkBottomLeftMove(row + 2, col + 2) +
        checkLeftMove(row + 2, col + 2) +
        checkTopLeftMove(row + 2, col + 2) +
        checkTopMove(row + 2, col + 2);

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

    return minToMax;
  }

  // hareket alanlarının kontrolü

  function checkRightMove(row, col) {
    if (col + 3 < 10 && table[row][col + 3] == null) {
      // sağ
      return 1;
    } else return 0;
  }

  function checkLeftMove(row, col) {
    if (col - 3 >= 0 && table[row][col - 3] == null) {
      // sol
      return 1;
    } else return 0;
  }

  function checkTopMove(row, col) {
    if (row - 3 >= 0 && table[row - 3][col] == null) {
      // yukarı
      return 1;
    } else return 0;
  }

  function checkBottomMove(row, col) {
    if (row + 3 < 10 && table[row + 3][col] == null) {
      // aşağı
      return 1;
    } else return 0;
  }

  function checkTopRightMove(row, col) {
    if (row - 2 >= 0 && col + 2 < 10 && table[row - 2][col + 2] == null) {
      // sağ üst
      return 1;
    } else return 0;
  }

  function checkTopLeftMove(row, col) {
    if (row - 2 >= 0 && col - 2 >= 0 && table[row - 2][col - 2] == null) {
      // sol üst
      return 1;
    } else return 0;
  }

  function checkBottomRightMove(row, col) {
    if (row + 2 < 10 && col + 2 < 10 && table[row + 2][col + 2] == null) {
      // sağ alt
      return 1;
    } else return 0;
  }

  function checkBottomLeftMove(row, col) {
    if (row + 2 < 10 && col - 2 >= 0 && table[row + 2][col - 2] == null) {
      //sol alt
      return 1;
    } else return 0;
  }

  // table oluşturma
  const elemTable = document.getElementById("table");
  const textNode = document.createTextNode("X:" + x + " Y:" + y + " Sayı:" + i);
  elemTable.appendChild(textNode);
  for (const obj of table) {
    const row = document.createElement("tr");
    for (const val of Object.values(obj)) {
      const col = document.createElement("td");
      col.textContent = val;
      row.appendChild(col);
    }
    elemTable.appendChild(row);
  }

  elemTable.appendChild(document.createElement("br"));
}
