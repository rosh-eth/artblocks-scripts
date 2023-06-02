function getRandomHash() {
  let result = "0x";
  for (let i = 64; i > 0; --i) result += "0123456789abcdef"[~~(Math.random() * 16)];
  return result;
}

let hash = getRandomHash();

let tokenData = {
  hash: getRandomHash(),
  tokenId: "13000738",
};``

/* Fragments code below is untouched */

var TDIM = Math.min(window.innerWidth, window.innerHeight);
var DIM = 1000;
var fDIM = TDIM / DIM;
var linha, col, larg, alt, fn, fx, fy, filamento, quant, estacao, primavera, verao, outono, inverno;
var corFolhas, corFlor;
var flores = [];

function semente() {
  let seed = parseInt(tokenData.hash.slice(0, 16), 16);
  let p = [];
  for (let i = 0; i < 64; i += 2) {
    p.push(tokenData.hash.slice(i + 2, i + 4));
  }
  sementes = p.map((x) => {
    return parseInt(x, 16) % 10;
  });
}

function variaveis() {
  semente();

  // rows and columns
  linha = map(sementes[0], 0, 9, 93, 107);
  col = map(sementes[1], 0, 9, 20, 39);

  // noise factor
  fn = map(sementes[2], 0, 9, 0.0325, 0.07);

  // scale factor
  fx = 1;
  fy = 10;

  // size
  larg = DIM / linha;
  alt = DIM / col;

  noiseSeed(map(sementes[3], 0, 9, 0, 1000));
  randomSeed(map(sementes[4], 0, 9, 0, 1000));

  estacao = map(sementes[15], 0, 9, 0, 1);
  let corPri = map(sementes[23], 0, 9, 0, 1);
  let corV = map(sementes[25], 0, 9, 0, 1);
  let corOut = map(sementes[14], 0, 9, 0, 1);
  let corIn = map(sementes[22], 0, 9, 0, 1);

  if (estacao < 0.25) {
    primavera = true;
    var dado1 = random(1);
    if (dado1 < 0.5) {
      corFolhas = [color("#A3BFAA"), color("#698C72"), color("#467351"), color("#184026"), color("#13261B")];
    } else {
      corFolhas = [color("#CFDFDC"), color("#618C6C"), color("#80A689"), color("#2E5931"), color("#12260C")];
    }
    if (corPri < 0.5) {
      corFlor = [color("#FAE29D"), color("#F7B05B"), color("#F8F8F8"), color("#DDC9DB"), color("#AA78A6")];
    } else {
      corFlor = [color("#FFE6D2"), color("#856F72"), color("#FFCF87"), color("#FFB883"), color("#D59385")];
    }
  } else if (estacao < 0.5) {
    outono = true;
    var dado2 = random(1);
    if (dado2 < 0.5) {
      corFolhas = [color("#F0F2DD"), color("#F2BB5A"), color("#8D4304"), color("#5A1B02"), color("#0B0D0A")];
    } else {
      corFolhas = [color("#D94423"), color("#F2E2C4"), color("#D97236"), color("#59190B"), color("#260907")];
    }
    if (corOut < 0.5) {
      corFlor = [color("#606c38"), color("#283618"), color("#fefae0"), color("#dda15e"), color("#bc6c25")];
    } else {
      corFlor = [color("#e8f6fe"), color("#0097dc"), color("#8db6db"), color("#f27178"), color("#ac2a1c")];
    }
  } else if (estacao < 0.75) {
    verao = true;
    let dado3 = random(1);
    if (dado3 < 0.5) {
      corFolhas = [color("#F2CF66"), color("#F2B950"), color("#F29D35"), color("#F2780C"), color("#F2DE79")];
    } else {
      corFolhas = [color("#ECE094"), color("#FEFAB0"), color("#FFFEBC"), color("#FFFFD1"), color("#FFFFFF")];
    }
    if (corV < 0.5) {
      corFlor = [color("#fcdce1"), color("#f384a1"), color("#d9f1fd"), color("#4993ce"), color("#ed0874")];
    } else {
      corFlor = [color("#2703A6"), color("#9591F2"), color("#F2CB05"), color("#F29F05"), color("#F25C05")];
    }
  } else {
    inverno = true;
    let dado4 = random(1);
    if (dado4 < 0.5) {
      corFolhas = [color("#C1C7D9"), color("#E9EBF2"), color("#D0D2D9"), color("#6F81A6"), color("#95A3BF")];
    } else {
      corFolhas = [color("#F2F2F2"), color("#A6A6A6"), color("#8C8C8C"), color("#737373"), color("#595959")];
    }
    if (corIn < 0.5) {
      corFlor = [color("#BFA8BB"), color("#D6C2F2"), color("#E4E4F2"), color("#F6F6FE"), color("#EADAE4")];
    } else {
      corFlor = [color("#B8D3D9"), color("#E4F6E8"), color("#AEC78E"), color("#274B00"), color("#F5FBF9")];
    }
  }

  quant = map(sementes[6], 0, 9, 5, 75);
  corFlor = reord(corFlor);
}

