'use client'

import { create } from "zustand";

const useAuthStore = create((set) => ({
    isLoggedIn: false,
    setLoggedIn: () => set(() => ({ isLoggedIn: true }))
}))

export {
    useAuthStore
}