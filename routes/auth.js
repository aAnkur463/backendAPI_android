const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/authController.js");

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   let user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send("Invalid email or password.");

//   const validPassword = await bcrypt.compare(req.body.password, user.password);
//   if (!validPassword) return res.status(400).send("Invalid email or password.");

//   const token = user.generateAuthToken();
//   res.json({
//     token: token,
//     user: user,
//   });
// });

router.route("/").post(authController);

module.exports = router;
