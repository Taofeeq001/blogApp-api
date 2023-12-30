const profile = require("../Model/Profile")
const auth = require("../Verificationtoken")

const createProfile = async (req, res)=>{

    try {

        auth(req, res, async ()=>{
            const user = req.user
            if(!user.id){
                return res.status(401).json({message:"Unathorized! You must be logged in..."})
            }
            
            
            const {firstName, lastName, img, idType,} = req.body;

            if(!firstName || !lastName || !idType){
                return res.status(404).json({message:"Ensure you fill all the required fields"})
            }

            const newProfile = new profile({
                firstName,
                lastName,
                img,
                idType,
                author:user.id
            })
            await newProfile.save()
            console.log(newProfile)
            return res.status(201).json({message:"Profile uploaded successfully"})
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"server Error"})
    }
}

module.exports = createProfile