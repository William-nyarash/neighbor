const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors())
 const upload = multer({dest: 'backen/images/'});
// login
app.get('/getin',async(req,res)=>{

});

// register
app.post('/registration',async (req,res)=>{
    console.log(res.body);
 res.json("HUrray");
});

// reset account
app.get('/reset',async (req,res)=>{

    res.json();
});

// upload a product
app.post('/uploads',upload.single('file'),async (req,res)=>{
res.send(`file uploaded successfully:${req.file.originalame}`)
});
// products
app.get('/product/listed',async (req,res)=>{

});

// full product detatils
app.get('/select/product/:id',async (req,res)=>{
    // const myProduct = Product.findById(req.params.id)
    //     .then()
    res.json(productIs)
});
const PORT = 5093;

app.listen(PORT,()=>{
    console.log(`server is running`);
});
