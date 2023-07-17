import React from "react";
import Step from "./Step";

const StepsWrapper = ({ part, partNumber }) => {
  const { title, steps } = part;
  return (
    <div className='relative rounded-lg bg-white w-fit mb-4 md:mb-6'>
      <div className='flex flex-row sticky top-0 bg-white z-10 rounded-tl-lg'>
        <div className='flex flex-col w-16 h-16 justify-center items-center bg-primary text-white rounded-tl-lg'>
          <p>Part</p>
          <p className='text-xl'>{partNumber}</p>
        </div>
        <div className='flex items-center justify-center'>
          <h3 className='pl-2 font-bold font-grey text-lg'>{title}</h3>
        </div>
      </div>

      <div>
        <ol className='mb-8'>
          {steps.map((step, index) => (
            <Step
              key={index}
              step={step}
              partNumber={partNumber}
              stepNumber={index + 1}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StepsWrapper;
