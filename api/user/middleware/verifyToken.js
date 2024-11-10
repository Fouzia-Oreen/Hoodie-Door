import jwt from 'jsonwebtoken';

// verify token
export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.token;
       // console.log("verify token :", token)
       if (!token) {
        return res.status(401).send({
            message : "Invalid Token"
        })
       }
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       if (!decoded) {
        return res.status(401).send({
            message : "Invalid Token or not valid"
        })
       }
       req.userId = decoded.userId;
       req.role= decoded.role;
       next()
    } catch (error) {
        console.log("Error while verifying token", error);
        res.status(401).send({
            message : "Error while verifying token"
        })
    }
}