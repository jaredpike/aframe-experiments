// inspired by: https://github.com/processprocess/lazerGlazer_Viz/blob/master/app.js

let target = document.querySelector('#target');

let totalLines = 600;
let thickness = 0.1;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLines() {
  for(let i = 0; i < totalLines; i++){    
    let box = document.createElement('a-box');
    let depth = getRandomInt(4, 20);
    
    box.setAttribute('position', `${-4 + i} 5 -10`);
    box.setAttribute('height', thickness);
    box.setAttribute('width', thickness);
    box.setAttribute('depth', depth);
    target.appendChild(box);
    
    let timing = getRandomInt(1500, 6000);
    let widthSpread = getRandomInt(-20, 20);
    let heightSpread = getRandomInt(-20, 20);
    let startPos = getRandomInt(-200, -50);
    let offset = i * 5;
    
    let animation = document.createElement('a-animation');
    animation.setAttribute('attribute', 'position');
    animation.setAttribute('from', `${widthSpread} ${heightSpread} ${startPos}`);
    animation.setAttribute('to', `${widthSpread} ${heightSpread} 50`);
    animation.setAttribute('dur', `${timing + offset}`);
    animation.setAttribute('fill', 'forwards');
    animation.setAttribute('repeat', 'indefinite');
    animation.setAttribute('easing', 'linear');

    box.appendChild(animation);
  }
}

generateLines();
