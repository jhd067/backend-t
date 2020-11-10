const {Router}= require('express');
const router = Router();

router.get('/',(req,rest)=>{

    rest.status(400).json ({
        name: 'julian',
        apellido: 'Holguin Diaz'
    })    
})
module.exports = router;