function preload(){

};

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    tint_color="";
}

function draw(){
   circle(30,30,20);
   rect(30,120,55,55);
   ellipse(56, 90, 55, 55);

}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;

}
function take_snapshot(){
    save('Lavanya.png');
}

