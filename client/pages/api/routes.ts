import type { NextApiRequest, NextApiResponse } from 'next'

const config = {
	db_url: `${process.env.DB_URL}` 
}

type ResponseData = {
	message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	if (req.method == 'POST') {
	
	}
}
