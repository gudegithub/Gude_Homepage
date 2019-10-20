function getScroll() {
  //ブラウザによって異なる
  let element = document.documentElement || document.body;
  // スクロールされたピクセル数
  let scroll = element.scrollTop;
  // スクロール範囲の最大のピクセル数
  let range = element.scrollHeight;
  // console.log(scroll);
  // console.log(range);

  if (scroll / range > 0.093) {
    let contents_animation = document.getElementById('contents_animation');
    contents_animation.classList.remove('none');
  }
  if (scroll / range > 0.1) {
    let contents_animationExample_1 = document.getElementById('contents_animationExample_1');
    contents_animationExample_1.classList.remove('none');
    let contents_animationExample_2 = document.getElementById('contents_animationExample_2');
    contents_animationExample_2.classList.remove('none');
    let contents_animationExample_3 = document.getElementById('contents_animationExample_3');
    contents_animationExample_3.classList.remove('none');
  }
  if (scroll / range > 0.28) {
    let contents_cms = document.getElementById('contents_cms');
    contents_cms.classList.remove('none');
  }
  if (scroll / range > 0.37) {
    let contents_plansTitle = document.getElementById('contents_plansTitle');
    contents_plansTitle.classList.remove('none');
  }
  if (scroll / range > 0.43) {
    let contents_plan_1 = document.getElementById('contents_plan_1');
    contents_plan_1.classList.remove('none');
    let contents_plan_2 = document.getElementById('contents_plan_2');
    contents_plan_2.classList.remove('none');
  }
  if (scroll / range > 0.53) {
    let contents_buttonToForm = document.getElementById('contents_buttonToForm');
    contents_buttonToForm.classList.remove('none');
  }
}

setInterval("getScroll()", 100);