function reord(array) {
  let novoArray = array;
  for (let i = novoArray.length - 1; i > 0; i--) {
    const j = floor(random(1) * i);
    const temp = novoArray[i];
    novoArray[i] = novoArray[j];
    novoArray[j] = temp;
  }
  return novoArray;
}

function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
}

function setup() {
  createCanvas(TDIM, TDIM);
  strokeCap(ROUND);
  strokeWeight(DIM / 500);
  variaveis();
  let corChance = map(sementes[7], 0, 9, 0, 1);
  let indexChance = map(sementes[8], 0, 9, 0, 1);
  var cores = permute(corFlor);
  for (var i = 0; i < quant; i++) {
    if (corChance < 0.75) {
      cor = cores[floor(random(cores.length))];
    } else {
      cor = corFlor;
    }
    filamento = map(sementes[floor(random(sementes.length))], 0, 9, 30, 50); //30.50
    if (indexChance < 0.5) {
      index = map(sementes[floor(random(sementes.length))], 0, 9, 4, 9);
    } else {
      index = map(sementes[9], 0, 9, 4, 9);
    }
    anc = map(sementes[floor(random(sementes.length))], 0, 9, 4, 14);
    flores[i] = new flor(random(1) * DIM, random(1) * DIM, random(360), index, filamento, anc, cor);
  }
}

function draw() {
  scale(fDIM, fDIM);
  let back = map(sementes[10], 0, 9, 0, 1);
  let chuvaChance = map(sementes[21], 0, 9, 0, 1);
  if (back < 0.5) {
    background(corFlor[floor(random(corFlor.length))]);
  } else {
    background(corFolhas[floor(random(corFolhas.length))]);
  }
  folhas(random(0.35, 0.6));
  play();
  folhas(random(0.2, 0.35));
  if (inverno === true) neve();
  if (verao === true) {
    if (chuvaChance < 0.9) {
      chuva();
    }
  }
  noLoop();
}

