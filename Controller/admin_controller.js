const express = require('express');
const AdminSchema = require('../Model/Admin');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const JWT_SECRET='Hello World'


const GetAdmin = async (req, res) => {
    res.send('This is GetAdmin API')
}
const Register = async (req, res) => {
    try{
        const { username, phone, email, password } = req.body;
    let admin = await AdminSchema.findOne({ email: email })
    if (admin) {
        return res.json({ success: false, message: 'Email Already Exists' })
    }
    let salt=await bcrypt.genSalt(10)
    let secPass=await bcrypt.hash(password,salt)

    admin = new AdminSchema({ username: username, phone: phone, email: email, password: secPass })
    let savedAdmin = await admin.save()
    res.json({ success: true, savedAdmin })

    }
    catch(err){
        console.log(err)
        res.json({success:false,message:'Internal Server Error'})
    }
}
const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        let admin=await AdminSchema.findOne({email})
        if(!admin){
            return res.json({success:false,message:'Incorrect Email or Password'})
        }
        const ComparePassword=await bcrypt.compare(password,admin.password)
        if(!ComparePassword){
            return res.json({success:false,error:'Incorrect Password'})
        }
        const data={
            admin:{
                id:admin.id
            }
        }
        const authtoken=await jwt.sign(data,JWT_SECRET)
        res.json({success:true,authtoken})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:'Internal Server Error'})
    }
    
}
const DeleteAdmin = async (req, res) => {
    res.send('This is DeleteAdmin API')
}
const UpdateAdmin = async (req, res) => {
    res.send('This is UpdateAdmin API')
}

module.exports = { GetAdmin, Register,Login, DeleteAdmin, UpdateAdmin }