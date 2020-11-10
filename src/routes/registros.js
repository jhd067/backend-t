const {Router} =require ('express');
const router =Router();
const _ = require('underscore');
const registros= require('../registro.json');



router.get('/',(req,res)=>{
   //console.log(registros)
   res.json(registros);
});
router.post('/',(req, res) => {
    console.log(req.body);
    const { name,edad}= req.body;
    if ( name && edad){
        const id= registros.length+1;
        const nuevoregistro={...req.body,id}
        registros.push(nuevoregistro);
        console.log(nuevoregistro);
        res.json(registros);
    }
    else{
       // res.send('falta un parametro');
       res.status(500).json({error:'there was an error'});
    }
    
  

});
router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    
    _ .each(registros, (registro, i) => {
        if(registro.id == id){
            registros.splice(i, 1);
        }
    })

    res.send(registros);
});

router.put('/:id',(req,res)=>{
    const { id } = req.params;
    const { name,edad}= req.body;
    if ( name && edad){
    _ .each(registros, (registro, i) => {
        if(registro.id == id){
            registro.name= name;
            registro.edad= edad;
           // registros.splice(i, 1);
        }
    });
    res.json(registros)
    }else{
        res.status(500).json({error:'there was an error'});
    }
    
})



module.exports = router;