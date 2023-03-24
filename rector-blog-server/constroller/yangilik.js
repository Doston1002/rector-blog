const News = require("../modules/yangilik");
const validate = require("./validate");
const removeMedia = require('../config/fs');

  exports.addNews = async function(req, res) {
    try{
        const { error, value } = validate.postNews.validate({...req.body});
        if(error){
            if(req.file){
                removeMedia(req.file.filename)
            }
            res.status(403).json({status:403, message:String(error["details"][0].message)})
            return
        }
    
        value.photo = `uploads/${req.file.filename}`

        const news = new News(value);
        await news.save();

        res.status(200).json({status:200,success:true, message:`Yangilik qo'shildi`, data: news})
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
    const news = await News.findById({ _id: req.params.id });
    if (!news) {
      res.status(404).json({
        success: false,
        status: 404,
        data: "Yangilik topilmadi",
      });
      return;
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: news,
    });
  } catch (e) {
    res.status(404).json({
      message: " yagilik topilmadi",
    });
  }
};

exports.getAll = async (_, res) => {
  try {
    const news = await News.find().sort({ _id: -1 });
    res.status(200).json({
      success: true,
      status: 200,
      data: news,
    });
  } catch (e) {
    res.status(404).json({
      message: "yagiliklar topilmadi",
    });
  }
};

exports.SearchNews = async (req,res) => {
  try{
    const { lang } = req.headers;
    const {title} = req.params;
    const option = {$regex: title, $options:"i"};
    const obj ={};
    obj[`title_${lang==="ru"? "ru" : lang ==="en" ?"en" :"uz"}`] = option

    const finded = await News.find(obj);
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

exports.updateNews = async (req, res) => {
  try {
    const {error,value} = validate.putNews.validate(req.body);
    if (error) {
      res
        .status(403)
        .json({ status: 403, message: String(error["details"][0].message) });
      return;
    }
    if(req.file){
      value.photo = `uploads/${req.file.filename}`
    }
    const news = await News.findOneAndUpdate({_id: req.params.id},value,{new:true})
    if (!news) {
      res
        .status(403)
        .json({ status: 403, message: "Yangilanishi kerak bo'lgan yangilik topilmadi" });
      return;
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: news,
    });
  } catch (e) {
    res.status(404).json({
      message: "yagilik yangilanmadi",
    });
  }
};

exports.deleteNews = async (req, res) => {
  try {
   const news = await News.findByIdAndDelete({ _id: req.params.id });
    if (!news) {
      res
        .status(403)
        .json({ status: 403, message: "O'chishi kerak bo'lgan yangilik topilmadi" });
      return;
    }
    res.status(200).json({
      success: true,
      status: 200,
      data: [],
    });
  } catch (e) {
    res.status(404).json({
      message: "yagilik ochmadi",
    });
  }
};
