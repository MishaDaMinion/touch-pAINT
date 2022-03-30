var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "purple";
    width_of_line = 5;

    var width = screen.width;
    new_width = screen.width - 75;
new_height = screen.height - 300;
if (width<992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height=new_height;
}

       canvas.addEventListener("touchstart",ts);
       function ts(e){
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
       }
       canvas.addEventListener("touchmove",tm);
       function tm (e){
           current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
           current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
           ctx.beginPath();
           ctx.strokeStyle=color;
           ctx.lineWidth=width_of_line;
           ctx.moveTo(last_position_of_x,last_position_of_y);
           ctx.lineTo(current_position_of_x,current_position_of_y);
           ctx.stroke();
           last_position_of_x=current_position_of_x;
           last_position_of_y=current_position_of_y;
       }