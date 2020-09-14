/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bush.js":
/*!*********************!*\
  !*** ./src/bush.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bush; });
class Bush {
  constructor(options) {
    this.sx = 0;
    this.sy = 0;
    this.sw = 32;
    this.sh = 112;
    this.scale = 1.25;
    this.width = this.sw * this.scale;
    this.height = this.sh * this.scale;
    this.image = new Image;
    this.image.src = './bush.png';
    this.game = options.game;
    this.pos = options.pos;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.pos[0], this.pos[1], this.width, this.height);
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], 20, 0, 2 * Math.PI);
    // ctx.fillStyle = "rgb(224, 197, 121)";
    // ctx.fill();
    // ctx.closePath();
  }
}

/***/ }),

/***/ "./src/farmer.js":
/*!***********************!*\
  !*** ./src/farmer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _jason__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jason */ "./src/jason.js");
/* harmony import */ var _bush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bush */ "./src/bush.js");





class Farmer extends _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.dx = 5;
    this.dy = -5;
    this.sx = 0;
    this.sy = 0;
    this.sw = 27;
    this.sh = 33;
    this.scale = 3;
    this.width = this.sw * this.scale;
    this.height = this.sh * this.scale;
    this.image = new Image;
    this.image.src = './farmer_walk_left.png';
    this.speed = 3;
    this.vel = _util__WEBPACK_IMPORTED_MODULE_1__["default"].randomVec(this.speed);
    this.frames = 0;
    this.radius = 20;
  };

  move(timeDelta = timeDelta || 1) {
    // timeDelta is number of milliseconds since last move
    // if the computer is busy the time delta will be larger
    // in this case the MovingObject should move farther in this frame
    // velocity of object is how far it should move in 1/60th of a second
    const velocityScale = timeDelta / this.NORMAL_FRAME_TIME_DELTA;
    const offsetX = this.vel[0] * velocityScale;
    const offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (Math.sign(this.vel[0]) === -1) {
      this.image.src = './farmer_walk_left.png';
    } else {
      this.image.src = './farmer_walk_right.png';
    }

    if (this.game.isOutOfBounds(this)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else if (this.pos[0] + this.sw * 3 > this.game.DIM_X || this.pos[0] < 0) {
        this.vel[0] = -this.vel[0];
      } else if (this.pos[1] < 0 || this.pos[1] + this.sh * 3 > this.game.DIM_Y) {
        this.vel[1] = -this.vel[1];
      }
    }

    // if Jason is in range of farmer, farmer will lock on to Jason
    if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].dist(this.pos, this.game.jason.pos) < 250) {
      this.vel = _util__WEBPACK_IMPORTED_MODULE_1__["default"].scale(_util__WEBPACK_IMPORTED_MODULE_1__["default"].dir(
        [-(this.pos[0] - this.game.jason.pos[0]), 
        -(this.pos[1] - this.game.jason.pos[1])]
        ), this.speed + 0.5);
    }

    if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].dist(this.pos, this.game.jason.pos) > 250 && !this.change) {
      this.vel = _util__WEBPACK_IMPORTED_MODULE_1__["default"].randomVec(this.speed);
      this.change = true;
    }
  }

  collideWith(otherObject) {
    if (otherObject instanceof Farmer && this.frames % 100 === 0) {
      this.vel[0] = -this.vel[0];
    } else if (otherObject instanceof _bush__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      this.vel[0] = -this.vel[0];
    } else if (otherObject instanceof _jason__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      // alert("Game over")
    }
  }

  collideWithStationaryObject(stationaryObj) {
    if (this.pos[0] < stationaryObj.pos[0] + stationaryObj.width && this.pos[0] + this.width > stationaryObj.pos[0] && 
      this.pos[1] < stationaryObj.pos[1] + stationaryObj.height && this.pos[1] + this.height > stationaryObj.pos[1]) {
          this.vel[0] = -this.vel[0];
    }
  }

  draw(ctx) {
    this.frames += 1;
    
    // moves from the farmer walk sprite sheet over time
    if (this.frames % 10 === 0) {
      this.sx += 27;
    }
    
    // loop back to beginning of the sheet once we get to the last frame
    if (this.sx > 189) {
      this.sx = 0;
      this.frames = 0;
    }
    
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.pos[0], this.pos[1], this.width, this.height);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Farmer);

