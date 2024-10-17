const sharp = require('sharp');

var fs = require('fs');
var dir = 'D:\\FiveM\\clothes_images\\female_watch\\raw\\'
fs.readdir(dir, (err, filesname)=>{
    filesname.forEach((filename)=>{
        console.log(filename)
        // {width: 512, height: 730, left: 700, top: 350} body
        // {width: 682, height: 378, left: 470, top: 395} Shoes
        // pant {width: 530, height: 950, left: 550, top: 42}
        // pant female {width: 530, height: 900, left: 550, top: 0}
        // head {width: 606, height: 735, left: 620, top: 160}
        // hat {width: 270, height: 309, left: 816, top: 350}
        // Glasses {width: 250, height: 250, left: 816, top: 400}
        // earrings {width: 205, height: 152, left: 840, top: 475}
        // watch {width: 473, height: 473, left: 780, top: 380}
        //bracelet {width: 535, height: 535, left: 1030, top: 370}
        // Female 
        // Shoes {width: 454, height: 454, left: 610, top: 330}
        // Pants {width: 473, height: 855, left: 600, top: 15}
        //head female {width: 606, height: 735, left: 660, top: 80}
        // Mask {width: 455, height: 455, left: 72, top: 220}
        // Backacpk {width: 474, height: 474, left: 720, top: 420}
        // Accs {width: 580, height: 930, left: 700, top: 150}
        // Kevlar {width: 333, height: 423, left: 800, top: 380}
        // undershirt {width: 333, height: 450, left: 800, top: 380}
        // Jacket {width: 333, height: 580, left: 800, top: 330}
        // hat {width: 221, height: 295, left: 850, top: 350}
        // glasses {width: 250, height: 250, left: 830, top: 420}
        // earrings {width: 280, height: 280, left: 880, top: 450}
        // bracelet {width: 350, height: 350, left: 1030, top: 460}
        // watch
        sharp(dir + filename).extract({width: 450, height: 450, left: 855, top: 370}).toFile('D:\\FiveM\\clothes_images\\female_watch\\cropped\\' + filename).then(function(new_file_info) {
            console.log("Image cropped and saved");
        }).catch(function(err) {
            console.log(err);
        });
    })
})