import Head from "next/head";
import { useState } from "react";

import StepsWrapper from "../components/StepsWrapper";
import data from "../data/parts.json";

export default function Home() {
  const [easterEgg, setEasterEgg] = useState(false);
  const easterEggAnimation = easterEgg ? "animate-spin" : "";
  return (
    <>
      <Head>
        <title>Pusteklem</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-2 flex flex-col justify-center items-center w-full bg-gray-100 '>
        <div
          style={{ maxWidth: "750px" }}
          className='w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-7/12 2xl:w-6/12 mt-8 mb-10 md:mb-14 '
        >
          <section className='mb-12 mt-6 bg-white rounded-md py-12 pl-6  items-center'>
            <h1 className='text-3xl font-semibold text-center relative'>
              How to perform a Pusteklem
              <span
                className={`ml-1 cursor-default absolute ${easterEggAnimation}`}
                onClick={() => {
                  setEasterEgg(true);
                  setTimeout(() => {
                    setEasterEgg(false);
                  }, 1000);
                }}
              >
                {"🫂"}
              </span>
            </h1>
            <p className='text-xs mt-4 w-2/5 md:w-1/3'>
              This guide will take you through the steps on how to perform a
              quality hug:
            </p>
            <p className='italic text-xs m-1'>Pusteklem.</p>
          </section>
          <section className='flex flex-col items-center'>
            {data.map((part, index) => {
              return (
                <StepsWrapper part={part} partNumber={index + 1} key={index} />
              );
            })}
          </section>
          <section className='bg-white rounded-lg flex flex-col items-center mt-12'>
            <p className='rounded-lg p-4'>
              <span className='font-bold'>Remember</span>, the breathing hug is
              intended to create a peaceful and calming experience. It can be a
              wonderful way to connect with someone and cultivate a sense of
              serenity. Enjoy the moment and the shared breath!
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