/***/ }),

/***/ "./src/forest.js":
/*!***********************!*\
  !*** ./src/forest.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Forest; });
class Forest {
  constructor(options) {
    this.sx = 0;
    this.sy = 0;
    this.sw = 368;
    this.sh = 640;
    this.scale = 0.5;
    this.width = this.sw * this.scale;
    this.height = this.sh * this.scale;
    this.image = new Image;
    this.image.src = './forest_side.png';
    this.game = options.game;
    this.pos = options.pos;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.pos[0], this.pos[1], this.width, this.height);
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], 20, 0, 2 * Math.PI);
    // ctx.fillStyle = "rgb(224, 197, 121)";
    // ctx.fill();
    // ctx.closePath();
  }
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _jason__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jason */ "./src/jason.js");
/* harmony import */ var _farmer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmer */ "./src/farmer.js");
/* harmony import */ var _forest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forest */ "./src/forest.js");
/* harmony import */ var _bush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bush */ "./src/bush.js");






const BUSH_POSITIONS = [
  [1200 / 1.5, 0 + 100],
  [1200 / 1.5, (700 / 2) + 100]
]

class Game {
  constructor() {
    this.DIM_X = 1200;
    this.DIM_Y = 700;
    this.BG_COLOR = 'green';
    this.NUM_FARMERS = 0;
    this.NUM_BUSHES = 2;
    this.jason = new _jason__WEBPACK_IMPORTED_MODULE_1__["default"]({ pos: [this.DIM_X - 84, 0], game: this });
    this.farmers = [];
    this.bushes = [];
    this.forest = new _forest__WEBPACK_IMPORTED_MODULE_3__["default"]({ pos: [0, this.DIM_Y / 4], game: this });

    this.addFarmers();
    this.addBushes();
  }

