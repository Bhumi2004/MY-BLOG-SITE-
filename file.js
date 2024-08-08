const fs = require('fs');
/*fs.readFile('./docs/Bhumi.txt',
    (err,data)=>
    {
        if(err)
        {
            console.log(err);
        }
        console.log(data.toString());
    }
);
console.log('last line');*/

/*fs.writeFile('./docs/Bhumi.txt', 'hello world' ,()=>
{
    console.log('file, waas written');
});
fs.writeFile('./docs/Bhumi2.txt', 'hello world' ,()=>
    {
        console.log('file, waas written');
    });*/
    
 /*   if(!fs.existsSync('./assest')){
    fs.mkdir('./assest',(err) =>
    {
        if(err)
            console.log(err);
        console.log('floder created');
    });
} else{
    fs.rmdir('./assets',(err) =>
{
    if(err)
        console.log(err);
    console.log('floder deleted');
});
}*/

if(fs.existsSync('./docs/Bhumi2.txt'))
{
    fs.unlink('./docs/Bhumi2.txt',(err)=>
    {
        if(err)
         console.log(err)
        console.log('file delted');
      
        })
}
