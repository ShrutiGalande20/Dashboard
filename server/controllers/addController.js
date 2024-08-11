const Admission = require("../model/admisson");


exports.createAdmssion = async (req, res) => {
  try {
    const { fullName, dob,email, motherName, fatherName, gender, address, nationality, mobile,admissionForm } = req.body;

    const addData = new Admission({
      fullName, dob,email, motherName, fatherName, gender, address, nationality, mobile,admissionForm
    });

    await addData.save();
    res.status(201).json(addData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAdmission = async(req, res) => {
try {
  
const getdata =  await Admission.find(req.query);

if(!getdata || getdata.length ===0){
  return res.status(2001).json({error: "user not found"})
}
res.json(getdata)

} catch (error) {
  res.status(400).json({ error: error.message });

  
}


}

