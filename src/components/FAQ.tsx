import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах вы работаете?",
    answer:
      "Работаем по всему Краснодарскому краю, а также выполняем межгородские перевозки по всей России и в Крым. Краснодар, Сочи, Новороссийск, Анапа, Геленджик и трасса М-4 — наши ключевые направления.",
  },
  {
    question: "Сколько времени займёт приезд эвакуатора?",
    answer:
      "В пределах города — от 30 до 60 минут. На загородных трассах время зависит от удалённости. Точное время называем при звонке после уточнения вашего местоположения.",
  },
  {
    question: "Сколько стоит эвакуация?",
    answer:
      "Стоимость зависит от типа автомобиля, расстояния и времени суток. Называем цену сразу по телефону — до выезда. Никаких скрытых доплат и неприятных сюрпризов по приезду.",
  },
  {
    question: "Повредите ли вы мой автомобиль при погрузке?",
    answer:
      "Мы используем современные эвакуаторы с мягкими стропами и защитными прокладками. Наши водители прошли специальную подготовку. За 10 лет работы — ни одного случая повреждения при эвакуации.",
  },
  {
    question: "Работаете ли вы ночью и в выходные?",
    answer:
      "Да, работаем круглосуточно, 365 дней в году. Ночью, в праздники и в плохую погоду — эвакуатор выедет в любое время.",
  },
  {
    question: "Как вызвать эвакуатор?",
    answer:
      "Позвоните нам или напишите в мессенджер. Назовите ваше местоположение и тип автомобиля — мы сразу назовём цену и время прибытия и вышлем ближайший эвакуатор.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}