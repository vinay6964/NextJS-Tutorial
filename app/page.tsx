// import axios from "axios";
import client from "@/db"

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

// function with async is alsways server side component and we cant use this as client side redering and unless api call or db fetch is not done
// this async component will not render and till then loading component will render and once data is fetched first the component will get
// pre rendered on the server with the data then it will get rendered on the browser with the fetched data 
// so here server side rendering helped in resolving water fall issue and does SEO optimization

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