window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};


  let btn = document.querySelector('.btn');
  let body = document.querySelector('.lightBulbBody');
  let audio = document.querySelector('#audio');
  btn.onclick = function () {
    body.classList.toggle('on');
    audio.play();
  }