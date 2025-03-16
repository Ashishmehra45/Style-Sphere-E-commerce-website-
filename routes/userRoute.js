const express =require('express')
const router = express.Router()

router.get('/' ,(req,res)=>{
    res.send('hyyy hy')
})


module.exports = router