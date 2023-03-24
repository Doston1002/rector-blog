const validate = require("./validate");
const removeMedia = require('../../config/fs');
const banner = require('./model')

class BannerController{
    async Add(req,res) {
        try{
            if(req.file && req.file.mimetype.split('/')[0]!=='image'){
                removeMedia(req.file.filename)
                res.status(403).json({status:403, message:'faqat rasm yuklay olasiz'});
                return
            }

            const {error, value} = validate.post.validate(req.body)
            if(error){
                if(req.file){
                    removeMedia(req.file.filename)
                }
                res.status(403).json({status:403, message: String(error["details"][0].message), success:false});
                return
            }

            if(!req.file){
                res.status(403).json({status:403, message:`Banner uchun rasm qo'yilishi majburiy`, success:false});
                return
            }
            value.banner_img = `uploads/${req.file.filename}`

            const newbanner = new banner(value);
            await newbanner.save();

            res.status(200).json({ status:200, success:true, data: newbanner, message:`Muvaffaqiyatli saqlandi`})
        }
        catch(e){
            if(req.file){
                removeMedia(req.file.filename)
            }
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
    async Edit(req,res) {
        try{
            
            if(req.file && req.file.mimetype.split('/')[0]!=='image'){
                removeMedia(req.file.filename)
                res.status(403).json({status:403, message:'faqat rasm yuklay olasiz'});
                return
            }

            const {error, value} = validate.post.validate(req.body);
            if(error){
                if(req.file){
                    removeMedia(req.file.filename)
                }
                res.status(403).json({status:403, message: String(error["details"][0].message), success:false});
                return
            }

            const oldbanner = await banner.findOne({_id: req.params.id});
            if(!oldbanner){
                if(req.file){
                    removeMedia(req.file.filename)
                }
                res.status(404).json({status:404, message:`Tahrirlamoqchi bo'lgan banner topilmadi :(`, success:false});
                return  
            }

            if(req.file){
                value.banner_img = `uploads/${req.file.filename}` 
            }

            const updated = await banner.findByIdAndUpdate(req.params.id, value, {new:true});

            res.status(200).json({ status:200, success:true, data: updated, message:`Muvaffaqiyatli yangilandi`})
        }
        catch(e){
            if(req.file){
                removeMedia(req.file.filename)
            }
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }

    async Get(_, res){
        try{
            const  Banners = await banner.find().sort({_id:-1});
            res.status(200).json({status:200, success:true, message:`yaxshi uka`, data: Banners})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }

    async GetById(req, res){
        try{
            const Banners = await banner.findOne({_id: req.params.id});

            if(!Banners){
                res.status(404).json({status:404, message:'topilmadi', success:false});
                return
            }
            res.status(200).json({status:200,  success:true, message:`yaxshi uka`, data:Banners})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }

    async Delete(req, res){
        try{
            const Banners = await banner.findByIdAndDelete(req.params.id);

            if(!Banners){
                res.status(404).json({status:404, message:'topilmadi', success:false});
                return
            }
            res.status(200).json({status:200, message:`yaxshi o'chirildi`, data:Banners})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
}

module.exports = new BannerController;