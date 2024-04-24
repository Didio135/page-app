export const Destinations = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="text-center text-gray-900 ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white ">
              As melhores acomodações para fazer de sua viagem inesquecivel!
            </h2>
            <a
              href="#"
              className="inline-flex items-center text-lg font-medium text-white hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Conhecer destinos
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="grid gap-6 mt-12 lg:mt-14 lg:gap-12 sm:flex sm:flex-row md:flex md:flex-row">
            <div className="flex mb-2 md:flex-col md:mb-0">
              <img
                className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                src="https://images.pexels.com/photos/4907175/pexels-photo-4907175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="office image"
              />
              <div>
                <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">
                  Hospedagens dinâmicas
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Oferecemos hospedagens para aqueles que gostam de se aventurar
                  sozinhos ou acompanhados.
                </p>
              </div>
            </div>
            <div className="flex mb-2 md:flex-col md:mb-0 sm:flex sm:flex-row md:flex ">
              <img
                className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                src="https://images.pexels.com/photos/4907208/pexels-photo-4907208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="office image 2"
              />
              <div>
                <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">
                  Diversas opções de quartos e dormitórios
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Quartos e dormitórios personalizados para atender todas as
                  suas expectativas.
                </p>
              </div>
            </div>
            <div className="sm:flex sm:flex-col md:flex md:flex-col">
              <img
                className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                src="https://images.pexels.com/photos/4907178/pexels-photo-4907178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="office image 3"
              />
              <div>
                <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">
                  Fácil check-in e segurança máxima
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Oferecemos um check-in fácil e garantimos a segurança máxima
                  para a sua estadia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
