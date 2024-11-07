// import axios from "axios";
import { PrismaClient } from "@prisma/client";
const client  = new PrismaClient();

async function getUserDetails () {
  // let pms = await new Promise ((resolve)=>{
  //   setTimeout(()=>{resolve("Promise is resolved")},5000);
  // }).then((result)=>{
  //       console.log(result);
  // })
  // let ans = await pms;
  // console.log("🚀 ~ pms ~ pms:", ans)
  //  const response = await axios.get("http://localhost:3000/api/user");
  //  console.log("🚀 ~ getUserDetails ~ response:", response.data)
  //  return response.data;

  try {
    const user = await client.user.findFirst({});
    return {
      username : user?.username,
      password : user?.password
    }
  } catch (error) {
    console.log(error)
  }

}


export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                UserName: {userData?.username}
            </div>
            
            <div>Password : {userData?.password}</div>
        </div>
    </div>
</div>
  );
}
