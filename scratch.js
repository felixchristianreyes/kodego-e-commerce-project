var bridge = document.getElementById("bridge"),
  bridgeCanvas = bridge.getContext("2d"),
  img = new Image(),
  modal = document.querySelector('#reward-modal');
  h4 = document.querySelector('#h4-modal');

img.onload = function () {
  bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
};
img.loc = "./images/";
img.filename = "overlay.png";
img.src = img.loc + img.filename;



function detectLeftButton(event) {
  if ("buttons" in event) {
    return event.buttons === 1;
  } else if ("which" in event) {
    return event.which === 1;
  } else {
    return event.button === 1;
  }
}

function getBrushPos(xRef, yRef) {
  var bridgeRect = bridge.getBoundingClientRect();
  return {
    x: Math.floor(
      ((xRef - bridgeRect.left) / (bridgeRect.right - bridgeRect.left)) *
        bridge.width
    ),
    y: Math.floor(
      ((yRef - bridgeRect.top) / (bridgeRect.bottom - bridgeRect.top)) *
        bridge.height
    ),
  };
}

function drawDot(mouseX, mouseY) {
  bridgeCanvas.beginPath();
  bridgeCanvas.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
  bridgeCanvas.fillStyle = "#000";
  bridgeCanvas.globalCompositeOperation = "destination-out";
  bridgeCanvas.fill();
}

bridge.addEventListener(
  "mousemove",
  function (e) {
    var brushPos = getBrushPos(e.clientX, e.clientY);
    var leftBut = detectLeftButton(e);
    if (leftBut == 1) {
      drawDot(brushPos.x, brushPos.y);
      judgeVisible()
    }
  },
  false
);

bridge.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
      var brushPos = getBrushPos(touch.pageX, touch.pageY);
      drawDot(brushPos.x, brushPos.y);
      judgeVisible()
    }
  },
  false
);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function judgeVisible() {
  let randomNum = getRandomInt(1,3);
  var imageData = bridgeCanvas.getImageData(0, 120, bridge.width, bridge.height),
      pixels = imageData.data,
      result = {},
      i, len;
  let voucherImg = new Image();
  const node = document.createElement("div");
  voucherImg.src = `./images/v-${randomNum}.png`;

  // count alpha values
  for (i = 0, len = pixels.length; i < len; i += 200) {
    result[pixels[i]] || (result[pixels[i]] = 0);
    result[pixels[i]]++;
  }

  if (result[255] === undefined) {
    bridge.remove();
    h4.remove();
    node.appendChild(voucherImg);
    document.getElementById("rewards").appendChild(node);
    alert('Yay, you won something!');
  }

  console.log(result[255]) ;
  console.log(result[0]) ;
}
