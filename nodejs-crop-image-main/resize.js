const sharp = require('sharp');

var fs = require('fs');
var dir = 'D:\\FiveM\\clothes_images\\3_female_mask\\transparent\\'
fs.readdir(dir, (err, filesname)=>{
    filesname.forEach((filename)=>{
        console.log(filename)
        // {width: 100, height: 163} body
        //{width: 150, height: 83}shoes
        //{width: 100, height: 179}pant
        //{width: 100, height: 143} backpack
        // {width: 100, height: 121} mask
        // FEMALE
        // mask {width: 100, height: 100}
        // pants {width: 200, height: 200}
        // accs{width: 200, height: 321}
        // kevlar{width: 150, height: 261}
        // undershirt
        sharp(dir + filename).resize({width: 100, height: 100}).toFile('D:\\FiveM\\clothes_images\\3_female_mask\\resize\\' +  '' + filename).then(function(new_file_info) {
            console.log("Image resize and saved");
        }).catch(function(err) {
            console.log(err);
        });
    })
})