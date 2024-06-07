import { Avatar, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";


export default function Home() {
  return (

    <div className="flex justify-center items-center h-6 m-1 ">
      <div className=" flex justify-center items-center">
        <div className=" drop-shadow-md flex flex-col  justify-center items-center bg-slate-100 w-6 h-[300px] rounded-[20px]  gap-[20px] ">
          <Avatar sx={{
            height: 50,
            width: 50,
          }} variant="rounded">
            A
          </Avatar>

          <div className="flex flex-col items-center justify-center gap-[14px]">
            <div className="flex flex-col  gap-[6px] ">
              <p className="flex justify-start items-center">Login</p>
              <input className=" drop-shadow-md rounded-[20px] flex justify-center items-start bg-white w-5 h-2 "></input>
            </div>

            <div className="flex flex-col  gap-[6px]">
              <p className="flex justify-start items-center">Password</p>
              <input className=" drop-shadow-md rounded-[20px] flex justify-center items-center bg-white w-5 h-2 "></input>

            </div>


          </div>

          <div className="flex flex-row items-center ">
            <div className="flex flex-row justify-between gap-[8rem]">
              
                  <Link href={'/account'}>
                    
                    <Button variant="outlined" size="small"> Log in

                  </Button>

                  </Link>

                  <Button variant="outlined" size="small"> Sign up

                    </Button>
                  


                



            </div>

          </div>





        </div>

      </div>


    </div>


  );
}
