function go() { 
    showCircle(150, 150, 100).then(div => { 
      div.classList.add('message-ball'); 
      div.append("Hola, mundo!"); 
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
 
 
    return new Promise(resolve => { 
      setTimeout(() => { 
// Faltaria definir lss sentencias para ampliar progresivamente la grandaría del circulo (El radio del mismo) 
 
        div.addEventListener('transitionend', function handler() { 
          div.removeEventListener('transitionend', handler); 
          resolve(div); 
        }); 
      }, 0); 
    }) 
  }