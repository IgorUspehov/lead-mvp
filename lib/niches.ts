import type { Localized, Niche, NicheId, Question } from "@/lib/types";

const L = (en: string, de: string, ru: string): Localized => ({ en, de, ru });

function question(id: string, label: Localized, options: Localized[]): Question {
  return {
    id,
    label,
    options: {
      en: options.map((option) => option.en),
      de: options.map((option) => option.de),
      ru: options.map((option) => option.ru),
    },
  };
}

const autoJob = question("auto-job", L("What do you need?", "Was brauchen Sie?", "Что нужно?"), [
  L("MOT / inspection", "HU/AU", "Техосмотр"),
  L("Repair", "Reparatur", "Ремонт"),
  L("Tires", "Reifen", "Шины"),
  L("Major service", "Inspektion", "Большое ТО"),
]);

const autoVehicle = question("auto-vehicle", L("Vehicle", "Fahrzeug", "Авто"), [
  L("Car", "PKW", "Легковое"),
  L("Van", "Transporter", "Фургон"),
  L("Motorcycle", "Motorrad", "Мотоцикл"),
]);

const autoWhen = question("auto-when", L("When should it happen?", "Wann soll es sein?", "Когда?"), [
  L("This week", "Diese Woche", "На этой неделе"),
  L("This month", "Diesen Monat", "В этом месяце"),
  L("Quote only", "Nur ein Angebot", "Только смета"),
]);

const autoUrgent = question("auto-urgent", L("How urgent is it?", "Wie dringend ist es?", "Насколько срочно?"), [
  L("Car is off the road", "Wagen steht still", "Не на ходу"),
  L("This week", "Diese Woche", "На этой неделе"),
  L("Planning ahead", "Plane voraus", "Планирую заранее"),
]);

const autoBrand = question("auto-brand", L("Brand group", "Markengruppe", "Марка"), [
  L("VW group", "VW-Konzern", "Группа VW"),
  L("BMW / Mercedes", "BMW / Mercedes", "BMW / Mercedes"),
  L("Other", "Andere", "Другая"),
]);

const autoBudget = question("auto-budget", L("Expected job size", "Erwarteter Auftrag", "Ожидаемый объём"), [
  L("Under €250", "Unter 250 €", "До 250 €"),
  L("€250–800", "250–800 €", "250–800 €"),
  L("Over €800", "Über 800 €", "Больше 800 €"),
]);

const gastroVenue = question("gastro-venue", L("What kind of place?", "Welche Art Betrieb?", "Какое заведение?"), [
  L("Restaurant", "Restaurant", "Ресторан"),
  L("Café", "Café", "Кафе"),
  L("Bar", "Bar", "Бар"),
  L("Delivery", "Lieferdienst", "Доставка"),
]);

const gastroGoal = question("gastro-goal", L("What should the ads fill?", "Was sollen die Ads füllen?", "Что должна заполнить реклама?"), [
  L("Reservations", "Reservierungen", "Брони"),
  L("Weeknight covers", "Gäste unter der Woche", "Гости в будни"),
  L("Private events", "Private Events", "Закрытые события"),
]);

const gastroSize = question("gastro-size", L("Room size", "Größe des Raums", "Размер зала"), [
  L("Up to 40 seats", "Bis 40 Plätze", "До 40 мест"),
  L("40–100 seats", "40–100 Plätze", "40–100 мест"),
  L("100+ seats", "Über 100 Plätze", "Больше 100 мест"),
]);

const gastroShift = question("gastro-shift", L("Which shift is quiet?", "Welche Zeit ist schwach?", "Какая смена пустая?"), [
  L("Lunch", "Mittags", "Обед"),
  L("Monday–Wednesday", "Montag–Mittwoch", "Понедельник–среда"),
  L("After 21:00", "Nach 21 Uhr", "После 21:00"),
]);

const gastroHook = question("gastro-hook", L("Which hook should we run?", "Welchen Hook spielen wir?", "Какой крючок запускаем?"), [
  L("Chef's menu", "Menü des Küchenchefs", "Меню шефа"),
  L("Wine night", "Weinabend", "Винный вечер"),
  L("Business lunch", "Business-Lunch", "Бизнес-ланч"),
]);

const praxisField = question("praxis-field", L("Specialty", "Fachrichtung", "Специализация"), [
  L("General practice", "Allgemeinmedizin", "Общая практика"),
  L("Dental", "Zahnarzt", "Стоматология"),
  L("Physio", "Physiotherapie", "Физиотерапия"),
  L("Other", "Andere", "Другое"),
]);

const praxisGoal = question("praxis-goal", L("Primary goal", "Hauptziel", "Главная цель"), [
  L("New patients", "Neupatienten", "Новые пациенты"),
  L("Online booking", "Online-Termine", "Онлайн-запись"),
  L("More reviews", "Mehr Bewertungen", "Больше отзывов"),
]);

const praxisStart = question("praxis-start", L("When do you want leads?", "Wann sollen Leads kommen?", "Когда нужны лиды?"), [
  L("Immediately", "Sofort", "Сразу"),
  L("Within 30 days", "In 30 Tagen", "В течение 30 дней"),
  L("Still planning", "Noch in Planung", "Пока планируем"),
]);

const praxisVisit = question("praxis-visit", L("Appointment type", "Terminart", "Тип визита"), [
  L("First visit", "Ersttermin", "Первый визит"),
  L("Check-up", "Kontrolle", "Контрольный осмотр"),
  L("Acute", "Akut", "Острая проблема"),
]);

const praxisPay = question("praxis-pay", L("Billing", "Abrechnung", "Оплата"), [
  L("Public insurance", "Gesetzlich", "Госстраховка"),
  L("Private", "Privat", "Частная"),
  L("Self-pay", "Selbstzahler", "Сам плачу"),
]);

const polyNeed = question("poly-need", L("What do you need?", "Was brauchen Sie?", "Что нужно?"), [
  L("Series production", "Serienfertigung", "Серия"),
  L("Prototype", "Prototyp", "Прототип"),
  L("Custom compound", "Compound", "Компаунд"),
]);

const polyVolume = question("poly-volume", L("Volume", "Menge", "Объём"), [
  L("Under 1 t", "Unter 1 t", "До 1 т"),
  L("1–10 t", "1–10 t", "1–10 т"),
  L("Over 10 t", "Über 10 t", "Больше 10 т"),
]);

const polyRole = question("poly-role", L("Your role", "Ihre Rolle", "Ваша роль"), [
  L("Purchasing", "Einkauf", "Закупки"),
  L("Engineering", "Entwicklung", "Разработка"),
  L("Management", "Geschäftsführung", "Руководство"),
]);

const polyMaterial = question("poly-material", L("Material", "Werkstoff", "Материал"), [
  L("Standard polymer", "Standardpolymer", "Стандартный полимер"),
  L("Custom compound", "Sondercompound", "Спецкомпаунд"),
  L("Recyclate", "Rezyklat", "Рециклат"),
]);

const polyUse = question("poly-use", L("Application", "Einsatz", "Применение"), [
  L("Automotive", "Automotive", "Автопром"),
  L("Packaging", "Verpackung", "Упаковка"),
  L("Construction", "Bau", "Строительство"),
]);

const polyNext = question("poly-next", L("Next step", "Nächster Schritt", "Следующий шаг"), [
  L("Sample", "Muster", "Образец"),
  L("Quote", "Angebot", "Коммерческое"),
  L("Technical call", "Technik-Call", "Технический созвон"),
]);

export const niches: Niche[] = [
  {
    id: "auto",
    name: L("Auto service", "Kfz-Werkstatt", "Автосервис"),
    tag: L("Kfz-Werkstatt", "Auto service", "Kfz-Werkstatt"),
    description: L(
      "Inspections, repairs, and tire season — campaigns that fill the workshop diary.",
      "Inspektion, Reparatur und Reifenwechsel — Kampagnen, die den Werkstattkalender füllen.",
      "ТО, ремонт и шиномонтаж — кампании, которые заполняют запись в бокс.",
    ),
    rationale: L(
      "Job, vehicle, timing — then the phone number. People who will not book drop off before the contact step.",
      "Auftrag, Fahrzeug, Zeitpunkt — dann die Nummer. Wer nicht bucht, steigt vor dem Kontakt aus.",
      "Задача, авто, срок — затем телефон. Кто не запишется, отваливается до контакта.",
    ),
    offers: [
      {
        id: "auto-1",
        headline: L(
          "A full workshop bay — without cold calls.",
          "Werkstatt voll — ohne Kaltakquise.",
          "Полный бокс — без холодных звонков.",
        ),
        subhead: L(
          "Inspection, repairs, and tires. The form asks who is ready to book this week.",
          "Inspektion, Reparatur, Reifen. Das Formular fragt, wer diese Woche wirklich bucht.",
          "ТО, ремонт, шины. Форма спрашивает, кто готов записаться на этой неделе.",
        ),
        cta: L("Book a workshop slot", "Werkstatt-Termin sichern", "Записаться в сервис"),
        questions: [autoJob, autoVehicle, autoWhen],
      },
      {
        id: "auto-2",
        headline: L(
          "Inspection this week. Booked in 60 seconds.",
          "Inspektion diese Woche. Termin in 60 Sekunden.",
          "ТО на этой неделе. Запись за 60 секунд.",
        ),
        subhead: L(
          "Urgency and budget first, so the shop calls the jobs that fit the bay.",
          "Dringlichkeit und Budget zuerst — die Werkstatt ruft die Aufträge an, die in die Bucht passen.",
          "Сначала срочность и бюджет — сервис звонит тем заказам, которые встают в бокс.",
        ),
        cta: L("Request this week’s slot", "Slot diese Woche anfragen", "Запросить окно на неделю"),
        questions: [autoUrgent, autoBrand, autoBudget],
      },
      {
        id: "auto-3",
        headline: L(
          "Leads that actually show up for the appointment.",
          "Leads, die zum Termin wirklich erscheinen.",
          "Лиды, которые реально приезжают на запись.",
        ),
        subhead: L(
          "A short qualifier on the job, then a day and a contact window.",
          "Kurzer Qualifier zum Auftrag, dann Tag und Erreichbarkeit.",
          "Короткий квалификатор по работе, затем день и окно для звонка.",
        ),
        cta: L("Hold my appointment", "Meinen Termin halten", "Удержать мою запись"),
        questions: [autoJob, autoWhen, autoVehicle],
      },
    ],
  },
  {
    id: "gastro",
    name: L("Restaurant", "Gastronomie", "Ресторан"),
    tag: L("Gastronomie", "Restaurant", "Gastronomie"),
    description: L(
      "Reservations and weeknight covers from people who already want a table.",
      "Reservierungen und Gäste unter der Woche — von Menschen, die schon einen Tisch wollen.",
      "Брони и гости в будни — от людей, которые уже хотят стол.",
    ),
    rationale: L(
      "Venue, goal, and room size qualify the owner. The guest’s name and phone come last.",
      "Betrieb, Ziel und Raumgröße qualifizieren den Inhaber. Name und Telefon des Gastes kommen zuletzt.",
      "Формат, цель и размер зала квалифицируют владельца. Имя и телефон гостя — в конце.",
    ),
    offers: [
      {
        id: "gastro-1",
        headline: L(
          "Fill tables before the evening starts.",
          "Tische füllen, bevor der Abend beginnt.",
          "Заполните зал до начала вечера.",
        ),
        subhead: L(
          "A reservation offer for rooms that already know which service is empty.",
          "Ein Reservierungsangebot für Räume, die schon wissen, welcher Service leer ist.",
          "Оффер на бронь для залов, которые уже знают, какая посадка пустая.",
        ),
        cta: L("Fill my empty tables", "Leere Tische füllen", "Заполнить пустые столы"),
        questions: [gastroVenue, gastroGoal, gastroSize],
      },
      {
        id: "gastro-2",
        headline: L(
          "Tuesday covers — not only hope for Saturday.",
          "Dienstag voll — nicht nur die Hoffnung auf Samstag.",
          "Вторник полный — не только надежда на субботу.",
        ),
        subhead: L(
          "The form names the quiet shift and the hook, so the ad is not a generic “book now”.",
          "Das Formular nennt die schwache Schicht und den Hook — kein generisches „Jetzt buchen“.",
          "Форма называет пустую смену и крючок — это не общее «забронируйте сейчас».",
        ),
        cta: L("Plan my weeknight push", "Wochenabend-Push planen", "Запланировать будний пуш"),
        questions: [gastroShift, gastroHook, gastroSize],
      },
      {
        id: "gastro-3",
        headline: L(
          "Reservations from Meta — not from hope.",
          "Reservierungen aus Meta — nicht aus Hoffnung.",
          "Брони из Meta — не из надежды.",
        ),
        subhead: L(
          "Three choices, then the phone. The kitchen sees intent before anyone calls back.",
          "Drei Auswahlen, dann das Telefon. Die Küche sieht die Absicht, bevor jemand zurückruft.",
          "Три выбора, затем телефон. Кухня видит намерение до обратного звонка.",
        ),
        cta: L("Get reservation leads", "Reservierungs-Leads holen", "Получить лиды на бронь"),
        questions: [gastroVenue, gastroGoal, gastroShift],
      },
    ],
  },
  {
    id: "praxis",
    name: L("Medical practice", "Praxis", "Медицина"),
    tag: L("Praxis", "Medical practice", "Praxis"),
    description: L(
      "New patients who arrive knowing the treatment, the timing, and why they called.",
      "Neupatienten, die Behandlung, Zeitpunkt und Anrufgrund schon mitbringen.",
      "Новые пациенты, которые уже знают услугу, срок и причину звонка.",
    ),
    rationale: L(
      "Specialty and intent before contact details. The front desk calls people who already fit the chair.",
      "Fachrichtung und Absicht vor den Kontaktdaten. Die Anmeldung ruft Menschen an, die zum Stuhl passen.",
      "Специализация и намерение до контакта. Регистратура звонит тем, кто уже подходит креслу.",
    ),
    offers: [
      {
        id: "praxis-1",
        headline: L(
          "New patients who already know why they are calling.",
          "Neue Patienten, die schon wissen, warum sie anrufen.",
          "Новые пациенты, которые уже знают, зачем звонят.",
        ),
        subhead: L(
          "The form names the specialty, the goal, and when the practice can take the load.",
          "Das Formular nennt Fachrichtung, Ziel und wann die Praxis die Last tragen kann.",
          "Форма называет специализацию, цель и когда практика готова принять поток.",
        ),
        cta: L("Request qualified patients", "Qualifizierte Patienten anfragen", "Запросить квалифицированных пациентов"),
        questions: [praxisField, praxisGoal, praxisStart],
      },
      {
        id: "praxis-2",
        headline: L(
          "The waiting list, under control.",
          "Die Warteliste, unter Kontrolle.",
          "Лист ожидания под контролем.",
        ),
        subhead: L(
          "Visit type and billing filter the click before a coordinator picks up the phone.",
          "Terminart und Abrechnung filtern den Klick, bevor die Koordination zum Hörer greift.",
          "Тип визита и оплата фильтруют клик до того, как координатор берёт трубку.",
        ),
        cta: L("Open a patient slot", "Patienten-Slot öffnen", "Открыть окно для пациента"),
        questions: [praxisVisit, praxisPay, praxisStart],
      },
      {
        id: "praxis-3",
        headline: L(
          "Online appointments — qualified, not random.",
          "Online-Termine — qualifiziert, nicht zufällig.",
          "Онлайн-запись — квалифицированная, не случайная.",
        ),
        subhead: L(
          "A calm form for practices that want the right first visits, not more noise.",
          "Eine ruhige Form für Praxen, die richtige Ersttermine wollen — nicht mehr Lärm.",
          "Спокойная форма для практик, которым нужен правильный первый визит, а не шум.",
        ),
        cta: L("Start patient intake", "Patientenaufnahme starten", "Запустить приём пациентов"),
        questions: [praxisField, praxisVisit, praxisGoal],
      },
    ],
  },
  {
    id: "polymer",
    name: L("Polymer & B2B", "Polymer & B2B", "Промышленность"),
    tag: L("Industrie", "Industry", "Polymer & B2B"),
    description: L(
      "Buyers asking for samples, volumes, and timelines — not brochure collectors.",
      "Einkäufer mit Muster, Menge und Zeitplan — keine Broschüren-Sammler.",
      "Закупщики с образцом, объёмом и сроком — не коллекционеры брошюр.",
    ),
    rationale: L(
      "Need, volume, and role before the phone. Sales talks to buyers who can actually place a sample order.",
      "Bedarf, Menge und Rolle vor dem Telefon. Der Vertrieb spricht mit Einkäufern, die wirklich ein Muster ordern können.",
      "Потребность, объём и роль до телефона. Продажи говорят с теми, кто реально может заказать образец.",
    ),
    offers: [
      {
        id: "poly-1",
        headline: L(
          "B2B inquiries from buyers, not click tourists.",
          "B2B-Anfragen von Einkäufern, nicht von Klicktouristen.",
          "B2B-запросы от закупщиков, не от случайных кликов.",
        ),
        subhead: L(
          "The form asks for the job, the tonnage, and who is filling it in.",
          "Das Formular fragt nach Auftrag, Tonnage und wer es ausfüllt.",
          "Форма спрашивает задачу, тоннаж и кто её заполняет.",
        ),
        cta: L("Request a buyer lead", "Einkäufer-Lead anfragen", "Запросить лид закупщика"),
        questions: [polyNeed, polyVolume, polyRole],
      },
      {
        id: "poly-2",
        headline: L(
          "A sample request in one form.",
          "Musteranfrage in einem Formular.",
          "Запрос образца в одной форме.",
        ),
        subhead: L(
          "Material, application, and the next step — so engineering is not guessing on the callback.",
          "Werkstoff, Einsatz und nächster Schritt — die Entwicklung rät beim Rückruf nicht.",
          "Материал, применение и следующий шаг — разработка не гадает на обратном звонке.",
        ),
        cta: L("Ask for a sample lead", "Muster-Lead anfragen", "Запросить лид на образец"),
        questions: [polyMaterial, polyUse, polyNext],
      },
      {
        id: "poly-3",
        headline: L(
          "Industrial leads with volume and a timeline.",
          "Industrie-Leads mit Menge und Zeitplan.",
          "Промышленные лиды с объёмом и сроком.",
        ),
        subhead: L(
          "Built for polymer and B2B teams that need a qualified inquiry, not a newsletter signup.",
          "Für Polymer- und B2B-Teams, die eine qualifizierte Anfrage brauchen — kein Newsletter-Abo.",
          "Для команд полимеров и B2B, которым нужен квалифицированный запрос, а не подписка.",
        ),
        cta: L("Qualify an industrial lead", "Industrie-Lead qualifizieren", "Квалифицировать промышленный лид"),
        questions: [polyNeed, polyVolume, polyNext],
      },
    ],
  },
];

export const nicheById: Record<NicheId, Niche> = {
  auto: niches[0],
  gastro: niches[1],
  praxis: niches[2],
  polymer: niches[3],
};
