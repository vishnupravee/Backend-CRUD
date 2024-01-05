
const express=require('express')
const Schemafunction = require('../controler/Fld1')
const getfunction = require('../controler/Getname')
const project=require('../tocken varivication/fld1')
const middleware=[project]
const router=express.Router()



// router.route('/data' ).post(Schemafunction)
// // router.route('/bata/:id').get(getfunction)
router.route('/bata/:Name').get(getfunction)
router.route('/jwt').post(middleware,Schemafunction)



module.exports=router