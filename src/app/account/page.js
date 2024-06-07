import { Avatar, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import Link2 from "next/link";

export default function Account() {
  return (
    <div className="flex  justify-center items-center h-7  ">
      <div className=" drop-shadow-md flex justify-center items-center h-[450px] w-[1000px] bg-slate-50 gap-[2px] rounded-[20px]">
        <div className="  flex flex-row justify-center  h-6 w-[350px]  bg-white m-1 rounded-[20px] ">
          <div className=" m-2 ">
            <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
                <Avatar sx={{
                  height: 140,
                  width: 140,
                  gap: 3,


                }} variant="rounded">
                  A
                </Avatar>

                <Link href={'account/dashboard'}>

                  <Button spacing={2} sx={{
                    width: 140,

                    color: "#ffffff",



                  }} variant="contained" size="small"> Dashboard

                  </Button>

                </Link>

                <Link2  href={'account/statistics'}>
                  <Button spacing={2} sx={{
                    width: 140,

                    color: "#ffffff",



                  }} variant="contained" size="small"> Statistics

                  </Button>
                </Link2>





                <Button spacing={2} sx={{
                  width: 140,

                  color: "#ffffff",



                }} variant="contained" size="small"> Settings

                </Button>

                <Button spacing={2} sx={{
                  width: 140,

                  color: "#ffffff",



                }} variant="contained" size="small"> Log out

                </Button>

              </Stack>


            </Box>


          </div>

        </div>
        <div className=" drop-shadow-md flex h-6 w-[800px] bg-white  m-1 rounded-[20px]">
          <div className="flex-row  justify-start h-3 w-4 m-1 gap-[6rem]">

            <p className="text-[32px]">My Profile</p>




            <div className="flex flex-row h-3 w-4 gap-[4rem] pt-1">
              <div className="flex-col justify-start h-2 w-4  ">
                <p className="text-[16px]">Name</p>
                <input className=" drop-shadow-md rounded-[7px] h-[25px] w-4 border"></input>
              </div>
              <div className="flex-col justify-start h-2 w-4  ">
                <p className="text-[16px]">Surname</p>
                <input className=" drop-shadow-md rounded-[7px] h-[25px] w-4"></input>
              </div>

            </div>

            <div className="flex flex-row h-3 w-4 gap-[14rem] pt-2">
              <div className="flex-col justify-start h-2 w-2">
                <p className="text-[16px]">Email</p>
                <input className=" drop-shadow-md rounded-[7px] h-[25px] w-4"></input>
              </div>
              <div className="flex-col justify-start h-2 w-2">
                <p className="text-[16px]">Number</p>
                <input className=" drop-shadow-md rounded-[7px] h-[25px] w-4"></input>
              </div>

            </div>



          </div>



        </div>
      </div>
    </div>
  )
}