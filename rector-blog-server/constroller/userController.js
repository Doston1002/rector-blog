const User = require("../modules/user");
const validate = require("./validate");
const jwt = require("jsonwebtoken");
const setToken = (payload) =>
  jwt.sign(payload, "MUSAFFO_SKY", {
    expiresIn: "48h", // token 2kundan keyin eskiradi, token eskirgandan keyin admin pashti hech nima qilomeydi yangilab login qivomagancha
  });

exports.register = async (req, res) => {
  try {
    const { error, value } = validate.register.validate(req.body);
    if (error) {
      res
        .status(403)
        .json({ status: 403, message: String(error["details"][0].message) });
      return;
    }
    const auth = new User(value);
    await auth.save();
    res.status(201).json({
      message: "success created",
      data: auth,
      token: setToken({ id: auth._id }),
    });
  } catch (err) {
    res.status(500).json({
      message: "error " + String(err),
    });
  }
};

exports.login = async (req, res) => {
  const { error, value } = validate.login.validate(req.body);
  if (error) {
    res
      .status(403)
      .json({ status: 403, message: String(error["details"][0].message) });
    return;
  }
  const user = await User.findOne({
    phone: value.phone,
    password: value.password,
  }).select(["phone", "password"]);
  if (!user) {
    res.status(404).json({ success: false });
  } else {
    res
      .status(200)
      .json({ success: true, data: user, token: setToken({ id: user._id }) });
  }
};

exports.GetByIdAdmin = async (req, res) => {
  try {
    const auth = await User.findById({ _id: req.params.id });
    res.status(200).json({
      message: "success",
      data: auth,
    });
  } catch (err) {
    res.status(404).json({
      message: "editor not found",
    });
  }
};

exports.GetAdmin = async (req, res) => {
  try {
    const auth = await User.find({ roles: "admin" }).sort({ _id: -1 });
    res.status(200).json({
      message: "success",
      data: auth,
    });
  } catch (err) {
    res.status(404).json({
      message: "auth not found",
    });
  }
};

exports.EditAdmin = async (req, res) => {
  try {
    const {error,value} = validate.editAdmin.validate(req.body);
    if (error) {
        res
          .status(403)
          .json({ status: 403, message: String(error["details"][0].message) });
        return;
      }

    const auth = await User.findByIdAndUpdate(
      req.params.id,
      {value},
      { new: true }
    );

    if (!auth) {
        res
          .status(403)
          .json({ status: 403, message: "Yangilanishi kerak bo'lgan user topilmadi" });
        return;
      }

    res.status(200).json({
      message: "success",
      data: auth,
    });
  } catch (err) {
    res.status(404).json({
      message: "auth not found",
    });
  }
};

exports.DeleteAdmin = async (req, res) => {
  try {
    const auth = await User.findByIdAndDelete({ _id: req.params.id });
    if (!auth) {
        res
          .status(403)
          .json({ status: 403, message: "O'chishi kerak bo'lgan user topilmadi" });
        return;
      }
    res.status(200).json({
      message: "success",
      data: auth,
    });
  } catch (err) {
    res.status(404).json({
      message: "auth not found",
    });
  }
};
