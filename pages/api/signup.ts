import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let prisma = new PrismaClient()

  let response: any
  const data = JSON.parse(req.body)
  if (req.method === "POST") {
    try {
      response = await prisma.users_table.create({
        data: {
          work_email: data.work_email,
          company_name: data.company_name,
          password: data.password,
          mobile_number: data.mobile_number
        }
      })
    }
    catch (error) {
      return res.send("Email Already Exists")
    }
  }
  if (req.method === "GET") {
    response = await prisma.users_table.findMany()
  }
  return res.status(200).send(response)
}
