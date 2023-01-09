// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

const httpStatusOK = 200

const hello = (_req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(httpStatusOK).json({ name: "John Doe" })
}

export default hello
