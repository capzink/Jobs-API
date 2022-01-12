const register = async (req,res)=>{
    try {
        res.send('register user')
        
    } catch (error) {
        res.status(400).send('cant resgiter user')
        
    }
}

const login = async (req, res) => {
  try {
    res.send("user login");
  } catch (error) {
    res.status(400).send("cant login");
  }
};

module.exports = {
  register,
  login,
};