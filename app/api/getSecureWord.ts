import { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
    secureWord: string
}
   
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res
        .status(200)
        .json({
            secureWord: 'secure123' 
    })
}