import express from "express"
import {createContact,getAllContacts,getContactById} from "../controllers/contactController.js";
const contactRouter= express();

contactRouter.post("/createContact",createContact)
contactRouter.get("/getAllContacts",getAllContacts)
contactRouter.get("/getContactById/:id",getContactById)
export default contactRouter;