function folhas(chance) {
  let novaCor = reord(corFolhas);
  var p1 = map(sementes[29], 0, 9, 0, 1);
  var p2 = map(sementes[28], 0, 9, 0, 1);

  for (var i = 0; i <= DIM; i++) {
    for (var j = 0; j <= DIM + DIM * 0.5; j++) {
      a = noise(fn * i, fn * j);
      a2 = noise(fn * j, fn * i);
      push();
      if (p1 < 0.5) {
        translate((i * larg) / fx, (j * alt) / fy);
      } else {
        translate((j * alt) / fy, (i * larg) / fx);
      }
      if (p2 < 0.5) {
        rotate(a * TAU);
      } else {
        rotate(-(a * TAU));
      }
      if (a2 < chance) {
        var chanceS = map(sementes[11], 0, 9, 0, 1);
        var chanceS2 = map(sementes[21], 0, 9, 0, 1);
        if (chanceS2 < 0.33) {
          if (chanceS < 0.5) stroke(novaCor[0]);
          else stroke(corFlor[0]);
        } else if (chanceS2 < 0.66) {
          if (chanceS < 0.5) {
            stroke(corFlor[floor(random(corFlor.length))]);
          } else {
            stroke(novaCor[floor(random(novaCor.length))]);
          }
        } else {
          stroke(corFlor[floor(a * corFlor.length)]);
        }
        fill(novaCor[floor(a * corFolhas.length)]);
        ellipse(0, 0, this.fx * larg, fy * alt * a);
        var matoChance = map(sementes[12], 0, 9, 0, 1);
        noStroke();
        if (primavera === true) {
          if (matoChance < 0.25) {
            fill(corFlor[floor(random(corFlor.length))]);
          } else if (matoChance < 0.5) {
            fill(corFlor[1]);
          } else if (matoChance < 0.75) {
            noFill();
          } else {
            fill(corFlor[floor(a * corFlor.length)]);
          }
          ellipse(0, (fy * alt * a) / 2, DIM / 20 / random(10, 16), DIM / 20 / random(5, 10));
        }
      }
      pop();
    }
  }
}

