//描画するcanvas要素のIDと配列を引数にとる
function makeFlexibleCircle(canvasId, circlesList) {

  const canvasWidth = window.parent.screen.width;
  const canvasHeight = document.getElementById('container_canvas').clientHeight;

  const MAX = 11; //点を打つ基準の円の接線とベジェ曲線の接線の角度のずれの最大値. 最小値10
  const circles = circlesList; //描画する図形の情報を格納したオブジェクトを格納した配列を読み込む

  let canvas, context;

  let Point = function(c, r, rota, coefficientSpeed, coefficientCos, coefficientSin) //
  {
  	this.x, this.y;
  	this.centerX = c.x;
  	this.centerY = c.y;
  	this.radian = rota * (Math.PI / 180);
  	this.radius = r;

  	this.speed = Math.random() * coefficientSpeed + 2; //円上の点の数
  	this.r = Math.random() * 2 + 1; //点を打つ円の半径
  	this.rota = 0;


  	this.update = function()
  	{

  		var plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;

  		this.radius += plus;

  		var cos = Math.cos(this.radian) * this.radius * coefficientCos; //点のx座標の指定.中心からの相対座標.
  		var sin = Math.sin(this.radian) * this.radius * coefficientSin; //点のy座標の指定.中心からの相対座標.

  		this.x = cos + this.centerX;
  		this.y = sin + this.centerY;

  		this.rota += this.speed;

  		if(this.rota > 360){ this.rota -= 360; }; //rotaを常に2πrad(360deg)以下にする.
  	}
  }

  const init = function() {

  	var rota = Math.floor(360 / MAX);
  	for(var i = 0; i < circles.length; i++){

  		for(var j = 0; j < MAX; j++)
  		{
  			circles[i].point[j] = new Point(circles[i]['center'], circles[i]['radius'], rota * j,circles[i]['coefficientSpeed'] , circles[i]['coefficientCos'], circles[i]['coefficientSin']); //circles[i]の項目はここの引数にする. Pointの定義のほうにも変更を加える.
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

      context.fillStyle = color; //オブジェクトの色
      context.globalAlpha = alpha; //透明度

      context.beginPath();

      // //線形グラデーションの指定
      // var context_color = canvas.getContext('2d');
      // var context_color = context.createLinearGradient(100, 100, 100, 300);
      // context_color.addColorStop(0.0, '#80ccff'); //第二引数の色を指定するy座標とcanvasの高さとの比
      // context_color.addColorStop(1.0, 'rgba(131, 243, 238, 0.4)');
      // context.fillStyle = context_color;

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
      canvas = document.getElementById(canvasId);
      canvas.width = document.body.clientWidth; //canvas要素の幅を関数実行時の画面幅にする
      canvas.height = document.getElementById('container_canvas').clientHeight; //canvas要素の高さをcontainerに合わせる
      context = canvas.getContext("2d");

      init();
  }

};

(() => {
  const canvasWidth = window.parent.screen.width;
  const canvasHeight = document.getElementById('container_canvas').clientHeight;

  const circlesListLarge  = [
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.06},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 200,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 2.6,
          coefficientSin: 1.7,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.06},
          color: 'rgba(89, 161, 233, 0.05)',
          radius: 200,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 2.6,
          coefficientSin: 1.7,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.26},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 200,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 4.3,
          coefficientSin: 1.2,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.54},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 180,
          point: [],
          coefficientSpeed: 7,
          coefficientCos: 8.6,
          coefficientSin: 3.7,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.86},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 200,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 4.3,
          coefficientSin: 2.1,
      },
      {
          center: {x:-1 * canvasWidth / 2.5, y:canvasHeight * 0.50},
          color: 'rgba(89, 161, 233, 0.05)',
          radius: 200,
          point: [],
          coefficientSpeed: 10,
          coefficientCos: 3,
          coefficientSin: 17,
      },
      {
          center: {x:canvasWidth + canvasWidth / 2.5, y:canvasHeight * 0.50},
          color: 'rgba(89, 161, 233, 0.05)',
          radius: 200,
          point: [],
          coefficientSpeed: 10,
          coefficientCos: 3,
          coefficientSin: 17,
      },
  ];

  const circlesListSmall  = [
      {
          center: {x:canvasWidth / 2 + 50, y:canvasHeight * 0.05},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 100,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 2.6,
          coefficientSin: 1.7,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.05},
          color: 'rgba(89, 161, 233, 0.05)',
          radius: 100,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 2.6,
          coefficientSin: 1.7,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.20},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 210,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 4.3,
          coefficientSin: 1.2,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.52},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 240,
          point: [],
          coefficientSpeed: 7,
          coefficientCos: 8.6,
          coefficientSin: 3.7,
      },
      {
          center: {x:canvasWidth / 2, y:canvasHeight * 0.88},
          color: 'rgba(131, 243, 238, 0.4)',
          radius: 200,
          point: [],
          coefficientSpeed: 5,
          coefficientCos: 4.3,
          coefficientSin: 2.1,
      },
      {
          center: {x:-1 * canvasWidth / 2.5, y:canvasHeight * 0.50},
          color: 'rgba(89, 161, 233, 0.05)',
          radius: 200,
          point: [],
          coefficientSpeed: 10,
          coefficientCos: 3,
          coefficientSin: 17,
      },
      {
          center: {x:canvasWidth + canvasWidth / 2.5, y:canvasHeight * 0.50},
          color: 'rgba(89, 161, 233, 0.05)',
          radius: 200,
          point: [],
          coefficientSpeed: 10,
          coefficientCos: 3,
          coefficientSin: 17,
      },
  ];

  if (canvasWidth <= 768) {
    makeFlexibleCircle('canvas1', circlesListSmall);
  } else {
    makeFlexibleCircle('canvas1', circlesListLarge);
  }
})();
