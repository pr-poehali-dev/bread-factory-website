import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О нас" },
  { id: "products", label: "Продукция" },
  { id: "contacts", label: "Контакты" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Хлеб «Новый»",
    category: "Пшеничный хлеб",
    price: 89,
    weight: "650 г",
    calories: "207 ккал/100г",
    composition: "Мука пшеничная в/с, вода, дрожжи, соль",
    shelf: "5 суток",
    description: "Наш главный хлеб — мягкий мякиш, румяная корочка, знакомый с детства вкус. Выпекается каждый день.",
    badge: "Хит продаж",
    image: "🍞",
  },
  {
    id: 2,
    name: "Батон «Колос»",
    category: "Пшеничный хлеб",
    price: 54,
    weight: "400 г",
    calories: "264 ккал/100г",
    composition: "Мука пшеничная в/с, вода, дрожжи, соль, сахар, маргарин",
    shelf: "3 суток",
    description: "Воздушный батон из муки высшего сорта. Нежный мякиш, золотистая корочка. Идеален для бутербродов.",
    badge: null,
    image: "🥖",
  },
  {
    id: 3,
    name: "Хлеб «Охотничий»",
    category: "Смешанный хлеб",
    price: 76,
    weight: "390 г",
    calories: "235 ккал/100г",
    composition: "Мука пшеничная, мука ржаная, вода, дрожжи, соль",
    shelf: "4 суток",
    description: "Хлеб из смеси пшеничной и ржаной муки. Насыщенный вкус, плотная структура, хрустящая корочка.",
    badge: "Новинка",
    image: "🫓",
  },
  {
    id: 5,
    name: "Булка «Молочная»",
    category: "Сдобная выпечка",
    price: 38,
    weight: "200 г",
    calories: "310 ккал/100г",
    composition: "Мука пшеничная в/с, молоко, яйца, масло сливочное, сахар, дрожжи",
    shelf: "2 суток",
    description: "Нежная сдобная булочка на молоке. Мягкая, воздушная, чуть сладковатая.",
    badge: null,
    image: "🧁",
  },
  {
    id: 6,
    name: "Хлеб «Тостовый»",
    category: "Пшеничный хлеб",
    price: 92,
    weight: "510 г",
    calories: "255 ккал/100г",
    composition: "Мука пшеничная в/с, вода, дрожжи, соль, сахар, масло растительное",
    shelf: "5 суток",
    description: "Специальный хлеб для тостов — равномерный мякиш без крупных пор, идеальная форма.",
    badge: null,
    image: "🍞",
  },
  { id: 10, name: "Рулет «Зебра»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Бисквитный рулет с шоколадным кремом.", badge: null, image: "🎂" },
  { id: 11, name: "Рулет в ассортименте", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Вишня, лимон, банан, груша, шоколад, абрикос, черная смородина.", badge: null, image: "🍰" },
  { id: 12, name: "Пирожное «Шоколадница»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Шоколадный бисквит с кремом.", badge: null, image: "🍫" },
  { id: 13, name: "Пирожное «Выскак»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Слоёное пирожное с кремом.", badge: null, image: "🥐" },
  { id: 14, name: "Пирожное «Мирамису»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Нежное пирожное в стиле тирамису.", badge: null, image: "🍮" },
  { id: 15, name: "Пирожное «Эклер»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "С заварным кремом или варёной сгущёнкой.", badge: null, image: "🥖" },
  { id: 16, name: "Пирог «Дружба»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Слоёный пирог с начинкой.", badge: null, image: "🥧" },
  { id: 17, name: "Пирог «Пионерский»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Пирог с белой глазурью.", badge: null, image: "🍞" },
  { id: 18, name: "Кекс «Московский»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Традиционный кекс с изюмом и цукатами.", badge: null, image: "🧁" },
  { id: 19, name: "Кекс «Шоколадный»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Насыщенный шоколадный кекс с какао.", badge: null, image: "🍫" },
  { id: 20, name: "Кекс «Столичный» 250 г", category: "Кондитерские изделия", price: 0, weight: "250 г", calories: "", composition: "", shelf: "", description: "Классический столичный кекс с изюмом.", badge: null, image: "🧁" },
  { id: 21, name: "Кекс «Творожный» 250 г", category: "Кондитерские изделия", price: 0, weight: "250 г", calories: "", composition: "", shelf: "", description: "Мягкий кекс с творогом, нежный и сочный.", badge: null, image: "🧁" },
  { id: 22, name: "Кекс с начинкой", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Лимон, банан, вишня, шоколад, абрикос — на выбор.", badge: null, image: "🧁" },
  { id: 23, name: "Кекс со сгущёнкой", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Нежный кекс с начинкой из варёной сгущёнки.", badge: null, image: "🧁" },
  { id: 24, name: "Печенье «Курабье»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Классическое рассыпчатое печенье с джемом.", badge: null, image: "🍪" },
  { id: 25, name: "Печенье «Орешки»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Печенье в форме орешков с варёной сгущёнкой.", badge: null, image: "🍪" },
  { id: 26, name: "Печенье «Овсяное»", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Домашнее овсяное печенье — мягкое, ароматное.", badge: null, image: "🍪" },
  { id: 27, name: "Печенье слоёное с семечками/луком", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Хрустящее слоёное печенье — с семечками или с луком.", badge: null, image: "🍪" },
  { id: 28, name: "Сочник с творогом", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Песочное тесто с нежной творожной начинкой.", badge: null, image: "🥐" },
  { id: 29, name: "Слойка с джемом", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Слоёное тесто с фруктовым джемом.", badge: null, image: "🥐" },
  { id: 30, name: "Сахарные бантики", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Слоёные изделия в форме бантиков, посыпанные сахаром.", badge: null, image: "🥐" },
  { id: 31, name: "Круасан", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Слоёный круасан с начинкой.", badge: null, image: "🥐" },
  { id: 32, name: "Пряники", category: "Кондитерские изделия", price: 0, weight: "", calories: "", composition: "", shelf: "", description: "Мятный, шоколадный, московский — на выбор.", badge: null, image: "🍬" },
];

const CATEGORIES = ["Все", "Ржаной хлеб", "Пшеничный хлеб", "Смешанный хлеб", "Сдобная выпечка", "Кондитерские изделия"];


export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProducts =
    activeCategory === "Все"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "hsl(36 40% 97% / 0.96)",
          borderColor: "hsl(var(--border))",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
              style={{ background: "hsl(var(--primary))" }}
            >
              🌾
            </div>
            <span
              className="text-xl font-display font-semibold tracking-wide"
              style={{ color: "hsl(var(--crust))" }}
            >
              ООО «Сурский хлебозавод»
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200"
                style={{
                  color: activeSection === link.id ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                  background: activeSection === link.id ? "hsl(var(--secondary))" : "transparent",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "hsl(var(--foreground))" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden border-t px-4 py-3 flex flex-col gap-1"
            style={{
              background: "hsl(36 40% 97%)",
              borderColor: "hsl(var(--border))",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left px-3 py-2 rounded-lg text-sm font-body"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/e03773f3-9536-493d-bf7b-446f8661100b/files/ac6eec05-0346-4fe3-8526-ebf7b8fda035.jpg)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, hsl(25 40% 10% / 0.85) 0%, hsl(25 30% 15% / 0.55) 60%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <p
              className="animate-fade-in-up font-body text-sm uppercase tracking-[0.2em] mb-4"
              style={{ color: "hsl(45 80% 70%)" }}
            >
              Основан в 2010 году
            </p>
            <h1
              className="animate-fade-in-up delay-100 font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
              style={{ color: "hsl(42 60% 95%)" }}
            >
              Хлеб с душой
              <span className="block italic font-light" style={{ color: "hsl(45 80% 70%)" }}>
                и традициями
              </span>
            </h1>
            <p
              className="animate-fade-in-up delay-200 font-body text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "hsl(42 30% 80%)" }}
            >
              Каждый день мы выпекаем хлеб по рецептам, проверенным десятилетиями.
              Натуральные ингредиенты, живые дрожжи, настоящий вкус.
            </p>
            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("products")}
                className="px-7 py-3.5 rounded-xl font-body font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "hsl(var(--accent))",
                  color: "hsl(25 30% 10%)",
                }}
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="px-7 py-3.5 rounded-xl font-body font-semibold text-sm border transition-all hover:bg-white/10"
                style={{
                  border: "1.5px solid hsl(42 40% 80% / 0.5)",
                  color: "hsl(42 60% 95%)",
                }}
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{ background: "hsl(25 30% 12% / 0.75)", backdropFilter: "blur(8px)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {[
              { value: "15+", label: "лет традиций" },
              { value: "100+", label: "видов продукции" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold" style={{ color: "hsl(45 80% 70%)" }}>
                  {stat.value}
                </div>
                <div className="font-body text-xs md:text-sm mt-0.5" style={{ color: "hsl(42 30% 75%)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "hsl(var(--accent))" }}>
              О нас
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: "hsl(var(--bark))" }}
            >
              Хлеб — это
              <em className="block not-italic" style={{ color: "hsl(var(--primary))" }}>
                больше, чем еда
              </em>
            </h2>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
              ООО «Сурский хлебозавод» основан в 2010 году. За более чем 15 лет работы мы сохранили
              главное — уважение к традициям и любовь к своему делу. Каждая буханка
              проходит полный цикл: от замеса теста до выпечки в подовых печах.
            </p>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              Мы используем только натуральные ингредиенты без консервантов и
              улучшителей. Наши рецепты не изменились — потому что хороший хлеб
              не нуждается в усовершенствованиях.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Wheat", label: "Натуральные ингредиенты" },
                { icon: "Flame", label: "Подовые печи" },
                { icon: "Clock", label: "Ежедневная выпечка" },
                { icon: "Award", label: "ГОСТ качество" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--secondary))" }}
                  >
                    <Icon name={item.icon} size={18} style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <span className="font-body text-sm font-medium" style={{ color: "hsl(var(--foreground))" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: "hsl(var(--secondary))" }}
            />
            <img
              src="https://cdn.poehali.dev/projects/e03773f3-9536-493d-bf7b-446f8661100b/files/ef258811-7817-45ff-a029-1f422e6011a5.jpg"
              alt="Наш хлебозавод"
              className="relative z-10 w-full h-80 md:h-[440px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24" style={{ background: "hsl(38 30% 94%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "hsl(var(--accent))" }}>
              Каталог
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "hsl(var(--bark))" }}>
              Наша продукция
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "hsl(var(--primary))" : "hsl(0 0% 100%)",
                  color: activeCategory === cat ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))",
                  border: "1.5px solid",
                  borderColor: activeCategory === cat ? "hsl(var(--primary))" : "hsl(var(--border))",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: "hsl(0 0% 100%)", borderColor: "hsl(var(--border))" }}
              >
                <div
                  className="relative h-40 flex items-center justify-center overflow-hidden"
                  style={{ background: "hsl(var(--secondary))" }}
                >
                  <span className="text-6xl">{product.image}</span>
                  {product.badge && (
                    <span
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full font-body text-xs font-semibold"
                      style={{ background: "hsl(var(--accent))", color: "hsl(25 30% 10%)" }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <span
                    className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md font-body text-xs"
                    style={{ background: "hsl(0 0% 100% / 0.85)", color: "hsl(var(--muted-foreground))" }}
                  >
                    {product.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-1" style={{ color: "hsl(var(--bark))" }}>
                    {product.name}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mb-4 line-clamp-2"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {product.weight}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ background: "hsl(var(--secondary))" }}
                    >
                      <Icon name="ChevronRight" size={18} style={{ color: "hsl(var(--primary))" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "hsl(var(--accent))" }}>
              Контакты
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6" style={{ color: "hsl(var(--bark))" }}>
              Свяжитесь с нами
            </h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
              Мы рады ответить на любые вопросы о продукции, оптовых поставках
              и сотрудничестве. Работаем с магазинами, ресторанами и кафе.
            </p>

            <div className="space-y-6">
              {[
                { icon: "MapPin", title: "Адрес", text: "Пензенская обл., г. Сурск, ул. Строителей, 20" },
                { icon: "Phone", title: "Телефон", text: "8 (8415) 83-51-01" },
                { icon: "Mail", title: "Email", text: "surskiixleb@mail.ru" },
                { icon: "Clock", title: "Режим работы", text: "Круглосуточно, без выходных" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--secondary))" }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <div>
                    <div
                      className="font-body text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {item.title}
                    </div>
                    <div className="font-body text-base font-medium" style={{ color: "hsl(var(--foreground))" }}>
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-8 border"
            style={{ background: "hsl(38 30% 94%)", borderColor: "hsl(var(--border))" }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6" style={{ color: "hsl(var(--bark))" }}>
              Оставьте заявку
            </h3>

            <div className="space-y-4">
              {[
                { label: "Ваше имя", placeholder: "Иван Петров", type: "text" },
                { label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                { label: "Email", placeholder: "ivan@mail.ru", type: "email" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    className="block font-body text-sm font-medium mb-1.5"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-all"
                    style={{
                      background: "hsl(0 0% 100%)",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                </div>
              ))}
              <div>
                <label
                  className="block font-body text-sm font-medium mb-1.5"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  Сообщение
                </label>
                <textarea
                  placeholder="Расскажите о вашем запросе..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none resize-none"
                  style={{
                    background: "hsl(0 0% 100%)",
                    borderColor: "hsl(var(--border))",
                    color: "hsl(var(--foreground))",
                  }}
                />
              </div>

              <button
                className="w-full py-3.5 rounded-xl font-body font-semibold text-sm transition-all hover:opacity-90"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ background: "hsl(var(--bark))", borderColor: "hsl(25 25% 22%)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-base"
              style={{ background: "hsl(var(--primary))" }}
            >
              🌾
            </div>
            <span className="font-display text-lg font-semibold" style={{ color: "hsl(42 40% 85%)" }}>
              ООО «Сурский хлебозавод»
            </span>
          </div>
          <p className="font-body text-sm" style={{ color: "hsl(42 20% 60%)" }}>
            © 2025 ООО «Сурский хлебозавод». Основан в 2010 году.
          </p>
          <div className="flex gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-body text-sm transition-opacity hover:opacity-100"
                style={{ color: "hsl(42 20% 65%)" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "hsl(0 0% 0% / 0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "hsl(0 0% 100%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-44 flex items-center justify-center relative overflow-hidden"
              style={{ background: "hsl(var(--secondary))" }}
            >
              <span className="text-7xl">{selectedProduct.image}</span>
              {selectedProduct.badge && (
                <span
                  className="absolute top-4 right-4 px-3 py-1 rounded-full font-body text-xs font-semibold"
                  style={{ background: "hsl(var(--accent))", color: "hsl(25 30% 10%)" }}
                >
                  {selectedProduct.badge}
                </span>
              )}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "hsl(0 0% 100% / 0.9)" }}
              >
                <Icon name="X" size={16} style={{ color: "hsl(var(--foreground))" }} />
              </button>
            </div>

            <div className="p-6">
              <p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: "hsl(var(--accent))" }}>
                {selectedProduct.category}
              </p>
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "hsl(var(--bark))" }}>
                {selectedProduct.name}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                {selectedProduct.description}
              </p>

              <div
                className="grid grid-cols-2 gap-3 mb-5 p-4 rounded-xl"
                style={{ background: "hsl(var(--muted))" }}
              >
                {[
                  { label: "Вес", value: selectedProduct.weight },
                  { label: "Калорийность", value: selectedProduct.calories },
                  { label: "Срок хранения", value: selectedProduct.shelf },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {row.label}
                    </div>
                    <div className="font-body text-sm font-semibold mt-0.5" style={{ color: "hsl(var(--foreground))" }}>
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <div
                  className="font-body text-xs uppercase tracking-wider mb-1"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  Состав
                </div>
                <p className="font-body text-sm" style={{ color: "hsl(var(--foreground))" }}>
                  {selectedProduct.composition}
                </p>
              </div>

              <button
                onClick={() => { setSelectedProduct(null); scrollTo("contacts"); }}
                className="w-full py-3.5 rounded-xl font-body font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
              >
                Заказать этот хлеб
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}