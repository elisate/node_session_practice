import Contact from "../model/contactModel.js";

export const createContact= async(req,res)=>{
    try {
        const {fullnames,email,subject,message}=req.body;
        if(!fullnames || !email || !subject || !message){
            return res.status(400).json({message:"All fields are required"})
        }
        const contact= await Contact.create({
            fullnames,email,subject,message
        })
        res.status(201).json({message:"Contact created successfully",contact})
    } catch (error) {
        res.status(500).json({message:"Server error",error:error.message})
    }
}       


export const getAllContacts= async(req,res)=>{
    try {
        const contacts= await Contact.find();
        res.status(200).json({message:"Contacts retrieved successfully",contacts})
    } catch (error) {
        res.status(500).json({message:"Server error",error:error.message})
    }
}

export const getContactById= async(req,res)=>{
    try {
        const {id}= req.params;
        const contact= await Contact.findById(id);
        if(!contact){
            return res.status(404).json({message:"Contact not found"})
        }
        res.status(200).json({message:"Contact retrieved successfully",contact})
    } catch (error) {
        res.status(500).json({message:"Server error",error:error.message})
    }
}

