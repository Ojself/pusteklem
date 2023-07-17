import Image from "next/image";
import React from "react";

const Step = ({ step, partNumber, stepNumber }) => {
  const { img, title, text } = step;
  return (
    <li className='mb-4 '>
      <a name={`step_${partNumber}_${stepNumber}`} className='hidden'></a>
      <div>
        <Image
          src={`/images/steps/${img}`}
          alt={`Picture of the ${title} step`}
          height={1000}
          width={750}
        />
      </div>
      <div className='flex mt-2 max-w-2xl'>
        <h2 className='text-3xl font-bold inline px-3 text-center text-grey'>
          {stepNumber}
        </h2>
        <p className='pb-4 px-2'>
          <span className='font-bold text-grey'>{title}</span> {text}
        </p>
      </div>
    </li>
  );
};

export default Step;
