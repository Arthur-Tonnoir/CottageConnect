import { MySQL } from "./bdd/MySQL";
import express from 'express';

const PORT = process.env.PORT || 3001; 
const app = express();

let data : MySQL;

app.get("/", (req, res) => {
    res.send('Backend en ligne !');
})

app.listen(PORT, () => {
    console.log(`le port de mon backend est le : ${PORT}`);
    data = new MySQL("localhost", "cottages", "tadV-CBbWrCUH43", 3306, "cottages"); 
    
})

function getData(): MySQL{
    return data;
}

function getApp() {
    return app;
}