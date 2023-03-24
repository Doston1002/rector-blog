const Media_data = require('../modules/media')
const validate = require("./validate");
const removeMedia = require('../config/fs');
const fs =require('fs');
const path = require('path')

class MediaController{
    async Add(req, res) {
        try{
            const { error, value } = validate.postMediaValidation.validate({...req.body});
            if(error){
                res.status(403).json({status:403, message:String(error["details"][0].message)})
                return
            }
            const medias = req.files;
            for(let i of medias){
                const obj = {name: value.name}
                obj.link = `uploads/${i.filename}`
                const Media = new Media_data(obj);
                await Media.save();
            }


            res.status(200).json({status:200,success:true, message:`Media qo'shildi`})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
    async Edit(req, res) {
        try{
            const { error, value } = validate.postMediaValidation.validate({...req.body});
            if(error){
                if(req.file){
                    removeMedia(req.file.filename);
                }
                res.status(403).json({status:403, message:String(error["details"][0].message)})
                return
            }

            if(req.file){
                value.link = `uploads/${req.file.filename}`
            }

            const updated = await Media_data.findByIdAndUpdate(req.params.id, {...value}, {new:true});

            if(!updated){
                res.status(404).json({status:404, message:'berilgan id bo`yicha data topilmadi', success:false});
                return
            }

            res.status(200).json({status:200,success:true, message:`media yangilandi`, data: updated})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
    async Get(_, res) {
        try{
            const Media = await Media_data.find().sort({_id:-1});

            res.status(200).json({status:200,success:true, message:`Yaxshi uka`, data: Media})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
    async GetAll(_, res) {
        try{
            const Media = fs.readdirSync(path.join(__dirname, '..','uploads'))

            res.status(200).json({status:200,success:true, message:`Yaxshi uka`, data: Media})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
    async GetById(req, res) {
        try{
            const Media = await Media_data.findOne({_id:req.params.id});

            if(!Media){
                res.status(404).json({status:404, message:'Media topilmadi', success:false});
                return
            }
            res.status(200).json({status:200,success:true, message:`Yaxshi uka`, data: Media})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
    async Delete(req, res) {
        try{            
            const Media = await Media_data.findByIdAndDelete(req.params.id);
            if(!Media){
                res.status(404).json({status:404, message:'Media topilmadi :('});
                return
            }
 
            res.status(200).json({status:200,success:true, message:`Yaxshi  delet qilindi`, data: Media})
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
    async Download(req, res) {
        try{            
            const {file} = req.params;

            const foundedFile = fs.existsSync(path.join(__dirname, '..','uploads', file));

            if(!foundedFile){
                res.status(404).json({status:404, message:'Yuklab olinishi kerak bo`lgan fayl bazada topilmadi', success:false});
                return
            }

            res.download(path.join(__dirname,'..', 'uploads', file))
        }
        catch(e){
            console.log(e);
            res.status(500).json({status:500, message:'invalid request', success:false});
        }
    }
}

module.exports = new MediaController;