function go() { 
    showCircle(1000, 450, 100).then(div => { 
      div.classList.add('message-ball'); 
      div.append("SOY UN CACAHUETEEEEEEEE!!!!!1!111"); 
    }); 
 
 
 
  } 
 
  function showCircle(cx, cy, radius) { 
    let div = document.createElement('div'); 
    div.style.width = 0; 
    div.style.height = 0; 
    div.style.left = cx + 'px'; 
    div.style.top = cy + 'px'; 
    div.className = 'circle'; 
    document.body.append(div); 
    let containerOfMessageBall = document.createElement('div');
    containerOfMessageBall.className = 'rock';
    containerOfMessageBall.append(div);
    document.body.append(containerOfMessageBall);
 
 
    return new Promise(resolve => { 
      setTimeout(() => { 
        div.style.width = radius * 5 + 'px';
        div.style.height = radius * 5 + 'px';
        div.style.transition = 'width 0.5s ease, height 0.5s ease';
        div.addEventListener('transitionend', function handler() { 
          div.removeEventListener('transitionend', handler); 
          resolve(div); 
        }); 
      }, 0); 
    }) 
  }