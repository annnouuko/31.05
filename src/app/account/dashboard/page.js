"use client"

import { Avatar, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { BarChart } from '@mui/x-charts/BarChart';
import Link from "next/link";
import { PieChart } from '@mui/x-charts/PieChart';

export default function Dashboard() {
  return (
    <div className="flex  justify-center items-center h-7  ">
      <div className=" drop-shadow-md flex justify-center items-center h-[450px] w-[1000px] bg-slate-50 gap-[2px] rounded-[20px]">
        <div className="   flex flex-row justify-center  h-6 w-[350px]  bg-white m-1 rounded-[20px] ">
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



                <Button spacing={2} sx={{
                  width: 140,





                }} variant="outlined" size="small"> Dashboard

                </Button>





                <Button spacing={2} sx={{
                  width: 140,

                  color: "#ffffff",



                }} variant="contained" size="small"> Statistics

                </Button>




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
        <div className=" flex-col justify-center items-center h-6 w-[800px] bg-white rounded-[20px] m-1">
          <div className=" justify-start h-2 w-4 m-1">
            <p className="text-[25px]">Dasboard</p>
          </div>

          <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
          />

          <div className="flex  h-[350px] w-[600px]  rounded-[20px] ">

            {/* <div className=" flex flex-col justify-center items-center gap-[2em] m-2"> */}


              {/* 
              <div>2000</div>
              <div>1000</div>
              <div>900</div>
              <div>600</div>
              <div>300</div> */}



            {/* </div> */}

            {/* <div className="flex justify-center m-2">
              <div className="flex flex-row gap-[2rem] items-end m-1">

                


                 <div className="h-3 w-2 bg-slate-400"></div>
                <div className="h-4 w-2 bg-slate-400"></div>
                <div className="h-3 w-2 bg-slate-400"></div>
                <div className="h-5 w-2 bg-slate-400"></div>
                <div className="h-[250px] w-2 bg-slate-400"></div>
                <div className="h-3 w-2 bg-slate-400"></div>
                <div className="h-4 w-2 bg-slate-400"></div> 
              </div>
            </div> */}
          </div>



        </div>



      </div>
    </div>

  )
}