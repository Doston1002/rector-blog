const jwt = require('jsonwebtoken');
const users = require("../modules/user");

class middleware{
    async checkToken (req, res, next) {
        try{
            const { token } = req.headers; 
            if(!token){
                return res.status(401).json({status:401, success: false,token: false, message:'Token majburiy'})
            }
            
            jwt.verify(token, 'MUSAFFO_SKY', async (err,decode) =>{
                if(err instanceof jwt.JsonWebTokenError || err instanceof jwt.TokenExpiredError){
                    return res.status(498).json({status:498, success: false, token: false, message:'Yaroqsiz token'})
                }
                
                const foundUser = await users.findById({_id:decode.id});

                if(!foundUser){
                    res.status(498).json({status:498, success: false, token: false, message:'Token bazada topilmadi :('});
                    return
                }
             
                req.user = foundUser

                next();
            })
        }
        catch{
            res.status(500).json({status:500, success: false, token: false, message: 'invalid request'})
            return
        }
    }

    async checkContentType (req, res, next) {
        try{
            const contentType = () =>{
                return req.headers['content-type'] === 'application/json'
            }
            if(!contentType()){
                return res.status(500).json({status:500, success: false, message:'JSON tipida so`rov yuborilishi shart'})
            }   
            next();
        }
        catch{
            res.status(500).json({status:500, success: false, token: false, message: 'invalid request'})
            return
        }
    }

    async checkParamsId (req, res, next) {
        try{
            if(typeof req.params.id !== 'string' || req.params.id.length !== 24){
                res.status(500).json({status:500, success: false, message:'Id xato'})
                return
            }   
            next();
        }
        catch{
            res.status(500).json({status:500, success: false, token: false, message: 'invalid request'})
            return
        }
    }

    async checkReferenceId(req, res, next){
        try{
            const func = value =>{
                let count = 0;
                for(let i of ['fakultet_id', 'kafedra_id','bolim_id','markaz_id','rektorat_id']){
                    if(Object.keys(value).find(a => a === i)){
                        count++
                    }
                }
                return count;
                }
                if(func(req.body) <1){
                    res.status(403).json({status:403, success: false, message: 'Faoliyat qo`shish uchun hatyabi bitta reference id ber, qayoga qo`shey u becharani :('})
                    return
                }
                if(func(req.body) > 1){
                    res.status(403).json({status:403, success: false, message: 'Faoliyat qo`shish uchun faqat bitta reference id ber, qaysi birini qo`shey bulani :('})
                    return
                }
                next()
        }
        catch{
            res.status(500).json({status:500, success: false,  message: 'invalid request'})
            return
        }
    }

    async checkReferenceIdCount(req, res, next){
        try{
            const func = value =>{
                let count = 0;
                for(let i of ['fakultet_id', 'kafedra_id','bolim_id','markaz_id','rektorat_id']){
                    if(Object.keys(value).find(a => a === i)){
                        count++
                    }
                }
                return count;
                }
                if(func(req.body) > 1){
                    res.status(403).json({status:403, success: false, message: 'Faoliyat qo`shish uchun reference id bittadan ko`p bo`lishi mumkin emas!'})
                    return
                }
                
                next()
        }
        catch{
            res.status(500).json({status:500, success: false,  message: 'invalid request'})
            return
        }
    }
}

module.exports = new middleware;