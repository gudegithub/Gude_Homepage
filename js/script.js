function getScroll() {
  //ブラウザによって異なる
  let element = document.documentElement || document.body;
  // スクロールされたピクセル数
  let scroll = element.scrollTop;
  // スクロール範囲の最大のピクセル数
  let range = element.scrollHeight;

  if (scroll / range >= 0.06) {
    let missionTitle = document.getElementById('missionTitle');
    missionTitle.classList.remove('none');
    let mission = document.getElementById('mission');
    mission.classList.remove('none');
  }
  if (scroll / range >= 0.13) {
    let text_mission = document.getElementById('text_mission');
    text_mission.classList.remove('none');
  }
  if (scroll / range >= 0.22) {
    let serviceTitle = document.getElementById('serviceTitle');
    serviceTitle.classList.remove('none');
  }
  if (scroll / range >= 0.28) {
    let serviceItem1 = document.getElementById('serviceItem1');
    serviceItem1.classList.remove('none');
  }
  if (scroll / range >= 0.32) {
    let serviceItem2 = document.getElementById('serviceItem2');
    serviceItem2.classList.remove('none');
  }
  if (scroll / range >= 0.38) {
    let serviceItem3 = document.getElementById('serviceItem3');
    serviceItem3.classList.remove('none');
  }
  if (scroll / range >= 0.40) {
    let serviceItem4 = document.getElementById('serviceItem4');
    serviceItem4.classList.remove('none');
  }
  if (scroll / range >= 0.45) {
    let companyTitle = document.getElementById('companyTitle');
    companyTitle.classList.remove('none');
  }
  if (scroll / range >= 0.56) {
    let box_company = document.getElementById('box_company');
    box_company.classList.remove('none');
  }
  // console.log(scroll / range);
}

setInterval("getScroll()", 100);
