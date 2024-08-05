console.log("hello bidhayak")


const express =require('express')
const app=express()
const path = require("path"); 
//const marked = require ('marked');//for markdown files


app.set("view engine","ejs")
app.listen(3000)

const fs = require('fs');


const directoryPath = './problems';
const problemdescrpt="pages/problemdescrption.ejs"

const problemarr=[]


fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter only files
  const fileNames = files.filter(file => {
    const filePath = path.join(directoryPath, file);
    return fs.statSync(filePath).isFile();
  });

  console.log('Files in the directory:');
  fileNames.forEach(fileName => {
    console.log(fileName);
    problemarr.push(fileName);
  });
});


app.get('/problemList',(req,res)=>{
    console.log('inside problemList')
    res.render('pages/index',{problemarr:problemarr,link:"/problem"});

})

app.get('/problem/:id',(req,res)=>{
    console.log('fetching problem by query parameter... ')
    // var path = require('path');
    // var fileName = "./problems/{req.params.id}";
    // var file = path.basename(fileName);

    //convert md to html
    var marked = require ('marked');

    var md = function (filename) {
       var path= "./problems/" + filename;
       var markdownstring = fs.readFileSync (path, 'utf8');
       var html = marked.parse (markdownstring);
 
       return html;
    };
    var htmlContent = md(req.params.id);

 
    res.render ('pages/problemdescrption', {content: htmlContent});
    
   
   
})

