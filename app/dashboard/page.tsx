'use client'

import TableStriped from "@/components/TableStriped"
import { useAuthStore } from "@/stores/useAuthStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Transaction } from "../api/transactionHistory/route"

const Page = () => {
    const router = useRouter()
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

    if (!isLoggedIn) {
        router.push('/login/')
    }

    const [transactions, setTransactions] = useState(Array<Transaction>)

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await fetch('/api/transactionHistory/')
            const json = await data.json()
            setTransactions(json.transactions)
        }

        fetchTransactions()
    }, [])

    return (
        <div>
            <TableStriped transactions={transactions} />
        </div>
    )
}

export default Page