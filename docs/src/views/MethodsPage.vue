<template>
  <h1 class="docs-content-title">Методи</h1>

  <div>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиОновлення
  зсув число
  ліміт число
  таймаут число
  дозволені_оновлення Список
кінець

ОтриматиОновлення.назва_методу = &quot;getUpdates&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиВебхук
  урл текст
  сертифікат ВвідФайлу
  інтернет_адреса текст
  максимальна_кількість_з'єднань число
  дозволені_оновлення Список
  видалити_очікуючі_оновлення логічне
  секретний_токен текст
кінець

ВстановитиВебхук.назва_методу = &quot;setWebhook&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВидалитиВебхук
  видалити_очікуючі_оновлення логічне
кінець

ВидалитиВебхук.назва_методу = &quot;deleteWebhook&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиІнформаціюВебхука
кінець

ОтриматиІнформаціюВебхука.назва_методу = &quot;getWebhookInfo&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиСебе
кінець

ОтриматиСебе.назва_методу = &quot;getMe&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Вийти
кінець

Вийти.назва_методу = &quot;logOut&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Закрити
кінець

Закрити.назва_методу = &quot;close&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиПовідомлення
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  текст текст
  режим_розбору текст
  сутності Список
  вимкнути_попередній_перегляд_сторінки логічне
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиПовідомлення.назва_методу = &quot;sendMessage&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПереслатиПовідомлення
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  від_ід_чату число
  відключити_сповіщення логічне
  захист_вмісту логічне
  ідентифікатор_повідомлення число
кінець

ПереслатиПовідомлення.назва_методу = &quot;forwardMessage&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КопіюватиПовідомлення
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  від_ід_чату число
  ідентифікатор_повідомлення число
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

КопіюватиПовідомлення.назва_методу = &quot;copyMessage&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиФото
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  фото ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  має_спойлер логічне
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиФото.назва_методу = &quot;sendPhoto&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиАудіо
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  аудіо ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  тривалість число
  виконавець текст
  назва текст
  мініатюра ВвідФайлу
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиАудіо.назва_методу = &quot;sendAudio&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиДокумент
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  документ ВвідФайлу
  мініатюра ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  вимкнути_визначення_типу_контенту логічне
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиДокумент.назва_методу = &quot;sendDocument&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиВідео
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  відео ВвідФайлу
  тривалість число
  ширина число
  висота число
  мініатюра ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  має_спойлер логічне
  підтримує_стрімінг логічне
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиВідео.назва_методу = &quot;sendVideo&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиАнімацію
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  анімація ВвідФайлу
  тривалість число
  ширина число
  висота число
  мініатюра ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  має_спойлер логічне
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиАнімацію.назва_методу = &quot;sendAnimation&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиГолосовеПовідомлення
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  голос ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  тривалість число
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиГолосовеПовідомлення.назва_методу = &quot;sendVoice&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиВідеоповідомлення
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  відео_замітка ВвідФайлу
  тривалість число
  довжина число
  мініатюра ВвідФайлу
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиВідеоповідомлення.назва_методу = &quot;sendVideoNote&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиМедіаГрупу
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  медіа Список
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
кінець

НадіслатиМедіаГрупу.назва_методу = &quot;sendMediaGroup&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиЛокацію
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  широта число
  довгота число
  горизонтальна_точність число
  активний_період число
  напрямок число
  радіус_сповіщення число
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиЛокацію.назва_методу = &quot;sendLocation&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиЖивуЛокаціюПовідомлення
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
  широта число
  довгота число
  горизонтальна_точність число
  напрямок число
  радіус_сповіщення число
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

РедагуватиЖивуЛокаціюПовідомлення.назва_методу = &quot;editMessageLiveLocation&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗупинитиЖивуЛокаціюПовідомлення
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

ЗупинитиЖивуЛокаціюПовідомлення.назва_методу = &quot;stopMessageLiveLocation&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиМісцеЗустрічі
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  широта число
  довгота число
  назва текст
  адреса текст
  ідентифікатор_Foursquare текст
  тип_Foursquare текст
  ідентифікатор_Google текст
  тип_Google текст
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиМісцеЗустрічі.назва_методу = &quot;sendVenue&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиКонтакт
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  номер_телефону текст
  ім'я текст
  прізвище текст
  візитна_картка текст
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиКонтакт.назва_методу = &quot;sendContact&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиОпитування
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  питання текст
  варіанти_відповідей Список
  анонімне_опитування логічне
  тип текст
  дозволені_множинні_відповіді логічне
  ідентифікатор_правильної_відповіді число
  пояснення текст
  режим_розбору_пояснення текст
  сутності_пояснення Список
  відкритий_період число
  дата_закриття число
  опитування_закрите логічне
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиОпитування.назва_методу = &quot;sendPoll&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиКубик
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  емодзі текст
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиКубик.назва_методу = &quot;sendDice&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиДіюЧату
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  операція текст
кінець

