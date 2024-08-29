import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ServicesPopup = ({ open, handler }) => {
  return (
    <>
      <Dialog open={open} handler={handler} >
        <DialogHeader>
          <div className="flex justify-between items-center w-full">
            <Typography
              variant="h3"
              className="text-center underline bg-white text-black text-2xl font-[PlayfairDisplay] font-bold py-2"
            >
              Services offered by this dealer
            </Typography>
            <Button
              variant="text"
              color="red"
              onClick={handler}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="grid lg:grid-flow-col grid-cols-2 gap-1">
            <div>
              <Card className="w-auto">
                <CardBody className="">
                  <img
                  src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
                  alt="Wheel Balancing"
                  />
                  <Typography variant="h5" color="blue-gray" className="">
                    Wheel Balancing
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center bg-red-500 hover:bg-red-900 gap-2"
                    >
                      Book Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className="w-auto flex">
                <CardBody className="">
                 <img
                  src="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
                  alt="Wheel Balancing"
                  className="items-center"
                  />
                  <Typography variant="h5" color="blue-gray" className="">
                  Wheel Alignment
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center bg-red-500 hover:bg-red-900 gap-1"
                    >
                      Book Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default ServicesPopup;
