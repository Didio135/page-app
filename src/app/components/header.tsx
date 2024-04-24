import Link from "next/link";

export const Header = () => {
  return (
    <>
      <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
        <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 flex justify-center">
          <div className="mb-6 max-w-screen-md lg:mb-0 justify-center">
            <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl text-center">
              Todo destino é a sua casa!
            </h1>
            <p className="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl text-center">
              Reserve os melhores locais para se hospedar e sinta-se em casa
              independente de onde estiver pelo mundo!
            </p>
            <div className="flex flex-row justify-center">
              <div className="rounded-lg flex justify-center ">
                <a
                  href="../components/login-page.tsx"
                  className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-black-700 "
                >
                  Registrar-se
                </a>
              </div>
              <div className="rounded-lg flex justify-center ">
                <button className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-black-700 ">
                  <Link href="./components/login-page.tsx">Login</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
