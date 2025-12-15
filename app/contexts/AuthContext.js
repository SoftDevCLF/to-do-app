"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {
    GithubAuthProvider,
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGithub = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            if (error.code !== "auth/cancelled-popup-request") {
                console.error(error);
            }
        }
    };

    const loginWithFacebook = async () => {
        try {
            const provider = new FacebookAuthProvider();
            provider.addScope("email");

            await signInWithPopup(auth, provider);
        } catch (error) {
            if (error.code !== "auth/cancelled-popup-request") {
                console.error(error);
            }
        }
    };

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            if (error.code !== "auth/cancelled-popup-request") {
                console.error(error);
            }
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loginWithGithub, loginWithFacebook, loginWithGoogle, logout }}>
            {!loading && children}
        </AuthContext.Provider>
        );
    }

    export function useAuth() {
        return useContext(AuthContext);
    }
