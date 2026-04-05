const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  // 1. Get the Authorization header
  const authHeader = req.headers["authorization"];
  
  // 2. Extract token (format: "Bearer TOKEN_HERE")
  const token = authHeader && authHeader.split(" ")[1];
  
  // 3. If no token, return 401
  if (!token) {
    return res.status(401).json({ 
      message: "Access denied. No token provided." 
    });
  }
  
  // 4. Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ 
        message: "Invalid or expired token." 
      });
    }
    
    // 5. Token is valid – attach admin ID to request object
    req.adminId = decoded.id;
    
    // 6. Continue to the next middleware/route handler
    next();
  });
}

module.exports = authenticateToken;