'use client'

import TableStriped from "@/components/TableStriped"
import { useEffect, useState } from "react"
import { Transaction } from "../api/transactionHistory/route"

const Page = () => {
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
        <div className="">
            <TableStriped transactions={transactions} />
        </div>
    )
}

export default Page