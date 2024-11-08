"use server"
import client from "@/db"

export async function signup (username :string , password : string) {
    // const body = await req.json();
    // console.log(body);

    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    // return "Success"
    return { message: "Success", userId: user.id };

}