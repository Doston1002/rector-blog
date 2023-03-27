const Application_data = require("../modules/application");
const validate = require("./validate");
const removeMedia = require("../config/fs");
const fs = require("fs");
const path = require("path");

class ApplicationController {
  async Add(req, res) {
    try {
      const { error, value } = validate.postApplicaton.validate({
        ...req.body,
      });
      if (error) {
        res
          .status(403)
          .json({ status: 403, message: String(error["details"][0].message) });
        return;
      }
      const medias = req.files;
      if (medias?.length === 0) {
        const obj = {
          name: value.name,
          tel: value.tel,
          email: value.email,
          body: value.body,
          type: value.type,
          status: "pending",
        };
        const Application = new Application_data(obj);
        await Application.save();
      } else {
        for (let i of medias) {
          const obj = {
            name: value.name,
            tel: value.tel,
            email: value.email,
            body: value.body,
            type: value.type,
            status: "pending",
          };
          obj.file = `uploads/${i.filename}`;
          const Application = new Application_data(obj);
          await Application.save();
        }
      }
      res
        .status(200)
        .json({ status: 200, success: true, message: `Media qo'shildi` });
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ status: 500, message: "invalid request", success: false });
    }
  }
  async Edit(req, res) {
    try {
      const { error, value } = validate.postApplicaton.validate({
        ...req.body,
      });
      if (error) {
        if (req.file) {
          removeMedia(req.file.filename);
        }
        res
          .status(403)
          .json({ status: 403, message: String(error["details"][0].message) });
        return;
      }

      if (req.file) {
        value.file = `uploads/${req.file.filename}`;
      }

      const updated = await Application_data.findByIdAndUpdate(
        req.params.id,
        { ...value },
        { new: true }
      );

      if (!updated) {
        res.status(404).json({
          status: 404,
          message: "berilgan id bo`yicha data topilmadi",
          success: false,
        });
        return;
      }

      res.status(200).json({
        status: 200,
        success: true,
        message: `media yangilandi`,
        data: updated,
      });
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ status: 500, message: "invalid request", success: false });
    }
  }
  async Get(_, res) {
    try {
      const Media = await Application_data.find();
      console.log(Media);
      res.status(200).json({
        status: 200,
        success: true,
        message: `Yaxshi uka`,
        data: Media,
      });
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ status: 500, message: "invalid request", success: false });
    }
  }
  async GetAll(_, res) {
    try {
      const Media = fs.readdirSync(path.join(__dirname, "..", "uploads"));

      res.status(200).json({
        status: 200,
        success: true,
        message: `Yaxshi uka`,
        data: Media,
      });
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ status: 500, message: "invalid request", success: false });
    }
  }
  async GetById(req, res) {
    try {
      const Media = await Application_data.findOne({ _id: req.params.id });

      if (!Media) {
        res
          .status(404)
          .json({ status: 404, message: "Media topilmadi", success: false });
        return;
      }
      res.status(200).json({
        status: 200,
        success: true,
        message: `Yaxshi uka`,
        data: Media,
      });
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ status: 500, message: "invalid request", success: false });
    }
  }
  async Delete(req, res) {
    try {
      const Media = await Application_data.findByIdAndDelete(req.params.id);
      if (!Media) {
        res.status(404).json({ status: 404, message: "Media topilmadi :(" });
        return;
      }

      res.status(200).json({
        status: 200,
        success: true,
        message: `Yaxshi  delet qilindi`,
        data: Media,
      });
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ status: 500, message: "invalid request", success: false });
    }
  }
  async Download(req, res) {
    try {
      const { file } = req.params;

      const foundedFile = fs.existsSync(
        path.join(__dirname, "..", "uploads", file)
      );

      if (!foundedFile) {
        res.status(404).json({
          status: 404,
          message: "Yuklab olinishi kerak bo`lgan fayl bazada topilmadi",
          success: false,
        });
        return;
      }

      res.download(path.join(__dirname, "..", "uploads", file));
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ status: 500, message: "invalid request", success: false });
    }
  }
}

module.exports = new ApplicationController();