НадіслатиДіюЧату.назва_методу = &quot;sendChatAction&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиФотографіїПрофілюКористувача
  ідентифікатор_користувача число
  зсув число
  ліміт число
кінець

ОтриматиФотографіїПрофілюКористувача.назва_методу = &quot;getUserProfilePhotos&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиФайл
  ідентифікатор_файлу текст
кінець

ОтриматиФайл.назва_методу = &quot;getFile&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗаблокуватиУчасникаЧату
  ідентифікатор_чату число
  ідентифікатор_користувача число
  до_дати число
  відкликати_повідомлення логічне
кінець

ЗаблокуватиУчасникаЧату.назва_методу = &quot;banChatMember&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РозблокуватиУчасникаЧату
  ідентифікатор_чату число
  ідентифікатор_користувача число
  тільки_якщо_забанено логічне
кінець

РозблокуватиУчасникаЧату.назва_методу = &quot;unbanChatMember&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура restrictChatMember
  ідентифікатор_чату число
  ідентифікатор_користувача число
  дозволи ДозволиЧату
  використовувати_незалежні_права_чату логічне
  до_дати число
кінець

restrictChatMember.назва_методу = &quot;restrictChatMember&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура promoteChatMember
  ідентифікатор_чату число
  ідентифікатор_користувача число
  анонімне_опитування логічне
  може_керувати_чатом логічне
  може_публікувати_повідомлення логічне
  може_редагувати_повідомлення логічне
  може_видаляти_повідомлення логічне
  може_керувати_відеоконференціями логічне
  може_обмежувати_учасників логічне
  може_підвищувати_учасників логічне
  може_змінювати_інформацію логічне
  може_запрошувати_користувачів логічне
  може_закріплювати_повідомлення логічне
  може_керувати_темами логічне
кінець

promoteChatMember.назва_методу = &quot;promoteChatMember&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура setChatAdministratorCustomTitle
  ідентифікатор_чату число
  ідентифікатор_користувача число
  індивідуальний_заголовок текст
кінець

setChatAdministratorCustomTitle.назва_методу = &quot;setChatAdministratorCustomTitle&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура banChatSenderChat
  ідентифікатор_чату число
  ід_чату_відправника число
кінець

banChatSenderChat.назва_методу = &quot;banChatSenderChat&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура unbanChatSenderChat
  ідентифікатор_чату число
  ід_чату_відправника число
кінець

unbanChatSenderChat.назва_методу = &quot;unbanChatSenderChat&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиДозволиЧату
  ідентифікатор_чату число
  дозволи ДозволиЧату
  використовувати_незалежні_права_чату логічне
кінець

ВстановитиДозволиЧату.назва_методу = &quot;setChatPermissions&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЕкспортуватиПосиланняЗапрошенняЧату
  ідентифікатор_чату число
кінець

ЕкспортуватиПосиланняЗапрошенняЧату.назва_методу = &quot;exportChatInviteLink&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура СтворитиПосиланняЗапрошенняЧату
  ідентифікатор_чату число
  назва текст
  дата_закінчення число
  ліміт_учасників число
  створює_запит_на_вступ логічне
кінець

СтворитиПосиланняЗапрошенняЧату.назва_методу = &quot;createChatInviteLink&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиПосиланняЗапрошенняЧату
  ідентифікатор_чату число
  посилання_запрошення текст
  назва текст
  дата_закінчення число
  ліміт_учасників число
  створює_запит_на_вступ логічне
кінець

РедагуватиПосиланняЗапрошенняЧату.назва_методу = &quot;editChatInviteLink&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідкликатиПосиланняЗапрошенняЧату
  ідентифікатор_чату число
  посилання_запрошення текст
кінець

ВідкликатиПосиланняЗапрошенняЧату.назва_методу = &quot;revokeChatInviteLink&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗатверджуватиЗапитНаВступДоЧату
  ідентифікатор_чату число
  ідентифікатор_користувача число
кінець

