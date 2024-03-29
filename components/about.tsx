import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";

const About = ({ email }) => {
  return (
    <div className="lg:ml-44 lg:mr-44 m-11 lg:mb-44 lg:mt-44">
      <p className="text-2xl lg:text-center">
        Thirst for knowledge is what drives me, and it is the reason that I like
        to keep learning new concepts. I am a person who can bring new ideas,
        planning, execution and leadership on the table at the same time.
      </p>
      <div className="mt-11">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-yellow-400">Have an amazing idea?</span>
            <span className="block text-white">I'm all ears</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow mx-auto">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-blue-800 hover:text-white transition duration-500 hover:-transition lg:text-base text-center">
                  Contact me
                </button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href={`mailto:${email}?Subject=Wanted%20to%20have%20a%20chat`}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md hover:text-yellow-400 hover:border-2 hover:border-yellow-400 transition duration-500 hover:-transition lg:text-base text-center"
              >
                Old school? You can write a mail to me too!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
