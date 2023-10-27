import { render } from "ejs";
import express from "express";

const app = express();
const port = 3000;

let taskArray = [];

app.use(express.static("static"));
app.use(express.urlencoded({extended:true}));


// app.post("/submit", (req,res)=>{
//     let text  = req.body.newTask;
//     if (text != undefined && text != ""){
//     taskArray.push(text);
//     console.log(taskArray);
//     res.redirect("/");
//     }
//     else{
//         res.redirect('/')
//     }
// });

app.get('/',(req,res)=>{
    let data = {"tasks" : taskArray};
    res.render('index.ejs',data);
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