ЗатверджуватиЗапитНаВступДоЧату.назва_методу = &quot;approveChatJoinRequest&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідхилятиЗапитНаВступДоЧату
  ідентифікатор_чату число
  ідентифікатор_користувача число
кінець

ВідхилятиЗапитНаВступДоЧату.назва_методу = &quot;declineChatJoinRequest&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиФотоЧату
  ідентифікатор_чату число
  фото ВвідФайлу
кінець

ВстановитиФотоЧату.назва_методу = &quot;setChatPhoto&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВидалитиФотоЧату
  ідентифікатор_чату число
кінець

ВидалитиФотоЧату.назва_методу = &quot;deleteChatPhoto&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиНазвуЧату
  ідентифікатор_чату число
  назва текст
кінець

ВстановитиНазвуЧату.назва_методу = &quot;setChatTitle&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиОписЧату
  ідентифікатор_чату число
  опис текст
кінець

ВстановитиОписЧату.назва_методу = &quot;setChatDescription&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗакріпитиПовідомленняВЧаті
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  відключити_сповіщення логічне
кінець

ЗакріпитиПовідомленняВЧаті.назва_методу = &quot;pinChatMessage&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідкріпитиПовідомленняВЧаті
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
кінець

ВідкріпитиПовідомленняВЧаті.назва_методу = &quot;unpinChatMessage&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідкріпитиВсіПовідомленняВЧаті
  ідентифікатор_чату число
кінець

ВідкріпитиВсіПовідомленняВЧаті.назва_методу = &quot;unpinAllChatMessages&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВийтиЗЧату
  ідентифікатор_чату число
кінець

ВийтиЗЧату.назва_методу = &quot;leaveChat&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиІнформаціюПроЧат
  ідентифікатор_чату число
кінець

ОтриматиІнформаціюПроЧат.назва_методу = &quot;getChat&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиАдміністраторівЧату
  ідентифікатор_чату число
кінець

ОтриматиАдміністраторівЧату.назва_методу = &quot;getChatAdministrators&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиКількістьУчасниківЧату
  ідентифікатор_чату число
кінець

ОтриматиКількістьУчасниківЧату.назва_методу = &quot;getChatMemberCount&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиІнформаціюПроУчасникаЧату
  ідентифікатор_чату число
  ідентифікатор_користувача число
кінець

ОтриматиІнформаціюПроУчасникаЧату.назва_методу = &quot;getChatMember&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиНабірСтікерівЧату
  ідентифікатор_чату число
  назва_набору_стікерів текст
кінець

ВстановитиНабірСтікерівЧату.назва_методу = &quot;setChatStickerSet&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВидалитиНабірСтікерівЧату
  ідентифікатор_чату число
кінець

ВидалитиНабірСтікерівЧату.назва_методу = &quot;deleteChatStickerSet&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиСтікериІконокТемФоруму
кінець

ОтриматиСтікериІконокТемФоруму.назва_методу = &quot;getForumTopicIconStickers&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура СтворитиТемуФоруму
  ідентифікатор_чату число
  назва текст
  колір_іконки число
  ідентифікатор_спеціальної_емоджі_іконки текст
кінець

СтворитиТемуФоруму.назва_методу = &quot;createForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиТемуФоруму
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  назва текст
  ідентифікатор_спеціальної_емоджі_іконки текст
кінець

РедагуватиТемуФоруму.назва_методу = &quot;editForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗакритиТемуФоруму
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
кінець

ЗакритиТемуФоруму.назва_методу = &quot;closeForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідкритиТемуФорумуЗнову
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
кінець

ВідкритиТемуФорумуЗнову.назва_методу = &quot;reopenForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВидалитиТемуФоруму
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
кінець

ВидалитиТемуФоруму.назва_методу = &quot;deleteForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідкріпитиВсіПовідомленняТемиФоруму
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
кінець

ВідкріпитиВсіПовідомленняТемиФоруму.назва_методу = &quot;unpinAllForumTopicMessages&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиЗагальнуТемуФоруму
  ідентифікатор_чату число
  назва текст
кінець

РедагуватиЗагальнуТемуФоруму.назва_методу = &quot;editGeneralForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗакритиЗагальнуТемуФоруму
  ідентифікатор_чату число
кінець

ЗакритиЗагальнуТемуФоруму.назва_методу = &quot;closeGeneralForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідкритиЗагальнуТемуФоруму
  ідентифікатор_чату число
