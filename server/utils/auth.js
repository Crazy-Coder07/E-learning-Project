import bcrypt from 'bcrypt'

// this function will hash the plain password received from user
export const hashPassword =(password)=>{
  return new Promise((resolve,reject)=>{
      bcrypt.genSalt(12,(err,salt)=>{
         if(err){
             reject(err);
          }
         bcrypt.hash(password,salt,(err,hash)=>{
             if(err){
               reject(err);
              }
              resolve(hash)
            });
        });
    });
};

// this function will compare the plain password from user and hashed password from database
export const comparePassword=(password,hashed)=>{
      return bcrypt.compare(password,hashed)
}