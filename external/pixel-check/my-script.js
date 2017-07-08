var x=10; var y=10; var width=50; var height=50;
var counter=0;
var image;
var p;

function init(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(10, 10, 50, 50);
    
    image = ctx.getImageData(x, y, width, height);		//Load the image
    p = image.data;                                     //get the data of the image
    is_box_black_corner();
};

function is_box_black_corner(){
	for (var i=x; i<(x+width); i++){
		for (var j=y; j<(y+height); j++){
			if(my_isblack(i,j)==1){
			counter++;
			}
		}
	}
console.log(counter);
}; 

function my_isblack(x,y){
	if(p[0]<50 && p[1]<50 && p[2]<50){
		return 1;
	}
	else{
		return 0;
	}
};
