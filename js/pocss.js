/**
 * Created by yunhe3 on 2016/11/17.
 */
particle_no = 30;

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();
var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var counter = 0;
var particles = [];
var w = 400, h = 100;
canvas.width = w;
canvas.height = h;

function reset(){
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,w,h);
    ctx.font = "16px 宋体";

    ctx.fillStyle = "#fff";
    ctx.fillRect(25,80,350,25);
    ctx.fillText("正在加载，精彩一触即发...",100,50);
}

function progressbar(){
    this.widths = 0;
    this.hue = 0;

    this.draw = function(){
        ctx.fillStyle = 'hsla(219, 63%, 62%, 6)';
        ctx.fillRect(25,80,this.widths,25);
        var grad = ctx.createLinearGradient(0,0,0,130);
        grad.addColorStop(0,"transparent");
        grad.addColorStop(1,"rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(25,80,this.widths,25);
    }
}

function particle(){
    this.x = 20 + bar.widths;
    this.y = 82;

    this.vx = 0.8 + Math.random()*1;
    this.v = Math.random()*5;
    this.g = 1 + Math.random()*3;
    this.down = false;

    this.draw = function(){
        ctx.fillStyle = 'hsla('+(bar.hue+0.9)+', 100%, 40%, 1)';;
        var size = Math.random()*2;
        ctx.fillRect(this.x, this.y, size, size);
    }
}

bar = new progressbar();

function draw(){
    reset();
    counter++

    bar.hue += 0.8;

    bar.widths += 0.84;
    if(bar.widths > 350){
        if(counter > 215){
            reset();
            bar.hue = 0;
            bar.widths = 0;
            counter = 0;
            particles = [];
        }
        else{
            bar.hue = 126;
            bar.widths = 351;
            bar.draw();
        }
    }
    else{
        bar.draw();
        for(var i=0;i<particle_no;i+=10){
            particles.push(new particle());
        }
    }
    update();
}

function update(){
    for(var i=0;i<particles.length;i++){
        var p = particles[i];
        p.x -= p.vx;
        if(p.down == true){
            p.g += 0.1;
            p.y += p.g;
        }
        else{
            if(p.g<0){
                p.down = true;
                p.g += 0.1;
                p.y += p.g;
            }
            else{
                p.y -= p.g;
                p.g -= 0.1;
            }
        }
        p.draw();
    }
}

function animloop() {
    draw();
    requestAnimFrame(animloop);
}

animloop();