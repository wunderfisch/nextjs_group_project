import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import softskills from "../../public/softskills.jpg";
import techskills from "../../public/techskills.jpg";
import generalinfor from "../../public/generalinfor.jpg";
import Link from "next/link";


export default function Home() {
  return (
    <main
      className={`bg-violet-100  flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <section className="  :bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-full dark:hidden"
            src={generalinfor}
            alt="dashboard image"
            width={600}
            height={400}
          />
          <Image
            className="w-full hidden dark:block"
            src={generalinfor}
            alt="dashboard image"
            width={600}
            height={400}
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Information General
            </h2>
            <div className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              This website will get you ready
              <p>for your next tech interview. </p>
              <p>Lost? Our AI ChatBot will help you</p>
            </div>
            <Link
              href="/generator"
              className="inline-flex items-center text-black bg-rose-500 hover:bg-rose-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Cover Letter Generator
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
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-violet-100 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Softskills
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              are important to get a job because they demonstrate an
              individual's ability to communicate effectively, work well with
              others, and adapt to different situations. Employers often seek
              candidates with strong soft skills as they contribute to a
              positive work culture, increased productivity, and better
              teamwork. Having a combination of technical expertise and
              well-developed soft skills makes candidates more competitive and
              desirable in the job market.
            </p>
            <Link
              href="/softskills"
              className="inline-flex items-center text-black bg-rose-500 hover:bg-rose-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
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
            </Link>
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
      <section className="bg-violet-100 dark:bg-gray-900">
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
            <div className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              This website will get you ready for your next tech interview.
            </div>
            <div className="list-disc pl-6">
              <Link  href="/techskills/html" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">HTML</Link>
              <Link  href="/techskills/css" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CSS</Link>
              <Link  href="/techskills/javascript" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Javascript</Link>
              <Link  href="/techskills/react" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">React</Link>
              <Link  href="/techskills/advanced-react" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Advanced React</Link>
              
            </div>
          
          </div>
        </div>
      </section>
    </main>
  );
}
