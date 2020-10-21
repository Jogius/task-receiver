const router = require("express").Router();

const {exec} = require("child_process");

const multer  = require("multer");
const upload = multer({dest: "tmp/"});

router.post("/", upload.any(), (req, res) => {
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
//       exec(`lp tmp/${req.files[i]}`, (err, stdout, stderr) => {
//         if (err) return res.send(`error: ${error.message}`);
//         if (stderr) return res.send(`stderr: ${stderr}`);
//         res.send(`stdout: ${stdout}`);
//       });
    }
  }
  if (req.body.text) {
      console.log(req.body.text);
  }
  console.log(req.files);
  console.log(req.body);
  res.send("Successful");
});

module.exports = router;
