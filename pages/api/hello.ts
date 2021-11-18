// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
// type Data = {
//   name: string
// }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let prisma = new PrismaClient()

  let response: any
  console.log(req.body)
  if (req.method === "POST") {
    response = await prisma.signup.create({
      data: {
        work_email: req.body.work_email,
        company_name: req.body.company_name,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        mobile_number: req.body.mobile_number
      }
    })
    console.log(response)
  }
  if (req.method === "GET") {
    response = await prisma.signup.findMany()
    console.log(response)
    return res.status(200).send("ghdgfhsd")
  }
  return res.status(200).send(response)
}
// company_name:req.body.company_name,password:req.body.password