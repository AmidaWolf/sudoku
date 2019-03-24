module.exports = function solveSudoku(matrix) {
  //перебираем матрицу
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        //подставляем значение и проверяем условие решения
        for (let number = 1; number <= 9; number++) {
          if (checkNumber(matrix, number, i, j) === true) {
            matrix[i][j] = number;
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

//собираем проверки (переписать в функцию)
function checkNumber(matrix, number, setRow, setColumn) {
  let thisRow = Math.floor(setRow / 3) * 3;
  let thisColumn = Math.floor(setColumn / 3) * 3;

  //проверяем строку на уникальность числа
  for (let j = 0; j < 9; j++) {
    if (j != setColumn && matrix[setRow][j] === number) {
      return false;
    }
  }
  //проверяем колонку на уникальность числа
  for (let i = 0; i < 9; i++) {
    if (i != setRow && matrix[i][setColumn] === number) {
      return false;
    }
  }
  //проверяем блок
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i != setRow && j != setColumn && matrix[thisRow + i][thisColumn + j] === number) {
        return false;
      }
    }
  }
  return true;
}
