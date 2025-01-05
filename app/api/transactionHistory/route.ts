import { NextApiRequest, NextApiResponse } from "next";


type TransactionAmount = {
    amount: Number,
    currencyType: String,
}

enum TransactionType {
    DUITNOW = "DuitNow"
}

type TransactionRecipient = {
    name: String,
    reference: String,
}

type Transaction = {
    date: String,
    referenceId: String,
    to: TransactionRecipient,
    type: TransactionType,
    amount: TransactionAmount
}

const GET = (
) => {
    const transactionList: Array<Transaction> = [
        {
            date: "",
            referenceId: "",
            to: {
                name: "Transaction SDN. BHD.",
                reference: "Reference for you!",
            },
            type: TransactionType.DUITNOW,
            amount: {
                amount: 1200,
                currencyType: "MYR"
            }
        }
    ]

    return Response.json({
        transactions: transactionList
    })
}

export {
    GET
}