import React, {createContext, useState, useEffect} from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [user, setUser] = useState(null) //autenticacao do login

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if(storageUser) {
                setUser(JSON.parse(storageUser))
            }
        }
        loadStorage()
    }, [])

    //Logar usuario
    async function signIn(email, password){
        await auth().signInWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                  uid: uid,
                  nome: snapshot.val().nome,
                  email: value.user.email,
                };

                setUser(data)
                storageUser(data)
                
            })
        })
        .catch((error)=> {
            alert(error.code)
        })
    }

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
                storageUser(data)
            })
        })
        .catch((error) => {alert(error.code)})
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider