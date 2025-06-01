import { NextApiRequest, NextApiResponse } from "next";


type TransactionAmount = {
    amount: number,
    currencyType: string,
}

enum TransactionType {
    DUITNOW = "DuitNow"
}

type TransactionRecipient = {
    name: string,
    reference: string,
}

export type Transaction = {
    date: string,
    referenceId: string,
    to: TransactionRecipient,
    type: TransactionType,
    amount: TransactionAmount
}

const GET = () => {
    const transactionList: Array<Transaction> = [
        {
            date: "2022/01/20",
            referenceId: "XYD299371933",
            to: {
                name: "Transaction SDN. BHD.",
                reference: "Reference for you!",
            },
            type: TransactionType.DUITNOW,
            amount: {
                amount: 1200,
                currencyType: "MYR"
            }
        },
        {
            date: "2022/01/20",
            referenceId: "XYD299371933",
            to: {
                name: "Transaction SDN. BHD.",
                reference: "Reference for you!",
            },
            type: TransactionType.DUITNOW,
            amount: {
                amount: 1200,
                currencyType: "MYR"
            }
        },
        {
            date: "2022/01/20",
            referenceId: "XYD299371933",
            to: {
                name: "Transaction SDN. BHD.",
                reference: "Reference for you!",
            },
            type: TransactionType.DUITNOW,
            amount: {
                amount: 1200,
                currencyType: "MYR"
            }
        },
        {
            date: "2022/01/20",
            referenceId: "XYD299371933",
            to: {
                name: "Transaction SDN. BHD.",
                reference: "Reference for you!",
            },
            type: TransactionType.DUITNOW,
            amount: {
                amount: 1200,
                currencyType: "MYR"
            }
        },
        {
            date: "2022/01/20",
            referenceId: "XYD299371933",
            to: {
                name: "Transaction SDN. BHD.",
                reference: "Reference for you!",
            },
            type: TransactionType.DUITNOW,
            amount: {
                amount: 1200,
                currencyType: "MYR"
            }
        },
        {
            date: "2022/01/20",
            referenceId: "XYD299371933",
            to: {
                name: "Transaction SDN. BHD.",
                reference: "Reference for you!",
            },
            type: TransactionType.DUITNOW,
            amount: {
                amount: 1200,
                currencyType: "MYR"
            }
        },
        {
            date: "2022/01/20",
            referenceId: "XYD299371933",
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