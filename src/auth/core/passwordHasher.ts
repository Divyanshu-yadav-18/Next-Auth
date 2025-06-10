import crypto from "crypto"

export function hashPassword(password: string, salt: string): Promise<string>{
    return new Promise((resolve,rejects)=>{
        crypto.scrypt(password.normalize(), salt, 64, (error, hash)=>{
            if(error) rejects(error)

            resolve(hash.toString("hex").normalize())
        });
    })
    
}
export async function comparePasswords({
    password,
    salt,
    hashedPassword,
}:{
    password:string
    salt:string,
    hashedPassword:string
}){
    const inputHashedPassword = await hashPassword(password,salt)

    return crypto.timingSafeEqual(
        Buffer.from(inputHashedPassword,"hex"),
        Buffer.from(hashedPassword,"hex")

    )
}

export function generateSalt(){
    return crypto.randomBytes(16).toString("hex").normalize()
}
