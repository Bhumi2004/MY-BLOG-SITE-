const fs =require('fs');

const readStream =fs.createReadStream('./docs/bhumi3.txt'
    ,{encoding:'utf8'}
  
);
const writestream = fs.createWriteStream
('./docs/bhumi4.txt');

/*readStream.on('data',(xyz) =>
{
   console.log('----------new chuck------');
   console.log(xyz);
   writestream.write('\n new chunk\n');
   writestream.write(xyz);

})*/

readStream.pipe(writestream);