const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require ('../errors')


const register = async (req,res)=>{
    const {name, email, password} =req.body
    //if(!name || !email || !password){
       // throw new BadRequestError('Please provide email, name, password')
    //}
    const user = await User.create({ ...req.body }); //allows monogoose to do the validation
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}

const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestError('Please provide email, name, password')
    }

    const user = await User.findOne({email})
    //compare password
    if(!user){
        throw new UnauthenticatedError('invalid credentials')
    }
    const token =user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name},token})
    
};

module.exports = {
  register,
  login,
};