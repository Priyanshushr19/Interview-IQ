import genToken from "../config/token.js"
import User from "../models/user.model.js"

export const googleAuth = async (req, res) => {
  try {
    console.log("BODY:", req.body); // 🔥 MUST ADD

    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email missing" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);

  } catch (error) {
    console.log("ERROR:", error); // 🔥 THIS WILL REVEAL EVERYTHING
    return res.status(500).json({ message: "Google auth error" });
  }
};

// export const googleAuth = async (req,res) => {
//     try {
//         const {name , email} = req.body
//         let user = await User.findOne({email})
//         if(!user){
//             user = await User.create({
//                 name , 
//                 email
//             })
//         }
//         let token = await genToken(user._id)
//         // res.cookie("token" , token , {
//         //     http:true,
//         //     secure:false,
//         //     sameSite:"strict",
//         //     maxAge:7 * 24 * 60 * 60 * 1000
//         // })
//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: true,          // 🔥 REQUIRED on Render (HTTPS)
//             sameSite: "None",      // 🔥 REQUIRED for cross-origin
//             path: "/",             // 🔥 IMPORTANT
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         });

//         return res.status(200).json(user)



//     } catch (error) {
//         return res.status(500).json({message:`Google auth error ${error}`})
//     }
    
// }

export const logOut = async (req,res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
         return res.status(500).json({message:`Logout error ${error}`})
    }
    
}
