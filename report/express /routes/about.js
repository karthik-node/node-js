var express=require('express');
var router=express.Router();

/*GET home page*/
router.get('/',function(req,res,next){
  res.render('about',{
    title:'about'
    name:'karthik'
  });
});
module.exports=router;
