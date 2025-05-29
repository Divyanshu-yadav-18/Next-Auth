import crypto from "crypto"

export function hashPassword(password: string, salt: string): Promise<string>{
    return new Promise((resolve,rejects)=>{
        crypto.scrypt(password.normalize(), salt, 64, (error, hash)=>{
            if(error) rejects(error)

            resolve(hash.toString("hex").normalize())
        });
    })
    
}

export function generateSalt(){
    return crypto.randomBytes(16).toString("hex").normalize()
}