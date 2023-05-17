const express = require('express');
const UserSchema = require('../Model/User');
const AdminUser=require('../Model/Admin');


const GetUser = async (req, res) => {
    res.send('This is GetUser API')
}
const Insert = async (req, res) => {
    try {
        const { name, phone, email, address } = req.body;
        let user = await UserSchema.findOne({ email: email })
        if (user) {
            return res.json({ succuss: 'false', Message: 'Email Already Exists' })
        }
        user = new UserSchema({ name: name, phone: phone, email: email, address: address })
        let savedUser = await user.save()
        res.json({ succuss: true, savedUser })
    }
    catch (err) {
        console.log(err, 'Internal Server Error')

    }
}
const Delete = async (req, res) => {
    res.send('This is Delete API')
}
const Update = async (req, res) => {
    res.send('This is Update API')
}

module.exports = { GetUser, Insert, Delete, Update }