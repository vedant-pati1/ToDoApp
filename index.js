import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const dir = dirname(fileURLToPath(import.meta.url));

app.use(express.static("static"));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(dir+'/index.html');
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
