var canvas=new fabric.Canvas('myCanvas')
var block_image_width=30;
var block_image_height=30;
var player_x=10;
var player_y=10;
var super_hero_image="";



    
    
    function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    super_hero_image=Img;
    super_hero_image.scaleToWidth(super_hero_image);
    super_hero_image.scaleToHeight(super_hero_image);
    super_hero_image.set({
    top:player_y,
    left:player_x
    });
    canvas.add(super_hero_image);
    });
    }