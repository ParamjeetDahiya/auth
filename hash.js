const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
// bcrypt.genSalt(10,(err,salt)=>{
//     if(err) return next(err);
//     bcrypt.hash('password',salt,(err,hash)=>{
//         if(err) return next(err)
//         console.log(hash);
        
//     })
    
// })

const id=100;
const secret='supersecret';
const receivedToken='eyJhbGciOiJIUzI1NiJ9.MTAw._p4CTP9MejT8kntvqaJI0HR_jo2DLfuLaRqCIahBf50';


const token=jwt.sign(id,secret);
const decodeToken=jwt.verify(receivedToken,secret)

console.log(decodeToken);
