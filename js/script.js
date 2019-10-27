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

  (function () {

  const MAX = 10,
      circles = [
          {
              center: {x:600, y:350},
              color: '#10c2cd',
              radius: 200,
              point: []
          },

      ];

  let canvas, context;

  let Point = function(c, r, rota)
  {
  	this.x, this.y;
  	this.centerX = c.x;
  	this.centerY = c.y;
  	this.radian = rota * (Math.PI / 180);
  	this.radius = r;

  	this.speed = Math.random() * 1 + 2;
  	this.r = Math.random() * 2 + 1;
  	this.rota = 0;


  	this.update = function()
  	{

  		var plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;

  		this.radius += plus;

  		var cos = Math.cos(this.radian) * this.radius * 2.6;
  		var sin = Math.sin(this.radian) * this.radius * 1.8;

  		this.x = cos + this.centerX;
  		this.y = sin + this.centerY;

  		this.rota += this.speed;

  		if(this.rota > 360){ this.rota -= 360; };
  	}
  }

  const init = function() {

  	var rota = Math.floor(360 / MAX);
  	for(var i = 0; i < circles.length; i++){

  		for(var j = 0; j < MAX; j++)
  		{
  			circles[i].point[j] = new Point(circles[i]['center'], circles[i]['radius'], rota * j);
  		}
  	}

      update();
  }


  const update = function() {

  	for (var i= 0; i < circles.length; i++) {
  		for(var j = 0; j < MAX; j++)
  		{
  			circles[i].point[j].update();
  		}
      }

      draw(circles);

      setTimeout(update, 45);
  }

  const draw = function(circles) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for(var i = 0; i < circles.length; i++) {

          drawCircle(circles[i]['color'], circles[i]['point'], 1);

      }
  };

  const drawCircle = function(color, point, alpha) {

      context.fillStyle = color;
      context.globalAlpha = alpha;

      context.beginPath();

      var context_color = canvas.getContext('2d');
      var context_color = context.createLinearGradient(100, 100, 100, 300);
      context_color.addColorStop(0.0, '#80ccff');
      context_color.addColorStop(1.0, '#e6fdff');
      context.fillStyle = context_color;

  	var xc1 = (point[0].x + point[MAX - 1].x) / 2;
  	var yc1 = (point[0].y + point[MAX - 1].y) / 2;

  	context.moveTo(xc1, yc1);

  	for(var i = 0; i < MAX - 1; i++)
  	{

  		var xc = (point[i].x + point[i + 1].x) / 2;
  		var yc = (point[i].y + point[i + 1].y) / 2;

  		context.quadraticCurveTo(point[i].x, point[i].y, xc, yc);
  	}

  	context.quadraticCurveTo(point[i].x, point[i].y, xc1, yc1);

  	context.closePath();
      context.fill();


  }


  window.onload = function(e) {
      canvas = document.getElementById("canvas1");
      canvas.width = document.documentElement.clientWidth;
      canvas.height = 800;
      context = canvas.getContext("2d");

      init();
  }


  })();
