const {Router} =require ('express');
const router =Router();
const fetch= require('node-fetch');
router.get('/',async (req,res)=>{
    const response = await fetch('https://torre.bio/api/bios/$username');
    const users= await response.json();
    res.json(users);
});

module.exports= router;