кінець

ВідкритиЗагальнуТемуФоруму.назва_методу = &quot;reopenGeneralForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура СховатиЗагальнуТемуФоруму
  ідентифікатор_чату число
кінець

СховатиЗагальнуТемуФоруму.назва_методу = &quot;hideGeneralForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПоказатиЗагальнуТемуФоруму
  ідентифікатор_чату число
кінець

ПоказатиЗагальнуТемуФоруму.назва_методу = &quot;unhideGeneralForumTopic&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідповістиНаЗапитCallback
  ід_запиту_зворотного_виклику текст
  текст текст
  показати_сповіщення логічне
  урл текст
  час_кешування число
кінець

ВідповістиНаЗапитCallback.назва_методу = &quot;answerCallbackQuery&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиМоїКоманди
  команди Список
  діапазон ОбсягКомандБота
  код_мови текст
кінець

ВстановитиМоїКоманди.назва_методу = &quot;setMyCommands&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВидалитиМоїКоманди
  діапазон ОбсягКомандБота
  код_мови текст
кінець

ВидалитиМоїКоманди.назва_методу = &quot;deleteMyCommands&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиМоїКоманди
  діапазон ОбсягКомандБота
  код_мови текст
кінець

ОтриматиМоїКоманди.назва_методу = &quot;getMyCommands&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиКнопкуМенюЧату
  ідентифікатор_чату число
  кнопка_меню КнопкаМеню
кінець

ВстановитиКнопкуМенюЧату.назва_методу = &quot;setChatMenuButton&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиКнопкуМенюЧату
  ідентифікатор_чату число
кінець

ОтриматиКнопкуМенюЧату.назва_методу = &quot;getChatMenuButton&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиМоїПраваАдміністратора
  права ПраваАдміністратораЧату
  для_каналів логічне
кінець

ВстановитиМоїПраваАдміністратора.назва_методу = &quot;setMyDefaultAdministratorRights&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиМоїПраваАдміністратора
  для_каналів логічне
кінець

ОтриматиМоїПраваАдміністратора.назва_методу = &quot;getMyDefaultAdministratorRights&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиТекстПовідомлення
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
  текст текст
  режим_розбору текст
  сутності Список
  вимкнути_попередній_перегляд_сторінки логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

РедагуватиТекстПовідомлення.назва_методу = &quot;editMessageText&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиПідписПовідомлення
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

РедагуватиПідписПовідомлення.назва_методу = &quot;editMessageCaption&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиМедіаПовідомлення
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
  медіа ВвідМедіа
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

РедагуватиМедіаПовідомлення.назва_методу = &quot;editMessageMedia&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РедагуватиРозміткуВідповідіПовідомлення
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

РедагуватиРозміткуВідповідіПовідомлення.назва_методу = &quot;editMessageReplyMarkup&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗупинитиОпитування
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

ЗупинитиОпитування.назва_методу = &quot;stopPoll&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВидалитиПовідомлення
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
кінець

ВидалитиПовідомлення.назва_методу = &quot;deleteMessage&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиСтікер
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  стікер ВвідФайлу
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиСтікер.назва_методу = &quot;sendSticker&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиНабірСтікерів
  назва текст
кінець

ОтриматиНабірСтікерів.назва_методу = &quot;getStickerSet&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиСтікериСпеціальногоЕмодзі
  ід_власних_емодзі Список
кінець

ОтриматиСтікериСпеціальногоЕмодзі.назва_методу = &quot;getCustomEmojiStickers&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗавантажитиФайлСтікера
  ідентифікатор_користувача число
  png_стікер ВвідФайлу
кінець

ЗавантажитиФайлСтікера.назва_методу = &quot;uploadStickerFile&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура СтворитиНовийНабірСтікерів
  ідентифікатор_користувача число
  назва текст
  назва текст
  png_стікер ВвідФайлу
  tgs_стікер ВвідФайлу
  webm_стікер ВвідФайлу
  тип_стікера текст
  емодзі текст
  позиція_маски ПозиціяМаски
кінець

СтворитиНовийНабірСтікерів.назва_методу = &quot;createNewStickerSet&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ДодатиСтікерДоНабору
  ідентифікатор_користувача число
  назва текст
  png_стікер ВвідФайлу
  tgs_стікер ВвідФайлу
  webm_стікер ВвідФайлу
  емодзі текст
  позиція_маски ПозиціяМаски
кінець

