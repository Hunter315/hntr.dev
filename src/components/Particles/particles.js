import React from "react";

class Particles extends React.Component {
  constructor() {
    super();
    this.state = {
      inValue: "Hunter Smith"
    };
  }

  componentDidMount() {
      //grab my canvas and input HTML elements
    const canvas = this.refs.canvas;
    const inputRef = this.refs.copy;
    const ctx = canvas.getContext("2d");
    // init particles, amount of particles, mouse location and radius
    let particles = [];
    let amount = 0;
    let mouse = { x: 0, y: 0 };
    let radius = 1;

    var colors = ["#2fefbc", "white", "#25b28c", "#25b28c", "#747475"];
    // var colors = ["white", "white", "white", "white", "white"];

    var copy = inputRef;

    //get canvas width and height
    var ww = (canvas.width = window.innerWidth);
    var wh = (canvas.height = window.innerHeight);

    //create the particles
    function Particle(x, y) {
        //each particle will be different
        //create x and y values randomly based upon the canvas width and height
      this.x = Math.random() * ww;
      this.y = Math.random() * wh;
      // create accessible object "dest" with the new x and y values
      this.dest = {
        x: x,
        y: y
      };


      this.r = Math.random() * 5 + 2;
      this.vx = (Math.random() - 0.5) * 20;
      this.vy = (Math.random() - 0.5) * 20;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random() * 0.0009 + 0.94; // *.001 for original effect
      

      this.color = colors[Math.floor(Math.random() * 6)];
    }

    Particle.prototype.render = function() {
      this.accX = (this.dest.x - this.x) / 1000;
      this.accY = (this.dest.y - this.y) / 1000;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y += this.vy;

      ctx.fillStyle = this.color;
      //path init
      ctx.beginPath();
      //create circles with arc() method
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      //put color into the particle
      ctx.fill();

      var a = this.x - mouse.x;
      var b = this.y - mouse.y;

      var distance = Math.sqrt(a * a + b * b);
      if (distance < radius * 70) {
        this.accX = (this.x - mouse.x) / 100;
        this.accY = (this.y - mouse.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
      }
    };

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onTouchMove(e) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }

    function onTouchEnd(e) {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function initScene() {
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   const p = new Path2D("M489,255.9c0-0.2,0-0.5,0-0.7c0-1.6,0-3.2-0.1-4.7c0-0.9-0.1-1.8-0.1-2.8  c0-0.9-0.1-1.8-0.1-2.7c-0.1-1.1-0.1-2.2-0.2-3.3c0-0.7-0.1-1.4-0.1-2.1c-0.1-1.2-0.2-2.4-0.3-3.6c0-0.5-0.1-1.1-0.1-1.6  c-0.1-1.3-0.3-2.6-0.4-4c0-0.3-0.1-0.7-0.1-1C474.3,113.2,375.7,22.9,256,22.9S37.7,113.2,24.5,229.5c0,0.3-0.1,0.7-0.1,1  c-0.1,1.3-0.3,2.6-0.4,4c-0.1,0.5-0.1,1.1-0.1,1.6c-0.1,1.2-0.2,2.4-0.3,3.6c0,0.7-0.1,1.4-0.1,2.1c-0.1,1.1-0.1,2.2-0.2,3.3  c0,0.9-0.1,1.8-0.1,2.7c0,0.9-0.1,1.8-0.1,2.8c0,1.6-0.1,3.2-0.1,4.7c0,0.2,0,0.5,0,0.7c0,0,0,0,0,0.1s0,0,0,0.1c0,0.2,0,0.5,0,0.7  c0,1.6,0,3.2,0.1,4.7c0,0.9,0.1,1.8,0.1,2.8c0,0.9,0.1,1.8,0.1,2.7c0.1,1.1,0.1,2.2,0.2,3.3c0,0.7,0.1,1.4,0.1,2.1  c0.1,1.2,0.2,2.4,0.3,3.6c0,0.5,0.1,1.1,0.1,1.6c0.1,1.3,0.3,2.6,0.4,4c0,0.3,0.1,0.7,0.1,1C37.7,398.8,136.3,489.1,256,489.1  s218.3-90.3,231.5-206.5c0-0.3,0.1-0.7,0.1-1c0.1-1.3,0.3-2.6,0.4-4c0.1-0.5,0.1-1.1,0.1-1.6c0.1-1.2,0.2-2.4,0.3-3.6  c0-0.7,0.1-1.4,0.1-2.1c0.1-1.1,0.1-2.2,0.2-3.3c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0.1-1.8,0.1-2.8c0-1.6,0.1-3.2,0.1-4.7  c0-0.2,0-0.5,0-0.7C489,256,489,256,489,255.9C489,256,489,256,489,255.9z")
    //   ctx.stroke(p);
    //   ctx.fill(p)


      ctx.font = "bold " + ww / 10 + "px sans-serif";
      ctx.textAlign = "center";
  
      ctx.fillText(copy.value, ww / 2, wh / 2); 

      var data = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      //all particles will be stored in an array, with x and y value 
      particles = [];
      for (var i = 0; i < ww ; i += Math.round(ww / 150)) {
        for (var j = 0; j < wh ; j += Math.round(ww / 150)) {
          if (data[(i + j * ww) * 4 + 3] > 150) {
            particles.push(new Particle(i, j));
          }
        }
      }
      amount = particles.length;
    }

    function onMouseClick() {
      radius++;
      if (radius === 5) {
        radius = 0;
      }
    }

    function render(a) {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < amount; i++) {
        particles[i].render();
      }
    }

    copy.addEventListener("keyup", initScene);
    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("click", onMouseClick);
    window.addEventListener("touchend", onTouchEnd);
    initScene();
    requestAnimationFrame(render);
  }

 
  render() {
    const handleValueChange = e => {
      this.setState({ inValue: e.target.value });
    };
    const style = {
      display:"none",
      position: "relative",
      bottom: "35%",
      border: "none",
      borderRadius: "50px",
      padding: "10px",
      zIndex: "2000",
      "&:focus": {
        outline: "none"
      }
    };
    const inputStyle= {
        position: "absolute",
        width: "100%",
        bottom: "15%",
        textAlign: "center",
        zIndex:"6"
    }

    return (
      <>
        <canvas id="scene" ref="canvas" />
        <div style={inputStyle}>
          <input
            style={style}
            id="copy"
            type="text"
            value={this.state.inValue}
            onChange={e => handleValueChange(e)}
            placeholder="Type something here!"
            ref="copy"
          />
          <p style={{ display: "inline-block", fontSize: "2.3rem", color: "#bcbac1", maxWidth: "830px", lineHeight: "3.4rem", userSelect: "none"}}>
          I'm Hunter Smith - I innovate and solve problems.<br />Check out my projects below and see what I can do!
          
          </p>
        </div>
      </>
    );
  }
}

export default Particles;
