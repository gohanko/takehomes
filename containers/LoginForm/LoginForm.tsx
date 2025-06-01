'use client'

import { useState } from "react"
import LoginFormInput from "./LoginFormInput"
import LoginFormText from "./LoginFormText"
import { useAuthStore } from "@/stores/useAuthStore"
import { useRouter } from "next/navigation"
import { hashedPassword } from "@/utility/hashedPassword"

const LoginForm = () => {
    const [steps, setSteps] = useState(0)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [secureWord, setSecureWord] = useState('')

    const router = useRouter()
    
    const onCompleteUsername = async () => {
        if (!username) {
            return
        }

        let data = await fetch('/api/getSecureWord')
        const newSecureWord = await data.json()

        if (newSecureWord) {
            setSecureWord(newSecureWord.secureWord)
        }

        setSteps(steps + 1)
    }

    const setLoggedIn = useAuthStore((state) => state.setLoggedIn) 
    const onCompletePassword = async () => {
        if (!password) {
            return
        }

        const encryptedPassword = hashedPassword(password, secureWord)

        const response = await fetch('/api/login/', {
            method: "post",
            body: JSON.stringify({
                username: username,
                password: encryptedPassword,
            })
        })

        if (response.status == 200) {
            setLoggedIn()
            setSteps(steps + 1)
        }
    }

    const loginFlow = [
        {
            component: <LoginFormInput 
                title="Enter Username"
                inputType="text"
                input={username}
                onInput={(input: string) => setUsername(input)}
            />,
            onNext: onCompleteUsername
        },
        {
            component: <LoginFormText
                title="Secure Word"
                text={`Your secure word is ${secureWord}`}
            />,
            onNext: () => { setSteps(steps + 1) }
        },
        {
            component: <LoginFormInput 
                title="Enter Password"
                inputType="password"
                input={password}
                onInput={(input: string) => setPassword(input)}
            />,
            onNext: onCompletePassword
        },
        {
            component: <LoginFormText
                title="Login Successful"
                text="You've successfully logged in!"
            />,
            onNext: () => {
                router.push('/dashboard/')
            }
        }
    ]

    const onClickNext = () => {
        const onNext = loginFlow[steps].onNext
        onNext()
    }

    return (
        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 min-w-1/2 p-8">
            { loginFlow[steps].component }
            
            <div className="flex justify-end">
                <button onClick={onClickNext} className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Next ({steps + 1}/{loginFlow.length})</span>
                </button>
            </div>
        </div>
    )
}

export default LoginForm