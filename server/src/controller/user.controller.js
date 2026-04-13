import User from "../models/user.model";

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(email === User.findOne({email: email})){
                res.status(400).json({ message: "Email already exists" });
                return;
        }
        
    } catch (error) {
        console.log(error)
        
    }
}
