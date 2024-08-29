import React from 'react';
import {
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const AskQuestionForm = () => {
  return (
    <div className="flex justify-center items-center bg-black border-b p-5 border-white">
      <Card className="w-full max-w-6xl px-10 shadow-lg shadow-white">
        <CardBody>
          <div className="flex items-center justify-center ">
            <EnvelopeIcon className="w-12 h-12 text-black" />
          </div>
          <Typography variant="h5" className="text-center mb-5">
           Have a question about Tyres?
           <p className='font-thin text-base'>Get an answer in 24 hours from our experts.</p>
          </Typography>
          <div className='flex lg:flex-row flex-col sm:flex-col gap-2'>
          <div className="w-full">
            <Input type="email" label="Your Email"required />
          </div>
          <div className=" mb-5 w-full">
            <Input label="Your Question"  required />
          </div>
          </div> 
          <Button className="bg-gray-900 w-full">
            Submit
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AskQuestionForm;
