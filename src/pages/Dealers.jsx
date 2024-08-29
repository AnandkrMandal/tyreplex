import React from "react";
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import ServicesPopup from "../components/Service/ServicesPopup";
import Testimonial from "../components/testimonial/testimonial";
import Nav from '../components/nav/Nav';
import TireBrandsCarousel from "../components/TireBrandsCarousel";
import FilterCategory from "../components/filterCard/FilterCategory";
import PaymentMode from "../components/paymentCard/PaymentMode";
import Footer from "../components/footer/Footer";
import AskQuestionForm from "../components/AskQuestionForm";

function Dealers() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Nav/>
      <div className="hero bg-white min-h-96">
        <div className="hero-content max-w-full lg:p-10 sm:p-0 flex flex-col lg:flex-row-reverse">
          <div className="flex justify-end lg:max-w-2xl max-w-xl ">
            <Carousel className="rounded-xl ">
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          
          </div>
          <Card className="sm:p-0 sm:w-full  lg:p-0 lg:w-2/3 ">
            <div className="flex flex-row pt-4 pl-6 gap-1">
              <div className="badge badge-success ">
                <i className="fa-solid fa-check pr-2" /> Verified
              </div>
              <div className="badge badge-primary">Authorized</div>
            </div>
            {/* mobile view */}
            <div className="pl-6 pt-3 flex flex-row ">
              <div className="badge badge-success">4.9</div>
              <Rating value={5} readonly />{" "}
              <div className="underline">2278 Reviews</div>
            </div>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-[PlayfairDisplay] text-2xl md:text-2xl lg:text-4xl font-bold"
              >
                SHREE HEMKUNT TYRES AND SERVICES
              </Typography>
              <i className="fa-solid fa-location-dot pr-2"></i>
              <span className="text-black font-medium">Location</span>
              <Typography className="pt-2">
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </Typography>
              <i className="fa-solid fa-clock pr-2 pt-4"></i>
              <span className="text-black font-medium">Working Hours</span>
              <Typography className="pt-2">
                Open - Monday to Sunday - 10:00AM to 8:00PM
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-evenly lg:justify-start ">
              <a
                href="https://maps.app.goo.gl/9DbR6eGuM4AXqzF59"
                target="_blank"
              >
                <Button className="bg-orange-800">Get Direction</Button>
              </a>
              <Button onClick={handleOpen} className="bg-red-800 ml-2">
                Services
              </Button>
            </CardFooter>
            <ServicesPopup open={open} handler={handleOpen} />
          </Card>
        </div>
      </div>
      <div>
        <Typography
          variant="h3"
          className="text-center  underline bg-white text-blue-800 text-2xl font-[PlayfairDisplay] font-bold py-4"
        >
          Google Reviews
        </Typography>
        <Testimonial />
      </div>
      <div className=" bg-white py-2">
      <Typography
          variant="h3"
          className=" text-center underline  text-orange-900 text-2xl font-[PlayfairDisplay] font-bold py-4"
        >
       Popular Tyre Brands Deal's
      </Typography>
        <TireBrandsCarousel />
      </div>
      <div className="bg-white py-2">
        <FilterCategory />
      </div>
      <div className="">
        <Typography
          variant="h3"
          className="text-center  underline bg-white text-black text-2xl font-[PlayfairDisplay] font-bold py-4"
        >
         Payment Mode
        </Typography>
        <PaymentMode />
        <AskQuestionForm/>
        <Footer />
      </div>
    </>
  );
}

export default Dealers;
