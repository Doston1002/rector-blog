const Photos = require("../modules/photo");
const validate = require("./validate");
const removeMedia = require('../config/fs');

  exports.addPhoto = async function(req, res) {
    try{
        const { error, value } = validate.postPhoto.validate({...req.body});
        if(error){
            if(req.file){
                removeMedia(req.file.filename)
            }
            res.status(403).json({status:403, message:String(error["details"][0].message)})
            return
        }
    
        value.photo = `uploads/${req.file.filename}`

        const Photo = new Photos(value);
        await Photo.save();

        res.status(200).json({status:200,success:true, message:`photo qo'shildi`, data: Photo})
    }
    catch(e){
        if(req.file){
            removeMedia(req.file.filename)
        }
        console.log('hatoli '+e);
        res.status(500).json({status:500, message:'hato '+e, success:false});
    }
}

exports.getById = async (req, res) => {
  try {
    const Photo = await Photos.findById({ _id: req.params.id });
    if (!Photo) {
      res.status(404).json({
        success: false,
        status: 404,
        data: "photo topilmadi",
      });
      return;
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: Photo,
    });
  } catch (e) {
    res.status(404).json({
      message: " photo topilmadi",
    });
  }
};

exports.getAll = async (_, res) => {
  try {
    const Photo = await Photos.find().sort({ _id: -1 });
    res.status(200).json({
      success: true,
      status: 200,
      data: Photo,
    });
  } catch (e) {
    res.status(404).json({
      message: "yagiliklar topilmadi",
    });
  }
};

exports.SearchPhoto = async (req,res) => {
  try{
    const { lang } = req.headers;
    const {title} = req.params;
    const option = {$regex: title, $options:"i"};
    const obj ={};
    obj[`title_${lang==="ru"? "ru" : lang ==="en" ?"en" :"uz"}`] = option

    const finded = await Photos.find(obj);
    if(finded.length===0){
      res.status(404).json({status:404, message:"topilmadi"});
      return
    }
    res.send({status:200,message:"finded", data: finded})
  }
  catch{
    res.status(500).json({status:"500",message:"something wrong"})
  }
}

exports.updatePhoto = async (req, res) => {
  try {
    const {error,value} = validate.putPhoto.validate(req.body);
    if (error) {
      res
        .status(403)
        .json({ status: 403, message: String(error["details"][0].message) });
      return;
    }
    if(req.file){
      value.photo = `uploads/${req.file.filename}`
    }
    const Photo = await Photos.findOneAndUpdate({_id: req.params.id},value,{new:true})
    if (!Photo) {
      res
        .status(403)
        .json({ status: 403, message: "Yangilanishi kerak bo'lgan photo topilmadi" });
      return;
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: Photo,
    });
  } catch (e) {
    res.status(404).json({
      message: "photo yangilanmadi",
    });
  }
};

exports.deletePhoto = async (req, res) => {
  try {
   const Photo = await Photos.findByIdAndDelete({ _id: req.params.id });
    if (!Photo) {
      res
        .status(403)
        .json({ status: 403, message: "O'chishi kerak bo'lgan photo topilmadi" });
      return;
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: Photo,
    });
  } catch (e) {
    res.status(404).json({
      message: "photo o'chmadi",
    });
  }
};
