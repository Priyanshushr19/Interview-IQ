import admin from "firebase-admin"; // 🔥 ADD THIS
import genToken from "../config/token.js";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;

    // 🔥 VERIFY FIREBASE TOKEN
    const decoded = await admin.auth().verifyIdToken(token);

    const email = decoded.email;
    const name = decoded.name;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    let jwtToken = await genToken(user._id);

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: false,   // ⚠️ LOCALHOST → false
      sameSite: "Lax", // ⚠️ LOCALHOST → Lax
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `Google auth error ${error}` });
  }
};

// import genToken from "../config/token.js"
// import User from "../models/user.model.js"


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

// export const logOut = async (req,res) => {
//     try {
//         await res.clearCookie("token")
//         return res.status(200).json({message:"LogOut Successfully"})
//     } catch (error) {
//          return res.status(500).json({message:`Logout error ${error}`})
//     }
    
// }
