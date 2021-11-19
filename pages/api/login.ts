import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, users_table } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let prisma = new PrismaClient()
    const data = JSON.parse(req.body);
    if (!data.email || !data.password) return res.send("Missing params")

    const user: users_table | null = await prisma.users_table.findUnique({ where: { work_email: data.email } })
    if (!user) return res.send("invalid-email");

    if (user.password !== data.password) return res.send("invalid-password");
    return res.status(200).send("success")
}