function flor(px_, py_, ang_, index, fil_, anc, cor) {
  this.corFlor = cor;
  this.px = px_;
  this.py = py_;
  this.ang = ang_;
  this.quant = index;
  this.ang2 = 360 / this.quant / 2;
  this.fil = fil_;
  if (quant < 15) {
    this.esc = map(sementes[floor(random(sementes.length))], 0, 9, 16, 21);
  } else if (quant < 25) {
    this.esc = map(sementes[floor(random(sementes.length))], 0, 9, 21, 26);
  } else if (quant < 35) {
    this.esc = map(sementes[floor(random(sementes.length))], 0, 9, 28, 32);
  } else {
    this.esc = map(sementes[floor(random(sementes.length))], 0, 9, 32, 37);
  }
  this.prob = map(sementes[floor(random(sementes.length))], 0, 9, 0, 1);
  var chance = random(1);
  if (chance < 0.5) {
    this.anc = anc;
  } else {
    this.anc = -anc;
  }

  this.petalaPlot = function () {
    push();
    translate(this.px, this.py);
    rotate(radians(this.ang));
    ellipseMode(CORNER);

    //petalas
    for (let i = 0; i < this.quant; i++) {
      var escAlt = random(1, 1.15);
      noStroke();
      fill(this.corFlor[0]);
      ellipse(0, (-DIM / (this.esc * 2)) * escAlt, DIM / (this.esc / 2), (DIM / this.esc) * escAlt);
      strokeWeight(DIM / this.esc / 30);
      stroke(this.corFlor[1]);
      line(0, 0, random((DIM / (this.esc / 2)) * 0.75, DIM / (this.esc / 2)), 0);
      rotate(PI / (this.quant / 2));
    }
    rotate(radians(this.ang2));

    for (let i = 0; i < this.quant; i++) {
      var escAlt2 = random(0.95, 1.05);
      noStroke();
      fill(this.corFlor[1]);
      ellipse(0, (-DIM / (this.esc * 2)) * escAlt2, DIM / (this.esc / 2), (DIM / this.esc) * escAlt2);
      strokeWeight(DIM / this.esc / 30);
      stroke(this.corFlor[0]);
      line(0, 0, random((DIM / (this.esc / 2)) * 0.75, DIM / (this.esc / 2)), 0);
      rotate(PI / (this.quant / 2));
    }
    pop();
  };

  this.petalaOut = function () {
    push();
    translate(this.px, this.py);
    rotate(radians(this.ang));
    ellipseMode(CORNER);

    for (let i = 0; i < this.quant; i++) {
      var escAlt = random(1, 1.15);
      noStroke();
      fill(this.corFlor[0]);
      ellipse(0, (-DIM / (this.esc * 2)) * escAlt, DIM / (this.esc / 2), (DIM / this.esc) * escAlt);
      strokeWeight(DIM / this.esc / 30);
      stroke(this.corFlor[1]);
      line(0, 0, random((DIM / (this.esc / 2)) * 0.75, DIM / (this.esc / 2)), 0);
      translate(0, random(DIM));
      rotate(PI / (this.quant / 2));
    }
    pop();
  };

  this.corona = function () {
    push();
    translate(this.px, this.py);
    // corona
    strokeWeight(DIM / this.esc / 30);
    ellipseMode(CENTER);
    for (let i = 0; i < this.fil; i++) {
      var dado = random(1.25, 1.35);
      noFill();
      stroke(this.corFlor[2]);
      bezier(
        0,
        0,
        0,
        DIM / this.esc / this.anc,
        DIM / (this.esc / dado),
        DIM / this.esc / this.anc,
        DIM / (this.esc / dado),
        0,
      );
      noStroke();
      fill(this.corFlor[2]);
      ellipse(
        DIM / (this.esc / dado),
        0,
        DIM / this.esc / random(10, 14), //14
        DIM / this.esc / random(7, 10), //7
      );

      var dado3 = random(1, 1.2);
      noFill();
      stroke(this.corFlor[2]);
      bezier(
        0,
        0,
        0,
        DIM / this.esc / this.anc,
        DIM / (this.esc / dado3),
        DIM / this.esc / this.anc,
        DIM / (this.esc / dado3),
        0,
      );
      noStroke();
      fill(this.corFlor[2]);
      ellipse(DIM / (this.esc / dado3), 0, DIM / this.esc / random(12, 16), DIM / this.esc / random(8, 12));
      rotate(PI / (this.fil / 2));
    }

    for (var j = 0; j < this.fil / 2; j++) {
      var dado2 = random(0.85, 0.95);
      noFill();
      stroke(this.corFlor[2]);
      bezier(
        0,
        0,
        0,
        DIM / this.esc / this.anc,
        DIM / (this.esc / dado2),
        DIM / this.esc / this.anc,
        DIM / (this.esc / dado2),
        0,
      );
      noStroke();
      fill(this.corFlor[2]);
      ellipse(DIM / (this.esc / dado2), 0, DIM / this.esc / random(12, 18), DIM / this.esc / random(9, 12));

      rotate(PI / (this.fil / 2 / 2));
    }

    // miolinho
    noStroke();
    fill(this.corFlor[2]);
    ellipse(0, 0, DIM / this.esc / random(0.75, 1), DIM / this.esc / random(0.75, 1));
    fill(this.corFlor[3]);
    ellipse(0, 0, DIM / this.esc / random(1.1, 1.5), DIM / this.esc / random(1.1, 1.5));
    pop();
  };

  this.stamen = function () {
    var sta;
    if (this.prob < 0.1) sta = 4;
    else if (this.prob > 0.9) sta = 6;
    else sta = 5;

    push();
    translate(this.px, this.py);
    rotate(radians(map(sementes[floor(random(sementes.length))], 0, 9, 0, 360)));
    for (var i = 0; i < sta; i++) {
      var altS = random(-DIM / this.esc / 16, DIM / this.esc / 16);
      strokeWeight(DIM / this.esc / 14);
      stroke(this.corFlor[3]);
      noFill();
      if (this.prob > 0.5) {
        ang2 = random(18, 20);
      } else {
        ang2 = random(-20, -18);
      }
      bezier(
        0,
        0,
        0,
        DIM / this.esc / ang2,
        DIM / this.esc / 1.5 + altS,
        DIM / this.esc / ang2,
        DIM / this.esc / 1.5 + altS,
        0,
      );
      noStroke();
      fill(this.corFlor[3]);
      ellipse(
        DIM / this.esc / 1.5 + altS,
        0,
        (DIM / this.esc / 9) * random(1, 1.5),
        (DIM / this.esc / 5) * random(1, 1.5),
      );
      rotate(PI / (sta / 2));
    }

    //ovario
    fill(this.corFlor[4]);
    ellipse(0, 0, DIM / this.esc / 2 / random(0.75, 1), DIM / this.esc / 2 / random(0.75, 1));

    // stigma
    for (var j = 0; j < 3; j++) {
      var altSt = random(-DIM / this.esc / 18, DIM / this.esc / 18);
      strokeWeight(DIM / this.esc / 14);
      stroke(this.corFlor[1]);
      noFill();
      bezier(
        0,
        0,
        0,
        DIM / this.esc / ang2,
        DIM / this.esc / 2 + altSt,
        DIM / this.esc / ang2,
        DIM / this.esc / 2 + altSt,
        0,
      );
      noStroke();
      fill(this.corFlor[1]);
      ellipse(
        DIM / this.esc / 2 + altSt,
        0,
        (DIM / this.esc / 8) * random(1, 1.25),
        (DIM / this.esc / 4) * random(1, 1.25),
      );
      rotate(PI / (3 / 2));
    }

    fill(this.corFlor[2]);
    ellipse(0, 0, DIM / this.esc / 5, DIM / this.esc / 5);

    pop();
  };
}

