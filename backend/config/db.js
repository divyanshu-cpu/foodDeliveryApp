import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://divyanshuchoudhary3:Backstreet02@cluster0.i0ddi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}