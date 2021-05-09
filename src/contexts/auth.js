import React, {createContext, useState} from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'


export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    //Cadatrar usuario
    async function signUp(email, password, nome) {
        await auth().createUserWithEmailAndPassword(email, password).then(async(value) => {
            let uid = value.user.uid
            await database().ref('users').child(uid).set({
                saldo: 0,
                nome: nome
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                }
                setUser(data)
            })
        })
    }
    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider