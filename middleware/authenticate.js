

const authenticatedUser = async(req, res, next)=>{
    if(req.user && req.user.isLoggedin){
        next()
    }
    else{
        res.status(401).json({message:"Unauthorized. Please log in"})
    }

}

module.exports = authenticatedUser;


const BlockedUser = async(req, res, next)=>{
    if(req.user && req.user.isBlocked){
        next()
    }
    else{
        res.status(401).json({message:"Unauthorized. This user is temporarily blocked. Contact the admin for more details"})
    }

}

module.exports = BlockedUser;