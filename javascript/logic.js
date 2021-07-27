let i = 0;
let txt = 'ekkos.tech';
let speed = 50;

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();


