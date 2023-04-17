
// 遊戲設定
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const grid = 40;
const width = canvas.width / grid;
const height = canvas.height / grid;

// 貪吃蛇初始設定
let snake = {
    x: 0,
    y: 0,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
};

// 食物初始設定
let food = {
    x: Math.floor(Math.random() * width)*grid,
    y: Math.floor(Math.random() * height)*grid
};

// 遊戲狀態初始設定
let score = 0;
let gameOver = false;
let speed=1;
// 遊戲迴圈
function loop() {
    if (gameOver) {
        return;
    }

    // 每一幀清空畫面
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 移動貪吃蛇
    snake.x += snake.dx;
    snake.y += snake.dy;





    // 如果貪吃蛇碰到牆壁，遊戲結束
    if (snake.x < 0 || snake.x >= width * grid || snake.y < 0 || snake.y >= height * grid) {
        gameOver = true;
        return;
    }

    // 將新的頭部加入貪吃蛇的 cells 中
    snake.cells.unshift({ x: snake.x, y: snake.y });

    // 如果貪吃蛇吃到食物，加分，生成新的食物
    if (snake.x === food.x && snake.y === food.y) {
        score++;
        snake.maxCells++;
        food.x = Math.floor(Math.random() * width)*grid;
        food.y = Math.floor(Math.random() * height)*grid;
        speed+=1;
    }

    // 如果貪吃蛇的 cells 長度超過了 maxCells，移除尾部
    while (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // 繪製貪吃蛇
    ctx.fillStyle = "green";
    snake.cells.forEach(function(cell, index) {
        ctx.fillRect(cell.x, cell.y, grid-1, grid-1);

        // 如果貪吃蛇碰到自己，遊戲結束
        if (cell.x === snake.x && cell.y === snake.y && index !== 0) {
            gameOver = true;
        }
    });

    // 繪製食物
    ctx.fillStyle = "red";
    ctx.fillRect(food.x , food.y , grid-1, grid-1);

    // 更新分數
    document.getElementById("score").innerHTML = "Score: " + score;
    console.log(`you(${snake.x},${snake.y}):food(${food.x},${food.y})`)
    // 設定遊戲迴圈
    setTimeout(function() {
        requestAnimationFrame(loop);
    }, 1000 / speed);
}

// 開始遊戲
requestAnimationFrame(loop);

// 監聽鍵盤事件，控制貪吃蛇移動方向
document.addEventListener("keydown", function(e) {
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    } else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    } else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    } else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});