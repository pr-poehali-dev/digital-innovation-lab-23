export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/f765a61f-bf87-4b42-ba20-009a76791e9a/bucket/1cdc4154-bf83-49b8-816f-c26d47f9a3bf.png"
          alt="Команда Красное и Белое"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-red-600">Свежие идеи в цене</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мы ценим свежие идеи и не боимся пробовать новое. Рядом будут люди,
          у которых хочется учиться — сильная команда, поддержка и настоящий рост.
        </p>
        <a
          href="#vacancies"
          className="bg-red-600 text-white border border-red-600 px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-red-600 cursor-pointer w-fit uppercase tracking-wide font-semibold"
        >
          Хочу в команду
        </a>
      </div>
    </div>
  );
}