  add(object) {
    if (object instanceof _farmer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      this.farmers.push(object);
    } else if (object instanceof _bush__WEBPACK_IMPORTED_MODULE_4__["default"]) {
      this.bushes.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  };

  allObjects() {
    return [].concat(this.jason, this.farmers, this.bushes, this.forest);
  }

  allMovingObjects() {
    return [].concat(this.farmers);
  }

  addFarmers() {
    for (let i = 0; i < this.NUM_FARMERS; i++) {
      this.add(new _farmer__WEBPACK_IMPORTED_MODULE_2__["default"]({pos: [500, 300], game: this}));
    }
  }

  addBushes() {
    for (let i = 0; i < this.NUM_BUSHES; i++) {
      this.add(new _bush__WEBPACK_IMPORTED_MODULE_4__["default"]({pos: BUSH_POSITIONS[i], game: this}));
    }
  }

  randomPosition() {
    return [
      this.DIM_X * Math.random(),
      this.DIM_Y * Math.random()
    ];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = this.BG_COLOR;
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    // const img = new Image;
    // img.src = '../mini_capy.png';
    // ctx.drawImage(img, 0, 0, this.DIM_X, this.DIM_Y)

    this.allObjects().forEach(object => object.draw(ctx));
  }

  moveObjects(timeDelta) {
    this.allMovingObjects().forEach(object => object.move(timeDelta));
  }

  wrap(pos) {
    return [
      _util__WEBPACK_IMPORTED_MODULE_0__["default"].wrap(pos[0], this.DIM_X), _util__WEBPACK_IMPORTED_MODULE_0__["default"].wrap(pos[1], this.DIM_Y)
    ];
  }

  isOutOfBounds(object) {
    return (object.pos[0] < 0 + object.sw) || (object.pos[1] < 0 + object.sh) ||
      (object.pos[0] > this.DIM_X - object.sw * 3) || (object.pos[1] > this.DIM_Y - object.sh * 3);
  }

  checkFarmerCollisions() {
    for (let i = 0; i < this.NUM_FARMERS; i++) {
      for (let j = 0; j < this.NUM_FARMERS; j++) {
        const obj1 = this.farmers[i];
        const obj2 = this.farmers[j];

        if (obj1.isCollidedWith(obj2) && obj1 !== obj2) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  checkMovingObjectCollisions() {
    const allMovingObjects = this.allMovingObjects();

    for (let i = 0; i < allMovingObjects.length; i++) {
      for (let j = 0; j < allMovingObjects.length; j++) {
        const obj1 = allMovingObjects[i];
        const obj2 = allMovingObjects[j];

        if (obj1.isCollidedWith(obj2) && obj1 !== obj2) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  checkJasonStationaryObjectCollisions() {
    for (let i = 0; i < this.NUM_BUSHES; i++) {
      const stationaryObj = this.bushes[i];
      const collided = this.jason.isCollidedWith(stationaryObj);
      if (collided) this.jason.collideWithStationaryObject(stationaryObj);
    }
  }

  checkFarmerStationaryObjectCollisions() {
    for (let i = 0; i < this.NUM_BUSHES; i++) {
      for (let j = 0; j < this.NUM_FARMERS; j++) {
        const stationaryObj = this.bushes[i];
        const collided = this.farmers[j].isCollidedWith(stationaryObj);
        if (collided) this.farmers[j].collideWithStationaryObject(stationaryObj);
      }
    }
  }

  step(timeDelta) {
    this.moveObjects(timeDelta);
    this.checkFarmerCollisions();
    this.checkJasonStationaryObjectCollisions();
    this.checkFarmerStationaryObjectCollisions();
    // this.checkMovingObjectCollisions();
  }

  // remove(object) {
  //   if (object instanceof Farmer) {
  //     this.farmers.splice(this.farmers.indexOf(object), 1);
  //   } else if (object instanceof Bush) {
  //     this.bushes.splice(this.bushes.indexOf(object), 1);
  //   }
  // }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.lastTime = 0;
  };

  start() {
    // start the animation
    // setInterval(() => {
    //   this.game.farmer.frames += 1;
    // }, 0.5)
    
    requestAnimationFrame(this.animate.bind(this));
  };

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js");



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1200;
  canvas.height = 700;
  window.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_1__["default"];
  window.ctx = ctx;
  window.frames = 0;
  const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  gameView.start();
});


const keyDownHandler = e => {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    window.rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    window.leftPressed = true;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    window.upPressed = true;
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    window.downPressed = true;
  }
}

const keyUpHandler = e => {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    window.rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    window.leftPressed = false;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    window.upPressed = false;
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    window.downPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

/***/ }),

/***/ "./src/jason.js":
/*!**********************!*\
  !*** ./src/jason.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js");


class Jason extends _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.dx = 5;
    this.dy = -5;
    this.sx = 0;
    this.sy = 0;
    this.sw = 28;
    this.sh = 21;
    this.scale = 3;
    this.width = this.sw * this.scale;
    this.height = this.sh * this.scale;
    this.image = new Image;
    this.image.src = './capy_walk_left.png';
  }

  collideWithStationaryObject(stationaryObj) {
    if (this.pos[0] < stationaryObj.pos[0] + stationaryObj.width && this.pos[0] + this.width > stationaryObj.pos[0] &&
      this.pos[1] < stationaryObj.pos[1] + stationaryObj.height && this.pos[1] + this.height > stationaryObj.pos[1]) {
        if (this.pos[0] > stationaryObj.pos[0] + stationaryObj.width / 2) {
          this.pos[0] += this.dx;
        }
        if (this.pos[0] < stationaryObj.pos[0] + stationaryObj.width / 2) {
          this.pos[0] -= this.dx;
        } 
    }  
  }
  
  draw(ctx) {
    if (window.rightPressed) {
      this.image.src = './capy_walk_right_flipped.png';
    } else if (window.leftPressed) {
      this.image.src = './capy_walk_left.png';
    } else if (window.downPressed) {
      this.image.src = './capy_walk_down.png';
    } else if (window.upPressed) {
      this.image.src = './capy_walk_up.png';
    }

    if (window.rightPressed) {
      this.pos[0] += this.dx;
      if (this.pos[0] + this.dx + this.width > this.game.DIM_X) {
        this.pos[0] = this.game.DIM_X - this.width;
      }
    } else if (window.leftPressed) {
      this.pos[0] -= this.dx;
      if (this.pos[0] < 0) {
        this.pos[0] = 0;
      }
    }
    
    if (window.upPressed) {
      this.pos[1] += this.dy;
      if (this.pos[1] + this.dy < 0) {
        this.pos[1] = 0;
      }
    } else if (window.downPressed) {
      this.pos[1] -= this.dy;
      if (this.pos[1] - this.dy + this.height > this.game.DIM_Y) {
        this.pos[1] = this.game.DIM_Y - this.height;
      }
    }

    if (window.upPressed && !window.rightPressed) {
      window.frames += 1;
    } else if (window.downPressed && !window.leftPressed) {
      window.frames += 1;
    } else if (window.upPressed && window.rightPressed) {
      window.frames += 1;
    } else if (window.downPressed && window.leftPressed) {
      window.frames += 1;
    } else if (!window.upPressed && window.rightPressed) {
      window.frames += 1;
    } else if (!window.downPressed && window.leftPressed) {
      window.frames += 1;
    }

    switch (window.frames) {
      case 0:
        this.sx = 0;
        break;
      case 8:
        this.sx = 28;
        break;
      case 16:
        this.sx = 56;
        break;
      case 24:
        this.sx = 84;
        break;
      case 32:
        this.sx = 112;
        break;
      default:
        break;
    }

    if (window.frames > 32) {
      this.sx = 0;
      window.frames = 0;
    }

    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.pos[0], this.pos[1], this.width, this.height);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Jason);

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.isWrappable = false;
    this.NORMAL_FRAME_TIME_DELTA = 1000 / 60;
  }

  // draw(ctx) {
  //   ctx.beginPath();
  //   ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
  //   ctx.fillStyle = this.color;
  //   ctx.fill();
  //   ctx.closePath();
  // }

  // move(timeDelta = timeDelta || 1) {
  //   // timeDelta is number of milliseconds since last move
  //   // if the computer is busy the time delta will be larger
  //   // in this case the MovingObject should move farther in this frame
  //   // velocity of object is how far it should move in 1/60th of a second
  //   const velocityScale = timeDelta / this.NORMAL_FRAME_TIME_DELTA;
  //   const offsetX = this.vel[0] * velocityScale;
  //   const offsetY = this.vel[1] * velocityScale;

  //   this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

  //   if (this.game.isOutOfBounds(this)) {
  //     if (this.isWrappable) {
  //       this.pos = this.game.wrap(this.pos);
  //     } else if (this.pos[0] > this.game.DIM_X || this.pos[0] < 0) {
  //       this.vel[0] = -this.vel[0];
  //     } else if (this.pos[1] < 0 || this.pos[1] > this.game.DIM_Y) {
  //       this.vel[1] = -this.vel[1];
  //     }
  //   }

  //   if (Util.dist(this.pos, this.game.jason.pos) < 400) {
  //     this.vel = Util.scale(Util.dir([-(this.pos[0] - this.game.jason.pos[0]), -(this.pos[1] - this.game.jason.pos[1])]), this.speed + this.speed / 2);
  //   }
  // }

  isCollidedWith(otherObject) {
    const centerDist = _util__WEBPACK_IMPORTED_MODULE_0__["default"].dist(this.pos, otherObject.pos);
    // console.log(centerDist < (this.width + otherObject.width));
    // console.log("centerDist", centerDist);
    // console.log("this.width:", this.width);
    // console.log("otherObject.width:", otherObject.width);
    // console.log("this.pos:", this.pos);
    // console.log("otherObject.pos:", otherObject.pos);
    return centerDist < (this.width + otherObject.width);
  }

  collideWith(otherObject) {
    
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MovingObject);

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Util = {
  // Return a randomly oriented vector with the given length
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },
  // Find the length of the vector
  norm(vec) {
    return Util.dist([0, 0], vec);
  },
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },
  wrap(coord, max) {
    if (coord < 0) {
      return max - (coord % max);
    } else if (coord > max) {
      return coord % max;
    } else {
      return coord;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map