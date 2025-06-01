import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"
   
const GET = async () => Response.json({ secureWord: 'secure123' })

export {
    GET
}