function chuva() {
  var chanceChuva = random(1);
  var altChuva = random(DIM / 3, DIM);
  var gotas = random(400, 600);
  var desvio = DIM / 15;
  stroke(corFlor[floor(random(corFlor.length))]);
  push();
  translate(0, 0);
  for (let i = 0; i < gotas; i++) {
    var x = random(-DIM / 5, DIM);
    var y = random(-DIM / 5, altChuva);
    var x2 = random(DIM);
    var y2 = random(altChuva / 2);
    var alt = random(DIM / 80, DIM / 10);
    if (chanceChuva < 0.45) {
      line(x, y, x + desvio, y + alt);
      line(x2, y2, x2 + desvio, y2 + alt);
    } else if (chanceChuva < 0.9) {
      line(x, y, x - desvio, y + alt);
      line(x2, y2, x2 - desvio, y2 + alt);
    } else {
      line(x, y, x, y + alt);
      line(x2, y2, x2, y2 + alt);
    }
  }
  pop();
}

function neve() {
  var corNeve = [color("#F5FBF9"), color("#e9ebf2"), color("#f6f6fe"), color("#f1f1f1"), color("#e4e4f2")];
  let novaCor = reord(corNeve);
  var flocos = map(sementes[16], 0, 9, 1000, 1800);
  if (sementes[17] === 3) flocos = 0;
  if (sementes[19] === 3) flocos = random(3500, 4500);
  print(flocos);
  push();
  translate(0, 0);
  fill(novaCor[floor(random(novaCor.length))]);
  noStroke();
  for (let i = 0; i < flocos; i++) {
    ellipse(random(DIM), random(DIM), random(DIM / 100, DIM / 140), random(DIM / 100, DIM / 140));
  }
  pop();
}

function play() {
  var chance = map(sementes[13], 0, 9, 0, 1);
  for (var i = 0; i < flores.length; i++) {
    if (outono === true) {
      if (chance < 0.15) {
        flores[i].petalaPlot();
        flores[i].corona();
        flores[i].stamen();
      } else {
        flores[i].petalaOut();
        flores[i].petalaPlot();
        flores[i].corona();
        flores[i].stamen();
      }
    }

    if (primavera === true) {
      flores[i].petalaPlot();
      flores[i].corona();
      flores[i].stamen();
    }

    if (inverno === true) {
      flores[i].petalaPlot();
      flores[i].corona();
      flores[i].stamen();
    }

    if (verao === true) {
      flores[i].petalaPlot();
      flores[i].corona();
      flores[i].stamen();
    }
  }
}
