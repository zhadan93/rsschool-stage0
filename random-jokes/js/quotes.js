const russianQuotes = [
  {
    "text": "Гений — это один процент вдохновения и девяносто девять процентов пота.",
    "author": "Томас Эдисон"
  },
  {
    "text": "Вы можете многое увидеть, просто наблюдая.",
    "author": "Йоги Берра"
  },
  {
    "text": "Дом, разделившийся сам в себе, не устоит.",
    "author": "Авраам Линкольн"
  },
  {
    "text": "Сложности возрастают по мере приближения к цели.",
    "author": "Иоганн Вольфганг фон Гёте"
  },
  {
    "text": "Судьба в ваших руках и ни в чьих других",
    "author": "Байрон Пулсифер"
  },
  {
    "text": "Будь вождем, но никогда не господином.",
    "author": "Лао-цзы"
  },
  {
    "text": "Ничего не произойдет, если сначала мы не помечтаем.",
    "author": "Карл Сандберг"
  },
  {
    "text": "Хорошее начало - половина дела.",
    "author": "Аристотель"
  },
  {
    "text": "Жизнь — это опыт обучения, только если вы учитесь.",
    "author": "Йоги Берра"
  },
  {
    "text": "Самодовольство губительно для прогресса.",
    "author": "Маргарет Сангстер"
  },
  {
    "text": "Мир приходит изнутри. Не ищите его снаружи.",
    "author": "Будда"
  },
  {
    "text": "Что отдаешь, то и получаешь.",
    "author": "Байрон Пулсифер"
  },
  {
    "text": "Мы можем научиться любить, только любя.",
    "author": "Айрис Мердок"
  },
  {
    "text": "Жизнь — это перемены. Рост необязателен. Выбирайте с умом.",
    "author": "Карен Кларк"
  },
  {
    "text": "Вы увидите это, когда поверите в это.",
    "author": "Уэйн Дайер"
  },
  {
    "text": "Сегодня - это завтра, о котором мы беспокоимся вчера.",
    "author": ""
  },
  {
    "text": "Легче увидеть ошибки на чужой бумаге.",
    "author": ""
  },
  {
    "text": "Все люди умирают. Не все люди живут по-настоящему.",
    "author": ""
  },
  {
    "text": "Чтобы люди шли позади них.",
    "author": "Лао-цзы"
  },
  {
    "text": "Не имея ничего, он ничего не может потерять.",
    "author": "Уильям Шекспир"
  },
  {
    "text": "Беда - единственная возможность в рабочей одежде.",
    "author": "Генри Дж. Кайзер"
  },
  {
    "text": "Катающийся камень не покрывается мхом.",
    "author": "Публий Сир"
  },
  {
    "text": "Идеи - отправная точка всех состояний.",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Все в жизни - удача.",
    "author": "Дональд Трамп"
  },
  {
    "text": "Лучше ничего не делать, чем ничего не делать.",
    "author": "Лао-цзы"
  },
  {
    "text": "Доверяйте себе. Вы знаете больше, чем думаете.",
    "author": "Бенджамин Спок"
  },
  {
    "text": "Изучай прошлое, если хочешь угадать будущее.",
    "author": "Конфуций"
  },
  {
    "text": "День уже благословен, найди в нем покой.",
    "author": ""
  },
  {
    "text": "От ошибки к ошибке открывается вся правда.",
    "author": "Зигмунд Фрейд"
  },
  {
    "text": "Хорошо сделано лучше, чем хорошо сказано.",
    "author": "Бенджамин Франклин"
  },
  {
    "text": "Откусите больше, чем сможете прожевать, а потом прожуйте.",
    "author": "Элла Уильямс"
  },
  {
    "text": "Сделайте свое собственное спасение. Не полагайтесь на других.",
    "author": "Будда"
  },
  {
    "text": "Один сегодняшний день стоит двух завтрашних.",
    "author": "Бенджамин Франклин"
  },
  {
    "text": "Как только вы выберете надежду, все возможно.",
    "author": "Кристофер Рив"
  },
  {
    "text": "Бог всегда выбирает самый простой путь.",
    "author": "Альберт Эйнштейн"
  },
  {
    "text": "Один неудачник движется к успеху.",
    "author": "Чарльз Кеттеринг"
  },
  {
    "text": "Из малого начинаются великие дела.",
    "author": ""
  },
  {
    "text": "Обучение - это сокровище, которое повсюду будет следовать за своим владельцем",
    "author": "Китайская пословица"
  },
  {
    "text": "Будь таким, каким хочешь казаться.",
    "author": "Сократ"
  },
  {
    "text": "Мир всегда в движении.",
    "author": "В. Найпол"
  },
  {
    "text": "Никогда не путайте действие с достижением.",
    "author": "Джон Вуден"
  },
  {
    "text": "То, что тебя беспокоит, управляет тобой.",
    "author": "Хэддон Робинсон"
  },
  {
    "text": "Человек смотрит в будущее с прошлым.",
    "author": "Перл Бак"
  },
  {
    "text": "Цели - это топливо в топке достижений.",
    "author": "Брайан Трейси"
  },
  {
    "text": "Кто сеет добродетель, пожинает честь.",
    "author": "Леонардо да Винчи"
  },
  {
    "text": "Будьте добры, когда это возможно. Это всегда возможно.",
    "author": "Далай-лама"
  },
  {
    "text": "Разговорами рис не сваришь.",
    "author": "Китайская пословица"
  },
  {
    "text": "Способен тот, кто думает, что он способен.",
    "author": "Будда"
  },
  {
    "text": "Цель без плана — это просто желание.",
    "author": "Ларри Элдер"
  },
  {
    "text": "Чтобы добиться успеха, мы должны сначала поверить, что можем.",
    "author": "Майкл Корда"
  },
  {
    "text": "Учитесь у вчерашнего дня, живите сегодняшним днем, надейтесь на завтрашний день.",
    "author": "Альберт Эйнштейн"
  },
  {
    "text": "Сорняк — это не более чем замаскированный цветок.",
    "author": "Джеймс Лоуэлл"
  },
  {
    "text": "Делай или не делай. Нет никакой попытки.",
    "author": "Йода"
  },
  {
    "text": "Все серьезные дерзости начинаются изнутри.",
    "author": "Гарриет Бичер-Стоу"
  },
  {
    "text": "Лучший учитель — это опыт, извлеченный из неудач.",
    "author": "Байрон Пулсифер"
  },
  {
    "text": "Подумайте, насколько сложной была бы физика, если бы частицы могли думать.",
    "author": "Мюррей Гелл-Манн"
  },
  {
    "text": "Любовь - это цветок, которому нужно дать расти.",
    "author": "Джон Леннон"
  },
  {
    "text": "Не ждите. Время никогда не будет подходящим.",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Время — самый мудрый советник из всех.",
    "author": "Перикл"
  },
  {
    "text": "Вы отдаете, прежде чем получаете.",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Мудрость начинается с удивления.",
    "author": "Сократ"
  },
  {
    "text": "Без мужества мудрость не приносит плодов.",
    "author": "Бальтасар Грациан"
  },
  {
    "text": "Перемены во всем приятны.",
    "author": "Аристотель"
  },
  {
    "text": "То, чего вы боитесь, требует действия, чтобы его преодолеть.",
    "author": "Байрон Пулсифер"
  },
  {
    "text": "Когда производительность превышает амбиции, совпадение называется успехом.",
    "author": "Каллен Хайтауэр"
  },
  {
    "text": "Когда говорят дела, слова ничто.",
    "author": "Африканская пословица"
  },
  {
    "text": "Настоящая магия в отношениях означает отсутствие осуждения других.",
    "author": "Уэйн Дайер"
  },
  {
    "text": "Я никогда не думаю о будущем. Оно наступает достаточно скоро.",
    "author": "Альберт Эйнштейн"
  },
  {
    "text": "Умение делать приходит от делания.",
    "author": "Ральф Эмерсон"
  },
  {
    "text": "Мудрость — высшая часть счастья.",
    "author": "Софокл"
  },
  {
    "text": "Я считаю, что каждый человек рождается талантливым.",
    "author": "Майя Энджелоу"
  },
  {
    "text": "Важные принципы могут и должны оставаться неизменными.",
    "author": "Авраам Линкольн"
  },
  {
    "text": "Совершение нового действия приносит новые силы.",
    "author": "Ричард Эванс"
  },
  {
    "text": "Годы учат многому, чего дни никогда не узнают.",
    "author": "Ральф Эмерсон"
  },
  {
    "text": "Наше недоверие очень дорого стоит.",
    "author": "Ральф Эмерсон"
  },
  {
    "text": "Все знают дорогу, лишь немногие идут по ней.",
    "author": "Бодхидхарма"
  },
  {
    "text": "Великий талант находит счастье в исполнении.",
    "author": "Иоганн Вольфганг фон Гёте"
  },
  {
    "text": "Вера в себя - лучший и безопасный курс.",
    "author": "Микеланджело"
  },
  {
    "text": "Мужество идет от неудачи к неудаче, не теряя энтузиазма.",
    "author": "Уинстон Черчилль"
  },
  {
    "text": "Два самых могущественных воина - это терпение и время.",
    "author": "Лев Толстой"
  },
  {
    "text": "Предвидеть трудности, управляя легкими.",
    "author": "Лао-цзы"
  },
  {
    "text": "Те, кто свободен от обиженных мыслей, обязательно обретут покой.",
    "author": "Будда"
  },
  {
    "text": "Короткое высказывание часто содержит много мудрости.",
    "author": "Софокл"
  },
  {
    "text": "Чтобы образовалась радуга, нужны и солнечный свет, и дождь.",
    "author": ""
  },
  {
    "text": "Красивое не бывает идеальным.",
    "author": ""
  },
  {
    "text": "Делай только то, что подсказывает тебе сердце.",
    "author": "Принцесса Диана"
  },
  {
    "text": "Жизнь — это движение: мы дышим, едим, ходим, двигаемся!",
    "author": "Джон Пьерракос"
  },
  {
    "text": "Никто не может заставить вас чувствовать себя хуже без вашего согласия.",
    "author": "Элеонора Рузвельт"
  },
  {
    "text": "Доказывайте свои ограничения, и, конечно же, они ваши.",
    "author": "Ричард Бах"
  },
  {
    "text": "Удача — это то, что случается, когда подготовка встречается с возможностью.",
    "author": "Сенека"
  },
  {
    "text": "Победа принадлежит самым упорным.",
    "author": "Наполеон Бонапарт"
  },
  {
    "text": "Люби всех, доверяй немногим, никому не причиняй зла.",
    "author": "Уильям Шекспир"
  },
  {
    "text": "Чтобы выиграть, вы должны рассчитывать на победу.",
    "author": "Ричард Бах"
  },
  {
    "text": "Цель — это мечта с дедлайном.",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Вы можете это сделать, если верите, что можете!",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Ставь высокие цели и не останавливайся, пока не достигнешь их.",
    "author": "Бо Джексон"
  },
  {
    "text": "Каждый новый день - это еще один шанс изменить свою жизнь.",
    "author": ""
  },
  {
    "text": "Улыбайтесь, дышите и идите медленно.",
    "author": "Тич Нат Хан"
  },
  {
    "text": "Никто не поверит в вас, если вы сами не поверите в себя.",
    "author": "Либераче"
  },
  {
    "text": "Делай больше, чем мечта: работай.",
    "author": "Уильям Артур Уорд"
  },
  {
    "text": "Ни один человек никогда не был мудрым случайно.",
    "author": "Сенека"
  },
  {
    "text": "Одни гонятся за счастьем, другие его создают.",
    "author": ""
  },
  {
    "text": "Тот, у кого кружится голова, думает, что мир вертится.",
    "author": "Уильям Шекспир"
  },
  {
    "text": "Не портите настоящее разрушенным прошлым.",
    "author": "Эллен Гилкрист"
  },
  {
    "text": "Сделай что-нибудь замечательное, люди могут подражать этому.",
    "author": "Альберт Швейцер"
  },
  {
    "text": "Мы делаем то, что делаем, потому что верим.",
    "author": ""
  },
  {
    "text": "Каждый день делайте что-то одно, что вас пугает.",
    "author": "Элеонора Рузвельт"
  },
  {
    "text": "Если вы не можете молчать, будьте умны и вдумчивы.",
    "author": "Байрон Пулсифер"
  },
  {
    "text": "Кто смотрит наружу, тот видит сны; кто смотрит внутрь, тот просыпается.",
    "author": "Карл Юнг"
  },
  {
    "text": "О чем мы думаем, тем мы и становимся.",
    "author": "Будда"
  },
  {
    "text": "Выполняется самый короткий ответ.",
    "author": "лорд Герберт"
  },
  {
    "text": "Все наши знания берут свое начало в нашем восприятии.",
    "author": "Леонардо да Винчи"
  },
  {
    "text": "Чем сильнее вы падаете, тем выше подпрыгиваете.",
    "author": ""
  },
  {
    "text": "Доверие к своей интуиции часто спасает нас от катастрофы.",
    "author": "Энн Уилсон Шеф"
  },
  {
    "text": "Правда сильна, и она побеждает.",
    "author": "Соджорнер Истина"
  },
  {
    "text": "Завтра с сегодняшним днем!",
    "author": "Элизабет Браунинг"
  },
  {
    "text": "Молчание — это забор вокруг мудрости.",
    "author": "Немецкая пословица"
  },
  {
    "text": "Общество развивает остроумие, но одно его созерцание формирует гениальность.",
    "author": "Мадам де Сталь"
  },
  {
    "text": "Самые простые вещи часто бывают самыми верными.",
    "author": "Ричард Бах"
  },
  {
    "text": "Все улыбаются на одном языке.",
    "author": ""
  },
  {
    "text": "Вчера я осмелился бороться. Сегодня я осмелился победить.",
    "author": "Бернадетт Девлин"
  },
  {
    "text": "Никакое алиби не спасет вас от принятия на себя ответственности.",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Если вы можете об этом мечтать, вы можете это сделать.",
    "author": "Уолт Дисней"
  },
  {
    "text": "Лучше хорошо съездить, чем приехать.",
    "author": "Будда"
  },
  {
    "text": "Жизнь сжимается или расширяется пропорционально мужеству.",
    "author": "Анаис Нин"
  },
  {
    "text": "Вы должны верить в себя.",
    "author": "Сунь Цзы"
  },
  {
    "text": "Наше намерение создает нашу реальность.",
    "author": "Уэйн Дайер"
  },
  {
    "text": "Молчание — верный друг, который никогда не предаст.",
    "author": "Конфуций"
  },
  {
    "text": "Характер развивается в потоке жизни.",
    "author": "Иоганн Вольфганг фон Гёте"
  },
  {
    "text": "Из маленьких желудей вырастают могучие дубы.",
    "author": "Американская пословица"
  },
  {
    "text": "Вы не можете остановить волны, но вы можете научиться серфингу.",
    "author": "Джон Кабат-Зинн"
  },
  {
    "text": "Реальность не соответствует идеалу, но подтверждает его.",
    "author": "Гюстав Флобер"
  },
  {
    "text": "Говори тихо, если говоришь о любви.",
    "author": "Уильям Шекспир"
  },
  {
    "text": "Действительно великий талант находит свое счастье в исполнении.",
    "author": "Иоганн Вольфганг фон Гёте"
  },
  {
    "text": "Реальность оставляет многое для воображения.",
    "author": "Джон Леннон"
  },
  {
    "text": "Лучшее лекарство от гнева — промедление.",
    "author": "Сенека"
  },
  {
    "text": "В росте содержится зародыш счастья.",
    "author": "Перл Бак"
  },
  {
    "text": "Вы можете делать то, что разумно, или решать, что возможно.",
    "author": ""
  },
  {
    "text": "Ничто так не укрепляет authorитет, как молчание.",
    "author": "Леонардо да Винчи"
  },
  {
    "text": "Куда бы вы ни пошли, идите со всем своим сердцем.",
    "author": "Конфуций"
  },
  {
    "text": "Единственное, что действительно ценно, — это интуиция.",
    "author": "Альберт Эйнштейн"
  },
  {
    "text": "Удача — другое название целеустремленности.",
    "author": "Ральф Эмерсон"
  },
  {
    "text": "Радуги извиняются за гневное небо.",
    "author": "Сильвия Вуарол"
  },
  {
    "text": "Дружба не имеет большого значения. Это миллион мелочей.",
    "author": ""
  },
  {
    "text": "Время — это самое ценное, что может потратить мужчина.",
    "author": "Теофраст"
  },
  {
    "text": "Что бы ни случилось, бери на себя ответственность.",
    "author": "Тони Роббинс"
  },
  {
    "text": "Опыт — это просто название, которое мы даем нашим ошибкам.",
    "author": "Оскар Уайльд"
  },
  {
    "text": "Я думаю, и это все, чем я являюсь.",
    "author": "Уэйн Дайер"
  },
  {
    "text": "Хороший план сегодня лучше идеального плана завтра.",
    "author": ""
  },
  {
    "text": "Если обувь не подходит, нужно ли менять ногу?",
    "author": "Глория Стейнем"
  },
  {
    "text": "Каждый день приносит свои подарки.",
    "author": "Марк Аврелий"
  },
  {
    "text": "Когда мы останавливаемся, чтобы подумать, мы часто упускаем свою возможность.",
    "author": "Публий Сир"
  },
  {
    "text": "Жизнь — это не поиск себя. Жизнь — это создание себя.",
    "author": "Бернард Шоу"
  },
  {
    "text": "Чтобы привнести что-то в свою жизнь, представьте, что это уже есть.",
    "author": "Ричард Бах"
  },
  {
    "text": "Начинайте плести, и Бог даст вам нить.",
    "author": "Немецкая пословица"
  },
  {
    "text": "Чем больше вы узнаете себя, тем больше вы прощаете себя.",
    "author": "Конфуций"
  },
  {
    "text": "Кто-то помнит, кому-то небезразлично, твое имя шепчет в чьих-то молитвах.",
    "author": ""
  },
  {
    "text": "Без веры ничего невозможно. С ней нет ничего невозможного.",
    "author": "Мэри Бетьюн"
  },
  {
    "text": "Как только мы примем наши ограничения, мы выйдем за них.",
    "author": "Альберт Эйнштейн"
  },
  {
    "text": "Не поддавайтесь своим проблемам, руководствуйтесь своими мечтами.",
    "author": ""
  },
  {
    "text": "Все, чего мы с уверенностью ожидаем, становится нашим собственным самосбывающимся пророчеством.",
    "author": "Брайан Трейси"
  },
  {
    "text": "Все, что вы можете себе представить, реально.",
    "author": "Пабло Пикассо"
  },
  {
    "text": "Страх — это фотолаборатория, где развиваются негативы.",
    "author": "Усман Асиф"
  },
  {
    "text": "Настоящая мудрость — это непоколебимая решимость.",
    "author": "Наполеон Бонапарт"
  },
  {
    "text": "Жизнь — это цветок, для которого любовь — мед.",
    "author": "Виктор Гюго"
  },
  {
    "text": "Свобода — это право жить так, как мы хотим.",
    "author": "Эпиктет"
  },
  {
    "text": "Измени свои мысли, измени свою жизнь!",
    "author": ""
  },
  {
    "text": "Никогда не игнорируйте интуицию, но никогда не верьте, что этого достаточно.",
    "author": "Роберт Хеллер"
  },
  {
    "text": "Потеря — это не что иное, как изменение, а изменение — это наслаждение природы.",
    "author": "Марк Аврелий"
  },
  {
    "text": "Кто-то особенный, только если вы ему об этом расскажете.",
    "author": "Байрон Пулсифер"
  },
  {
    "text": "Сегодня то завтра, о котором вы беспокоились вчера.",
    "author": ""
  },
  {
    "text": "Нет пути к счастью, путь к счастью есть.",
    "author": "Тич Нат Хан"
  },
  {
    "text": "От улыбки день всегда кажется ярче.",
    "author": ""
  },
  {
    "text": "Споткнуться может предотвратить падение.",
    "author": ""
  },
  {
    "text": "Кто больше говорит, тот быстрее устает.",
    "author": "Лао-цзы"
  },
  {
    "text": "Кто доволен, тот богат.",
    "author": "Лао-цзы"
  },
  {
    "text": "То, чего мы достигнем внутри, изменит внешнюю реальность.",
    "author": "Плутарх"
  },
  {
    "text": "Наша сила вырастает из наших слабостей.",
    "author": "Ральф Уолдо Эмерсон"
  },
  {
    "text": "Мы должны стать тем изменением, которое хотим видеть.",
    "author": "Махатма Ганди"
  },
  {
    "text": "Счастье заключается в том, чтобы делать, а не просто владеть.",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Отдайте свое будущее в хорошие руки.",
    "author": ""
  },
  {
    "text": "Мы выбираем свою судьбу по тому, как относимся к другим.",
    "author": "Остроумие"
  },
  {
    "text": "Ни одна снежинка в лавине никогда не чувствует себя виноватой.",
    "author": "Вольтер"
  },
  {
    "text": "Удача сопутствует смелым.",
    "author": "Вергилий"
  },
  {
    "text": "Я верю только в одно: в силу человеческой воли.",
    "author": "Иосиф Сталин"
  },
  {
    "text": "Лучший выход всегда через.",
    "author": "Роберт Фрост"
  },
  {
    "text": "Разум с трудом разучивает то, что давно выучил.",
    "author": "Сенека"
  },
  {
    "text": "Я уничтожаю своих врагов, когда делаю их своими друзьями.",
    "author": "Авраам Линкольн"
  },
  {
    "text": "Нет сада без сорняков.",
    "author": "Томас Фуллер"
  },
  {
    "text": "Нет неудачи, кроме как в том, чтобы больше не пытаться.",
    "author": "Элберт Хаббард"
  },
  {
    "text": "Добрые слова откроют железную дверь.",
    "author": "Турецкая пословица"
  },
  {
    "text": "Проблемы - это только возможности с шипами на них.",
    "author": "Хью Миллер"
  },
  {
    "text": "Жизнь — это всего лишь шанс вырастить душу.",
    "author": "А. Пауэлл Дэвис"
  },
  {
    "text": "Горы нельзя преодолеть, кроме как по извилистым тропам.",
    "author": "Иоганн Вольфганг фон Гёте"
  },
  {
    "text": "Пусть сад пробуждения наших сердец расцветет сотнями цветов.",
    "author": "Тич Нат Хан"
  },
  {
    "text": "Удача помогает смелым.",
    "author": "Джон Драйден"
  },
  {
    "text": "Сохрани верность мечтам своей юности.",
    "author": "Фридрих фон Шиллер"
  },
  {
    "text": "Ты никогда не проиграешь, пока не перестанешь пытаться.",
    "author": "Майк Дитка"
  },
  {
    "text": "Наука — это организованное знание. Мудрость — это организованная жизнь.",
    "author": "Иммануил Кант"
  },
  {
    "text": "Знать недостаточно, нужно применить!",
    "author": "Иоганн Вольфганг фон Гёте"
  },
  {
    "text": "Сильные убеждения завоевывают сильных мужчин, а затем делают их сильнее.",
    "author": "Ричард Бах"
  },
  {
    "text": "Осень — это вторая весна, когда каждый листок — цветок.",
    "author": "Альбер Камю"
  },
  {
    "text": "Если вы поддадитесь ветру, вы сможете оседлать его.",
    "author": "Тони Моррисон"
  },
  {
    "text": "Держитесь на солнце, и вы не сможете увидеть тень.",
    "author": "Хелен Келлер"
  },
  {
    "text": "Напишите свои планы карандашом и дайте Богу ластик.",
    "author": "Пауло Коэльо"
  },
  {
    "text": "Вдохновение существует, но оно должно найти нас в работе.",
    "author": "Пабло Пикассо"
  },
  {
    "text": "Выбирайте сражения, достаточно большие, чтобы иметь значение, и достаточно маленькие, чтобы побеждать.",
    "author": "Джонатан Козол"
  },
  {
    "text": "Не компрометируй себя. Ты - все, что у тебя есть.",
    "author": "Дженис Джоплин"
  },
  {
    "text": "Короткое высказывание часто содержит много мудрости.",
    "author": "Софокл"
  },
  {
    "text": "Трудности — это то, что показывает человеку, кто он есть.",
    "author": "Эпиктет"
  },
  {
    "text": "Когда вы сомневаетесь в своей силе, вы даете силу своим сомнениям.",
    "author": "Оноре де Бальзак"
  },
  {
    "text": "Причина скрыта. Следствие видно всем.",
    "author": "Овидий"
  },
  {
    "text": "Благоразумный вопрос - половина мудрости.",
    "author": "Фрэнсис Бэкон"
  },
  {
    "text": "Путь к успеху лежит в массированных, решительных действиях.",
    "author": "Тони Роббинс"
  },
  {
    "text": "Я позволяю своей интуиции вести меня по пути.",
    "author": "Мануэль Пуч"
  },
  {
    "text": "Природа забирает все способности, которые не используются.",
    "author": "Уильям Р. Индж"
  },
  {
    "text": "Если хочешь стать писателем, пиши.",
    "author": "Эпиктет"
  },
  {
    "text": "Нет пути к процветанию, путь к процветанию.",
    "author": "Уэйн Дайер"
  },
  {
    "text": "Либо ты управляешь днем, либо день управляет тобой.",
    "author": "Джим Рон"
  },
  {
    "text": "Лучше ничего не знать, чем знать наполовину.",
    "author": "Публий Сир"
  },
  {
    "text": "Следуй своим инстинктам. Вот где проявляется истинная мудрость.",
    "author": "Опра Уинфри"
  },
  {
    "text": "Никогда не было хорошего ножа из плохой стали.",
    "author": "Бенджамин Франклин"
  },
  {
    "text": "Чтобы совершать великие дела, мы должны не только действовать, но и мечтать.",
    "author": "Анатол Франс"
  },
  {
    "text": "Терпение — спутник мудрости.",
    "author": "Святой Августин"
  },
  {
    "text": "Разум - это все. Кем, как вы думаете, вы становитесь.",
    "author": "Будда"
  },
  {
    "text": "Чтобы наслаждаться жизнью, мы должны слегка прикасаться к ней.",
    "author": "Вольтер"
  },
  {
    "text": "Чтобы летать, нам нужно сопротивление.",
    "author": "Майя Лин"
  },
  {
    "text": "То, что вы видите, зависит от того, что вы ищете.",
    "author": ""
  },
  {
    "text": "У сердца есть причины, о которых разум не знает.",
    "author": "Блез Паскаль"
  },
  {
    "text": "Будьте велики в действии, как и в мыслях.",
    "author": "Уильям Шекспир"
  },
  {
    "text": "Воображение правит миром.",
    "author": "Наполеон Бонапарт"
  },
  {
    "text": "Добрые слова многого не стоят. Но они многого добиваются.",
    "author": "Блез Паскаль"
  },
  {
    "text": "Нет большего вреда, чем потраченное впустую время.",
    "author": "Микеланджело"
  },
  {
    "text": "Интуиция подскажет мыслящему уму, куда смотреть дальше.",
    "author": "Джонас Солк"
  },
  {
    "text": "Беспокоенность придает маленькому предмету большую тень.",
    "author": ""
  },
  {
    "text": "Страхи — не более чем состояние души.",
    "author": "Наполеон Хилл"
  },
  {
    "text": "Путешествие в тысячу миль начинается с одного шага.",
    "author": "Лао-цзы"
  },
  {
    "text": "Эффективность заключается в том, чтобы делать все правильно, а в том, чтобы делать правильные вещи.",
    "author": "Питер Друкер"
  },
  {
    "text": "Пылайте огнём, который никогда не погаснет.",
    "author": "Луиза Сиджеа"
  },
  {
    "text": "Не плачь, потому что все закончилось. Улыбнись, потому что это было.",
    "author": "Доктор Сьюз"
  },
  {
    "text": "Нет проще сказать. Да легче сказать.",
    "author": "Джейсон Фрид"
  },
  {
    "text": "Ошибаться - это ничто, если вы не продолжаете помнить об этом.",
    "author": "Конфуций"
  },
  {
    "text": "Вчерашние хоумраны не помогут выиграть сегодняшние игры.",
    "author": "Бэйб Рут"
  },
  {
    "text": "Молчание глубоко, как Вечность, Речь мелка, как Время.",
    "author": "Карлайл"
  },
  {
    "text": "Не душите друг друга. Никто не может расти в тени.",
    "author": "Лео Ф. Бускалья"
  },
  {
    "text": "Муравей в движении делает больше, чем дремлющий бык",
    "author": "Лао-цзы"
  },
  {
    "text": "Вы не можете пожать руку со сжатым кулаком.",
    "author": "Индира Ганди"
  },
  {
    "text": "Хорошее решение основывается на знаниях, а не на цифрах.",
    "author": "Платон"
  },
  {
    "text": "Осторожный редко ошибается.",
    "author": "Конфуций"
  },
  {
    "text": "Если нет борьбы, нет прогресса.",
    "author": "Фредерик Дуглас"
  },
  {
    "text": "Где большая любовь, там всегда и чудеса.",
    "author": "Уилла Кэтер"
  },
  {
    "text": "Время, которое вы любите тратить, не было потрачено зря.",
    "author": "Джон Леннон"
  },
  {
    "text": "У каждой проблемы есть подарок для вас в руках.",
    "author": "Ричард Бах"
  },
  {
    "text": "Грусть уносится на крыльях времени.",
    "author": "Жан де ла Фонтен"
  },
  {
    "text": "Я часто сожалел о своей речи, но никогда о своем молчании.",
    "author": "Публий Сир"
  },
  {
    "text": "Никогда не откладывай на завтра то, что можно сделать сегодня.",
    "author": "Томас Джефферсон"
  },
  {
    "text": "Разумы подобны парашютам. Они функционируют только в открытом состоянии.",
    "author": "Томас Дьюар"
  },
  {
    "text": "Если мужчина делает все возможное, что еще остается?",
    "author": "Джордж Паттон"
  },
  {
    "text": "Секрет успеха в постоянстве цели.",
    "author": "Бенджамин Дизраэли"
  },
  {
    "text": "Жизнь — это прогресс, а не станция.",
    "author": "Ральф Эмерсон"
  },
  {
    "text": "Все времена года прекрасны для человека, который несет в себе счастье.",
    "author": "Гораций Фрисс"
  },
  {
    "text": "Чтобы избежать критики, ничего не делайте, ничего не говорите, будьте никем.",
    "author": "Элберт Хаббард"
  },
  {
    "text": "Все меняется, ничто не исчезает.",
    "author": "Овидий"
  },
  {
    "text": "Отсутствие делает сердце более любящим.",
    "author": "Хейнс Бейли"
  },
  {
    "text": "Воображение — это самый высокий воздушный змей, на котором можно запустить.",
    "author": "Лорен Бэколл"
  },
  {
    "text": "Начало познания — открытие чего-то, чего мы не понимаем.",
    "author": "Фрэнк Герберт"
  },
  {
    "text": "Любовь не заставляет мир вращаться, любовь - это то, что делает поездку стоящей.",
    "author": "Элизабет Браунинг"
  },
  {
    "text": "Всякий раз, когда вы исключили невозможное, все, что остается, каким бы невероятным оно ни было, должно быть правдой.",
    "author": "Артур Конан Дойл"
  },
  {
    "text": "Хорошая древесина не растет легко; чем сильнее ветер, тем крепче деревья.",
    "author": "Дж. Уиллард Мариотт"
  },
  {
    "text": "Я считаю, что мы принципиально одинаковы и имеем одинаковый базовый потенциал.",
    "author": "Далай-лама"
  },
  {
    "text": "Ветер и волны всегда на стороне лучших мореплавателей.",
    "author": "Эдвард Гиббон"
  },
  {
    "text": "Будущее принадлежит тем, кто верит в красоту своей мечты.",
    "author": "Элеонора Рузвельт"
  },
  {
    "text": "Чтобы получить то, чего у вас никогда не было, нужно сделать то, чего вы никогда не делали.",
    "author": ""
  },
  {
    "text": "Будьте благодарны, если вы чего-то не знаете, потому что это дает вам возможность учиться.",
    "author": ""
  },
  {
    "text": "Сила исходит не от физических возможностей. Она исходит из неукротимой воли.",
    "author": "Махатма Ганди"
  },
  {
    "text": "Каждое несчастье, с которым вы столкнетесь, принесет с собой семена завтрашней удачи.",
    "author": "Ог Мандино"
  },
  {
    "text": "Простить - значит освободить заключенного и понять, что заключенным был ты.",
    "author": "Льюис Б. Смедес"
  },
  {
    "text": "В разлуке кроется великое несчастье мира, в сострадании кроется истинная сила мира.",
    "author": "Будда"
  },
  {
    "text": "Страстно веря в то, чего еще нет, мы создаем это.",
    "author": "Никос Казандзакис"
  },
  {
    "text": "Отпустить - это не конец света, это начало новой жизни.",
    "author": ""
  },
  {
    "text": "Все великие исполнители, с которыми я работал, питаются личной мечтой.",
    "author": "Джон Элиот"
  },
  {
    "text": "Одним из преимуществ беспорядка является то, что он постоянно делает захватывающие открытия.",
    "author": "А. А. Милн"
  },
  {
    "text": "Я никогда не вижу, что сделано, я вижу только то, что еще предстоит сделать.",
    "author": "Мария Кюри"
  },
  {
    "text": "Начните сразу жить и считать каждый отдельный день отдельной жизнью.",
    "author": "Сенека"
  },
  {
    "text": "Если вы не знаете, куда идете, скорее всего, вы окажетесь где-то еще.",
    "author": "Лоуренс Питер"
  },
  {
    "text": "Не так важно знать все, как ценить то, что мы узнаем.",
    "author": "Ханна Мор"
  },
  {
    "text": "Райская птица садится только на руку, которая не держится.",
    "author": "Джон Берри"
  },
  {
    "text": "Думай как мудрец, но общайся на языке людей.",
    "author": "Уильям Йейтс"
  },
  {
    "text": "Попрактикуйтесь, ради бога, в мелочах, а затем переходите к большему.",
    "author": "Эпиктет"
  },
  {
    "text": "Если не знаешь, в какой порт плывешь, никакой ветер не попутный.",
    "author": "Сенека"
  },
  {
    "text": "Наша величайшая слава не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз, когда мы падаем.",
    "author": ""
  },
  {
    "text": "Быть правым сильно переоценено. Даже остановившиеся часы показывают правильное время дважды в день.",
    "author": ""
  },
  {
    "text": "Расстраиваться из-за того, чего у вас нет, значит растрачивать то, что у вас есть.",
    "author": "Кен С. Киз"
  },
  {
    "text": "Если бы мы делали то, на что способны, мы бы сами изумились.",
    "author": "Томас Эдисон"
  },
  {
    "text": "Ничего в жизни не нужно бояться. Ее нужно только понимать.",
    "author": "Мария Кюри"
  },
  {
    "text": "Успешные люди лучше задают вопросы и в результате получают лучшие ответы.",
    "author": "Тони Роббинс"
  },
  {
    "text": "Любовь не слепа; она просто позволяет видеть то, чего не видят другие.",
    "author": ""
  },
  {
    "text": "Жизнь — это процесс. Мы — это процесс. Вселенная — это процесс.",
    "author": "Энн Шеф"
  },
  {
    "text": "Я думаю, что каким-то образом мы узнаем, кто мы на самом деле, а затем живем с этим решением.",
    "author": "Элеонора Рузвельт"
  },
  {
    "text": "Мы узнаем о том, что сказали, от тех, кто слушает нашу речь.",
    "author": "Кеннет Паттон"
  },
]

export default russianQuotes;