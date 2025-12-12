const canvas = document.getElementById("game-canvas"); const ctx = canvas.getContext("2d");

// ドット絵（簡易） const pigeon = [ "..11..", ".1111.", "111111", "..11..", "..11..", ];

const earth = [ ".11.", "1111", "1111", ".11.", ];

// 描画スケール const pixel = 20;

function drawSprite(sprite) { ctx.clearRect(0, 0, canvas.width, canvas.height); sprite.forEach((row, y) => { [...row].forEach((col, x) => { if (col === "1") { ctx.fillStyle = "#2a402a"; // ゲームボーイ風 濃緑 ctx.fillRect(x * pixel + 40, y * pixel + 40, pixel, pixel); } }); }); }

let clickCount = 0; let lastClickTime = 0;

canvas.addEventListener("click", () => handleClick(1)); canvas.addEventListener("dblclick", () => handleClick(2)); canvas.addEventListener("mousedown", () => { const now = Date.now(); if (now - lastClickTime < 300) { clickCount++; } else { clickCount = 1; } lastClickTime = now;

setTimeout(() => { if (clickCount === 3) handleClick(3); }, 300); });

function handleClick(type) { if (type === 1) { drawSprite(pigeon); } else if (type === 2) { drawSprite(earth); } else if (type === 3) { // 背景色を少し濃くする const current = getComputedStyle(canvas).backgroundColor; let c = current.match(/\d+/g).map(Number); c = c.map((n) => Math.max(0, n - 10)); canvas.style.backgroundColor = rgb(${c[0]}, ${c[1]}, ${c[2]}); } }