import {createContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../auth/firebase-config'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => { //onAuthstChed metodu hali hazırda en son login olmuş user ı yakalar.
            setCurrentUser(currentUser)
        })
    },[])

    return(
        <AuthContext.Provider value={{currentUser}}>
            {props.children}
        </AuthContext.Provider>
    )


}

export default AuthContextProvider;



