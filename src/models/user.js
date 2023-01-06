const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    mauser:{
        type: String,
        default: "KH0"
    },
    sdt:{
        type: String,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        validate(value){
            if(value.toLowerCase().includes('password'))
            {
                throw new Error('Password can not contain "password"')
            }
        }

    },
    verifyCode:{
        type: String,
        trim: true
    }
    ,
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }],
})

userSchema.methods.generateAuToken= async function(){
    const user = this
    const token=jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.methods.toJSON=function(){
    const user=this
    const userObject=user.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.verifyCode
    return userObject
}
userSchema.statics.findByCredentials=async(email,password)=>{
    const user=await User.findOne({email})
    if(!user){
        throw new Error('Unable to login') 
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch)
    {
        throw new Error('Unable to login') 
    }
    return user
}
userSchema.pre('save', async function(next){
    const user=this
    if(user.isModified('password')){
        user.password= await bcrypt.hash(user.password, 8)
    }
    next()
})
const User=mongoose.model('User',userSchema)
module.exports = User
