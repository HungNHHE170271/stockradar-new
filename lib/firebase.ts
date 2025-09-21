// /lib/firebase.ts
import { initializeApp, getApp, getApps } from "firebase/app"
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA51v4R1vlHOwSPxkefsE7yyZxEvb5qXvQ",
  authDomain: "exe201-gr6.firebaseapp.com",
  projectId: "exe201-gr6",
  storageBucket: "exe201-gr6.firebasestorage.app",
  messagingSenderId: "850348804723",
  appId: "1:850348804723:web:bdf3aa06dd72b291387806",
  measurementId: "G-SW8L6G0LNC"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)

// Lưu phiên đăng nhập ở localStorage (không bị mất khi reload)
setPersistence(auth, browserLocalPersistence)

// Providers
export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })

export const facebookProvider = new FacebookAuthProvider() // bạn đang dùng ở UI
