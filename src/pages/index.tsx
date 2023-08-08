import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import softskills from "../../public/softskills.jpg";
import techskills from "../../public/techskills.jpg";


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
            width={600}
            height={400}
          />
          <Image
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.cm/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
            width={600}
            height={400}
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Information General maybe Chatbot?
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
             This website will get you ready for your next tech interview. 
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
             maybe here we can add a lin to the random question generator
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Softskills
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            are important to get a job because they demonstrate an individual's ability to communicate effectively, work well with others, and adapt to different situations. Employers often seek candidates with strong soft skills as they contribute to a positive work culture, increased productivity, and better teamwork. Having a combination of technical expertise and well-developed soft skills makes candidates more competitive and desirable in the job market.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <Image
            className="w-full dark:hidden"
            src={softskills}
            alt="dashboard image"
            width={600}
            height={400}
          />
          <Image
            className="w-full hidden dark:block"
            src={softskills}
            alt="dashboard image"
            width={600}
            height={400}
          />
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-full dark:hidden"
            src={techskills}
            alt="dashboard image"
            width={600}
            height={400}
          />
          <Image
            className="w-full hidden dark:block"
            src={techskills}
            alt="dashboard image"
            width={600}
            height={400}
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Techskills
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
             This website will get you ready for your next tech interview. 
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">HTML</li>
              <li className="mb-2">CSS</li>
              <li className="mb-2">Javascript</li>
              <li className="mb-2">React</li>
              <li>Advanced React</li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
    </main>
  );
}

