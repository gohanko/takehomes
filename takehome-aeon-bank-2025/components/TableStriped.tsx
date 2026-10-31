import { Transaction } from "@/app/api/transactionHistory/route"
import React from "react" 
 
type TTableStripedProps = {
    transactions: Array<Transaction>
}

const TableStriped = ({
    transactions
}: TTableStripedProps) => {
    return ( 
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Date</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Reference ID</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">To</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Transaction Type</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Amount</th>
                    </tr>
                    { transactions.map((transaction, index) => (
                        <tr className="odd:bg-slate-50" key={index}>
                            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{transaction.date}</td>
                            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{transaction.referenceId}</td>
                            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                <div>
                                    <p>{transaction.to.name}</p>
                                    <p>{transaction.to.reference}</p>
                                </div>
                            </td>
                            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{transaction.type}</td>
                            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{transaction.amount.currencyType} { transaction.amount.amount }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    ) 
}

export default TableStriped