ДодатиСтікерДоНабору.назва_методу = &quot;addStickerToSet&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиПозиціюСтікераВНаборі
  стікер текст
  позиція число
кінець

ВстановитиПозиціюСтікераВНаборі.назва_методу = &quot;setStickerPositionInSet&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВидалитиСтікерЗНабору
  стікер текст
кінець

ВидалитиСтікерЗНабору.назва_методу = &quot;deleteStickerFromSet&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиЕскізНаборуСтікерів
  назва текст
  ідентифікатор_користувача число
  мініатюра ВвідФайлу
кінець

ВстановитиЕскізНаборуСтікерів.назва_методу = &quot;setStickerSetThumb&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідповістиНаInlineЗапит
  ід_вбудованого_запиту текст
  результати Список
  час_кешування число
  особистий логічне
  наступний_зсув текст
  текст_перемикача_повідомлення текст
  параметр_перемикача_повідомлення текст
кінець

ВідповістиНаInlineЗапит.назва_методу = &quot;answerInlineQuery&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідповістиНаЗапитWebApp
  ід_запиту_веб_додатка текст
  результат РезультатВбудованогоЗапиту
кінець

ВідповістиНаЗапитWebApp.назва_методу = &quot;answerWebAppQuery&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиРахунок
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  назва текст
  опис текст
  підзаголовок текст
  токен_провайдера текст
  валюта текст
  ціни Список
  максимальна_сума_чайових число
  рекомендовані_суми_чайових Список
  початковий_параметр текст
  дані_провайдера текст
  посилання_на_фото текст
  розмір_фото число
  ширина_фото число
  висота_фото число
  потрібне_ім'я логічне
  потрібен_номер_телефону логічне
  потрібна_електронна_адреса логічне
  потрібна_адреса_доставки логічне
  надіслати_номер_телефону_провайдеру логічне
  надіслати_електронну_адресу_провайдеру логічне
  гнучкість логічне
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиРахунок.назва_методу = &quot;sendInvoice&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура СтворитиПосиланняРахунку
  назва текст
  опис текст
  підзаголовок текст
  токен_провайдера текст
  валюта текст
  ціни Список
  максимальна_сума_чайових число
  рекомендовані_суми_чайових Список
  дані_провайдера текст
  посилання_на_фото текст
  розмір_фото число
  ширина_фото число
  висота_фото число
  потрібне_ім'я логічне
  потрібен_номер_телефону логічне
  потрібна_електронна_адреса логічне
  потрібна_адреса_доставки логічне
  надіслати_номер_телефону_провайдеру логічне
  надіслати_електронну_адресу_провайдеру логічне
  гнучкість логічне
кінець

СтворитиПосиланняРахунку.назва_методу = &quot;createInvoiceLink&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідповістиНаЗапитДоставки
  ід_запиту_доставки текст
  ок логічне
  варіанти_доставки Список
  повідомлення_про_помилку текст
кінець

ВідповістиНаЗапитДоставки.назва_методу = &quot;answerShippingQuery&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідповістиНаПеревіркаРозрахунку
  ід_запиту_попереднього_розрахунку текст
  ок логічне
  повідомлення_про_помилку текст
кінець

ВідповістиНаПеревіркаРозрахунку.назва_методу = &quot;answerPreCheckoutQuery&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиПомилкиДанихПаспорту
  ідентифікатор_користувача число
  помилки Список
кінець

ВстановитиПомилкиДанихПаспорту.назва_методу = &quot;setPassportDataErrors&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НадіслатиГру
  ідентифікатор_чату число
  ідентифікатор_теми_повідомлення число
  коротке_ім'я_гри текст
  відключити_сповіщення логічне
  захист_вмісту логічне
  відповісти_на_повідомлення_ід число
  дозволити_відправку_без_відповіді логічне
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

НадіслатиГру.назва_методу = &quot;sendGame&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВстановитиОчкиГри
  ідентифікатор_користувача число
  оцінка число
  примусити логічне
  вимкнути_редагування_повідомлення логічне
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
кінець

ВстановитиОчкиГри.назва_методу = &quot;setGameScore&quot;
`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОтриматиРекордиГри
  ідентифікатор_користувача число
  ідентифікатор_чату число
  ідентифікатор_повідомлення число
  ідентифікатор_інлайн_повідомлення текст
кінець

ОтриматиРекордиГри.назва_методу = &quot;getGameHighScores&quot;
`"
      />
    </div>
  </div>
</template>
