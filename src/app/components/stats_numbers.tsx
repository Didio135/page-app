export const StatsNumberSections = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="px-4 py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6 xl:px-0">
        <div className="mx-auto mb-8 max-w-screen-md text-center md:mb-16">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
            Números alcançados até aqui
          </h2>
        </div>
        <div className="mb-4 space-y-4 md:grid md:grid-cols-3 md:gap-4 xl:gap-16 md:space-y-0 md:mb-8">
          <div className="flex justify-center items-center p-6 text-center bg-gray-200 rounded xl:p-12 dark:bg-gray-800">
            <div className="text-gray-900 dark:text-white">
              <p className="mb-2 text-4xl font-extrabold md:text-5xl">97%</p>
              <h3 className="mb-2 text-xl font-semibold">de nossas viagens</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                aprovadas com mais de 5 estrelas{" "}
                <span className="font-medium text-primary-600 dark:text-primary-500">
                  *
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-6 text-center bg-gray-200 rounded xl:p-12 dark:bg-gray-800">
            <div className="text-gray-900 dark:text-white">
              <p className="mb-2 text-4xl font-extrabold md:text-5xl">98%</p>
              <h3 className="mb-2 text-xl font-semibold">De nossos clientes</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                indicam e aprovaram nosso serviço{" "}
                <span className="font-medium text-primary-600 dark:text-primary-500">
                  *
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center p-6 text-center bg-gray-200 rounded xl:p-12 dark:bg-gray-800">
            <div className="text-gray-900 dark:text-white">
              <p className="mb-2 text-4xl font-extrabold md:text-5xl">
                3 dias+
              </p>
              <h3 className="mb-2 text-xl font-semibold">De tempo reduzido</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                no planejamento de sua viajem{" "}
                <span className="font-medium text-primary-600 dark:text-primary-500">
                  *
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
          <span className="font-medium text-primary-600 dark:text-primary-500">
            *
          </span>{" "}
          Resultados baseados no feedback coletado de nossos clientes em 3 anos
          seguidos.
        </p>
      </div>
    </section>
  );
};
