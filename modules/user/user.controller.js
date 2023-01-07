const userModel = require("../../DB/model/user.model");

//get all users function 
const getAllUsers = async (req, res) => {
  //findAll is a function that does the same as select function
  const allUsers = await userModel.findAll({
    // we add the attributes prop if i want to return specific data
    attributes: ["name", "email"],
  });
  res.json({ message: "get all users", allUsers });
};

//create new user function 
const signup = async (req, res) => {
  try {
    // data sent from the postman

    const { name, email, password, phone } = req.body;
    //using sequelize function for inserting user-> insert into users values

    let user = await userModel.create({
      name: name,
      email: email,
      password: password,
      phone: phone,
    });

    res.json({ message: " user added ", user });
  } catch (error) {
    let message = error.errors[0].message;
    res.json({ message });
  }
};

// get user details 
const getUserDetails = async (req, res) => {
  //to get the id from url
  const { id } = req.params;
  // res.json({id})
  //select * from user where id=$id
  const user = await userModel.findAll({
    where: {
      id:id
    }
  })
  res.json({message: 'success ',user})
// res.json({message:'success', user})

}

//login function
const login =async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({
      where: {
        //email in database == email from form "frontend " currently postman 
        email: email,
        password:password
      }
     })
    
    if (user) {
      res.json({message:'success', user})
    }
    else {
      res.json({message:'invalid data'})
    }
  }
  catch (error) {
    res.json({ messsage: 'fail', error });
   
  }

  // let user=
}

module.exports = { getAllUsers, signup,getUserDetails,login };
