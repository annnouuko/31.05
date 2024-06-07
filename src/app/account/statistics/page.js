"use client"

import { Avatar, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { PieChart } from '@mui/x-charts/PieChart';
import Link from "next/link";



export default function Statistics() {
  return (
    <div className="flex  justify-center items-center h-7  ">
      <div className=" drop-shadow-md flex justify-center items-center h-[450px] w-[1000px] bg-slate-50 gap-[2px] rounded-[20px]">
        <div className="flex flex-row justify-center  h-6 w-[350px]  bg-white m-1 rounded-[20px]">
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

                  color: "#ffffff",



                }} variant="contained" size="small"> Dashboard

                </Button>





                <Button spacing={2} sx={{
                  width: 140,





                }} variant="outlined" size="small"> Statistics

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
            <p className="text-[25px]">Statistics</p>
          </div>

          <div className="flex  h-[350px] w-[600px]  rounded-[20px] ">

            <div className=" flex flex-row justify-center items-center  mx-3 mb-3">

              <div className="flex flex-col justify-center items-center gap-[1.5rem]">
                <div className=" drop-shadow-md rounded-md h-3 w-[160px] bg-white">
                  <div className="flex flex-col m-[7px] justify-start items-start ">
                    <p className="text-[13px] text-[#bfbebe]">series A</p>
                    <p className="text-[20px] ">36,6</p>
                  </div>
                </div>
                <div className=" drop-shadow-md rounded-md h-3 w-[160px] bg-white">
                  <div className="flex flex-col m-[7px] justify-start items-start ">
                    <p className="text-[13px] text-[#bfbebe]">series B</p>
                    <p className="text-[20px] ">56,6</p>
                  </div>


                </div>
                <div className=" drop-shadow-md rounded-md h-3 w-[160px] bg-white">
                  <div className="flex flex-col m-[7px] justify-start items-start ">
                    <p className="text-[13px] text-[#bfbebe]">series C</p>
                    <p className="text-[20px] ">86,6</p>
                  </div>
                </div>


              </div>





            </div>

            <div className="flex justify-center w-5 items-start">
              <div className="flex  justify-center m-1">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />

              
              </div>
            </div>
          </div>



        </div>



      </div>

    </div>
  )
}