export default function Footer() {
  return (
    <div
      id="vacancies"
      className="relative h-[500px] sm:h-[650px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[800px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div>
              <span className="inline-block bg-red-600 text-white text-xs sm:text-sm uppercase tracking-wide px-3 py-1 font-semibold mb-4 sm:mb-6">
                Start Up
              </span>
              <div className="flex flex-col sm:flex-row shrink-0 gap-6 sm:gap-12 lg:gap-20">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-red-500 text-xs sm:text-sm">Открытые вакансии</h3>
                  <div className="text-white text-sm sm:text-base">
                    Администратор <span className="text-red-400 font-semibold">от 176 000 ₽</span>
                  </div>
                  <div className="text-white text-sm sm:text-base">
                    Кассир <span className="text-red-400 font-semibold">от 141 000 ₽</span>
                  </div>
                  <div className="text-white text-sm sm:text-base">
                    Специалист ОПП <span className="text-red-400 font-semibold">от 154 000 ₽</span>
                  </div>
                </div>
                <div id="contact" className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-red-500 text-xs sm:text-sm">Звоните — мы ждём отклик</h3>
                  <a
                    href="tel:+79678619747"
                    className="text-white hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    8-967-861-97-47 — Евгения
                  </a>
                  <a
                    href="tel:+79526844663"
                    className="text-white hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    8-952-684-46-63 — Елизавета
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[13vw] sm:text-[11vw] lg:text-[9vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                КРАСНОЕ <span className="text-red-500">&</span> БЕЛОЕ
              </h1>
              <p className="text-white text-sm sm:text-base whitespace-nowrap">{new Date().getFullYear()} · Работа в КБ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
