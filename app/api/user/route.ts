// import { NextRequest } from "next/server"
import client from "@/db"

export async function GET () {
    const user = await client.user.findFirst({});
    return Response.json({
        username : user?.username,
        password : user?.password 
    })
}
// export async function POST (req : NextRequest) {
//     const body = await req.json();
//     console.log(body);

//     await client.user.create({
//         data : {
//             username : body.username,
//             password : body.password
//         }
//     })

//     return Response.json({message : "Your are Logged In !"})
// }
// export async function PUT () {
//     return Response.json({
//         name : "Viany",
//         email : "vinay@gmail.com"
//     })
// }