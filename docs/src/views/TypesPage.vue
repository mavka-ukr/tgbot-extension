<script setup>
</script>

<template>
  <h1 class="docs-content-title">Типи</h1>

  <div>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Оновлення
  ідентифікатор_оновлення число
  повідомлення Повідомлення
  відредаговане_повідомлення Повідомлення
  повідомлення_каналу Повідомлення
  відредаговане_повідомлення_каналу Повідомлення
  інлайн_запит ВбудованийЗапит
  вибраний_результат_інлайну ВибранийРезультатПошукуПозастроками
  запит_зворотного_виклику ЗапитЗворотньогоВиклику
  запит_на_доставку ЗапитДоставки
  запит_перед_оформленням ЗапитНапередВідшкодування
  опитування Опитування
  відповідь_на_опитування ВідповідьОпитування
  мій_учасник_чату УчасникаЧатуОновлено
  учасник_чату УчасникаЧатуОновлено
  запит_на_приєднання_до_чату ЗапитНаПриєднанняДоЧату
кінець

Оновлення.назва_типу = &quot;Update&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ІнформаціяПроВебгук
  урл текст
  має_власний_сертифікат логічне
  кількість_оновлень_в_очікуванні число
  інтернет_адреса текст
  дата_останньої_помилки число
  остання_повідомлення_про_помилку текст
  дата_останньої_помилки_синхронізації число
  максимальна_кількість_з'єднань число
  дозволені_оновлення Список
кінець

ІнформаціяПроВебгук.назва_типу = &quot;WebhookInfo&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Користувач
  ідентифікатор число
  є_ботом логічне
  ім'я текст
  прізвище текст
  ім'я_користувача текст
  код_мови текст
  є_преміум логічне
  додано_в_меню_вкладень логічне
  може_приєднуватись_до_груп логічне
  може_читати_всі_повідомлення_групи логічне
  підтримує_інлайн_запити логічне
кінець

Користувач.назва_типу = &quot;User&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Чат
  ідентифікатор число
  тип текст
  назва текст
  ім'я_користувача текст
  ім'я текст
  прізвище текст
  є_форумом логічне
  фото ФотоЧату
  активні_імена_користувачів Список
  ідентифікатор_призначеного_емодзі текст
  біографія текст
  має_приватні_пересилання логічне
  має_обмеження_на_голосові_та_відеоповідомлення логічне
  приєднуйтесь_щоб_надсилати_повідомлення логічне
  приєднання_за_запитом логічне
  опис текст
  посилання_запрошення текст
  закріплене_повідомлення Повідомлення
  дозволи ДозволиЧату
  затримка_у_повільному_режимі число
  час_автоматичного_видалення_повідомлення число
  ввімкнено_агресивний_антиспам логічне
  є_приховані_учасники логічне
  має_захищений_контент логічне
  назва_набору_стікерів текст
  може_встановлювати_набір_стікерів логічне
  ідентифікатор_пов'язаного_чату число
  розташування МісцезнаходженняЧату
кінець

Чат.назва_типу = &quot;Chat&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Повідомлення
  ідентифікатор_повідомлення число
  ідентифікатор_теми_повідомлення число
  від Користувач
  чат_відправника Чат
  дата число
  чат Чат
  відправник_переслання Користувач
  чат_відправника_переслання Чат
  ідентифікатор_повідомлення_відправника_переслання число
  підпис_відправника_переслання текст
  ім'я_відправника_переслання текст
  дата_переслання число
  є_темою_повідомлення логічне
  автоматичне_переслання логічне
  відповідь_на_повідомлення Повідомлення
  через_бота Користувач
  дата_редагування число
  має_захищений_контент логічне
  ідентифікатор_медіагрупи текст
  підпис_автора текст
  текст текст
  сутності Список
  анімація Анімація
  аудіо Аудіо
  документ Документ
  фото Список
  стікер Стікер
  відео Відео
  відео_замітка ВідеоНотатка
  голос Голос
  підпис текст
  сутності_підпису Список
  є_спойлер_медіа логічне
  контакт Контакт
  кубик Кубик
  гра Гра
  опитування Опитування
  місце_зустрічі МісцеЗустрічі
  розташування Місцезнаходження
  нові_учасники_чату Список
  покинув_чат_учасник Користувач
  нова_назва_чату текст
  нове_фото_чату Список
  видалено_фото_чату логічне
  створено_груповий_чат логічне
  створено_супергруповий_чат логічне
  створено_канал_чату логічне
  змінено_таймер_авто_видалення_повідомлень ЗмінаТаймераАвтоВидаленняПовідомлення
  перенесено_до_ідентифікатора_чату число
  перенесено_з_ідентифікатора_чату число
  закріплене_повідомлення Повідомлення
  рахунок Рахунок
  успішна_оплата УспішнаОплата
  користувач_поділився КористувачаПоширено
  чат_поділився ЧатПоширено
  підключений_вебсайт текст
  дозволений_доступ_на_запис ДоступНаПисьмоДозволений
  паспортні_дані ДаніПаспорта
  спрацювала_близькість_сповіщень СпрацюванняБлизькості
  створена_тема_форуму ТемуФорумуСтворено
  відредагована_тема_форуму ТемуФорумуВідредаговано
  закрита_тема_форуму ТемаФорумуЗакрита
  відкрита_тема_форуму_знову ТемаФорумуВідкрита
  прихована_загальна_тема_форуму ЗагальнаТемаФорумуПрихована
  розкрита_загальна_тема_форуму ЗагальнаТемаФорумуВідкрита
  заплановано_відеочат ВідеоЧатЗаплановано
  розпочато_відеочат ВідеоЧатРозпочато
  завершено_відеочат ВідеоЧатЗавершено
  учасники_відеочату_запрошені ЗапрошенняУчасниківВідеоЧату
  дані_вебдодатку ДаніВебДодатку
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

Повідомлення.назва_типу = &quot;Message&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ІдПовідомлення
  ідентифікатор_повідомлення число
кінець

ІдПовідомлення.назва_типу = &quot;MessageId&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура СутністьПовідомлення
  тип текст
  зсув число
  довжина число
  урл текст
  користувач Користувач
  мова текст
  ідентифікатор_спеціального_емодзі текст
кінець

СутністьПовідомлення.назва_типу = &quot;MessageEntity&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РозмірФото
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  ширина число
  висота число
  розмір_файлу число
кінець

РозмірФото.назва_типу = &quot;PhotoSize&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Анімація
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  ширина число
  висота число
  тривалість число
  мініатюра РозмірФото
  ім'я_файлу текст
  мімтип текст
  розмір_файлу число
кінець

Анімація.назва_типу = &quot;Animation&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Аудіо
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  тривалість число
  виконавець текст
  назва текст
  ім'я_файлу текст
  мімтип текст
  розмір_файлу число
  мініатюра РозмірФото
кінець

Аудіо.назва_типу = &quot;Audio&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Документ
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  мініатюра РозмірФото
  ім'я_файлу текст
  мімтип текст
  розмір_файлу число
кінець

Документ.назва_типу = &quot;Document&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Відео
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  ширина число
  висота число
  тривалість число
  мініатюра РозмірФото
  ім'я_файлу текст
  мімтип текст
  розмір_файлу число
кінець

Відео.назва_типу = &quot;Video&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідеоНотатка
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  довжина число
  тривалість число
  мініатюра РозмірФото
  розмір_файлу число
кінець

ВідеоНотатка.назва_типу = &quot;VideoNote&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Голос
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  тривалість число
  мімтип текст
  розмір_файлу число
кінець

Голос.назва_типу = &quot;Voice&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Контакт
  номер_телефону текст
  ім'я текст
  прізвище текст
  ідентифікатор_користувача число
  візитна_картка текст
кінець

Контакт.назва_типу = &quot;Contact&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Кубик
  емодзі текст
  значення число
кінець

Кубик.назва_типу = &quot;Dice&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОпціяОпитування
  текст текст
  кількість_голосуючих число
кінець

ОпціяОпитування.назва_типу = &quot;PollOption&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідповідьОпитування
  ідентифікатор_опитування текст
  користувач Користувач
  ідентифікатори_варіантів_відповідей Список
кінець

ВідповідьОпитування.назва_типу = &quot;PollAnswer&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Опитування
  ідентифікатор текст
  питання текст
  варіанти_відповідей Список
  загальна_кількість_голосуючих число
  опитування_закрите логічне
  анонімне_опитування логічне
  тип текст
  дозволені_множинні_відповіді логічне
  ідентифікатор_правильної_відповіді число
  пояснення текст
  сутності_пояснення Список
  відкритий_період число
  дата_закриття число
кінець

Опитування.назва_типу = &quot;Poll&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Місцезнаходження
  довгота число
  широта число
  горизонтальна_точність число
  активний_період число
  напрямок число
  радіус_сповіщення число
кінець

Місцезнаходження.назва_типу = &quot;Location&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура МісцеЗустрічі
  розташування Місцезнаходження
  назва текст
  адреса текст
  ідентифікатор_Foursquare текст
  тип_Foursquare текст
  ідентифікатор_Google текст
  тип_Google текст
кінець

МісцеЗустрічі.назва_типу = &quot;Venue&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ДаніВебДодатку
  дані текст
  текст_кнопки текст
кінець

ДаніВебДодатку.назва_типу = &quot;WebAppData&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура СпрацюванняБлизькості
  подорожуючий Користувач
  спостерігач Користувач
  відстань число
кінець

СпрацюванняБлизькості.назва_типу = &quot;ProximityAlertTriggered&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗмінаТаймераАвтоВидаленняПовідомлення
  час_автоматичного_видалення_повідомлення число
кінець

ЗмінаТаймераАвтоВидаленняПовідомлення.назва_типу = &quot;MessageAutoDeleteTimerChanged&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ТемуФорумуСтворено
  назва текст
  колір_іконки число
  ідентифікатор_спеціальної_емоджі_іконки текст
кінець

ТемуФорумуСтворено.назва_типу = &quot;ForumTopicCreated&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ТемаФорумуЗакрита
кінець

ТемаФорумуЗакрита.назва_типу = &quot;ForumTopicClosed&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ТемуФорумуВідредаговано
  назва текст
  ідентифікатор_спеціальної_емоджі_іконки текст
кінець

ТемуФорумуВідредаговано.назва_типу = &quot;ForumTopicEdited&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ТемаФорумуВідкрита
кінець

ТемаФорумуВідкрита.назва_типу = &quot;ForumTopicReopened&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗагальнаТемаФорумуПрихована
кінець

ЗагальнаТемаФорумуПрихована.назва_типу = &quot;GeneralForumTopicHidden&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗагальнаТемаФорумуВідкрита
кінець

ЗагальнаТемаФорумуВідкрита.назва_типу = &quot;GeneralForumTopicUnhidden&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КористувачаПоширено
  ідентифікатор_запиту число
  ідентифікатор_користувача число
кінець

КористувачаПоширено.назва_типу = &quot;UserShared&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЧатПоширено
  ідентифікатор_запиту число
  ідентифікатор_чату число
кінець

ЧатПоширено.назва_типу = &quot;ChatShared&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ДоступНаПисьмоДозволений
кінець

ДоступНаПисьмоДозволений.назва_типу = &quot;WriteAccessAllowed&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідеоЧатЗаплановано
  дата_початку число
кінець

ВідеоЧатЗаплановано.назва_типу = &quot;VideoChatScheduled&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідеоЧатРозпочато
кінець

ВідеоЧатРозпочато.назва_типу = &quot;VideoChatStarted&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідеоЧатЗавершено
  тривалість число
кінець

ВідеоЧатЗавершено.назва_типу = &quot;VideoChatEnded&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗапрошенняУчасниківВідеоЧату
  користувачі Список
кінець

ЗапрошенняУчасниківВідеоЧату.назва_типу = &quot;VideoChatParticipantsInvited&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ФотоПрофілю
  загальна_кількість число
  фотографії Список
кінець

ФотоПрофілю.назва_типу = &quot;UserProfilePhotos&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Файл
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  розмір_файлу число
  шлях_до_файлу текст
кінець

Файл.назва_типу = &quot;File&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ІнформаціяВебДодатку
  урл текст
кінець

ІнформаціяВебДодатку.назва_типу = &quot;WebAppInfo&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РозміткаКлавіатуриВідповіді
  клавіатура Список
  постійний логічне
  зміна_розміру_клавіатури логічне
  одноразова_клавіатура логічне
  підказка_для_поля_введення текст
  вибірковий логічне
кінець

РозміткаКлавіатуриВідповіді.назва_типу = &quot;ReplyKeyboardMarkup&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КлавішаКлавіатури
  текст текст
  запит_користувача КлавішаКлавіатуриЗапитатиКористувача
  запит_чату КлавішаКлавіатуриЗапитатиЧат
  запит_контакту логічне
  запит_локації логічне
  запит_опитування КлавішаКлавіатуриЗапитатиОпитування
  веб_додаток ІнформаціяВебДодатку
кінець

КлавішаКлавіатури.назва_типу = &quot;KeyboardButton&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КлавішаКлавіатуриЗапитатиКористувача
  ідентифікатор_запиту число
  користувач_є_ботом логічне
  користувач_має_преміум логічне
кінець

КлавішаКлавіатуриЗапитатиКористувача.назва_типу = &quot;KeyboardButtonRequestUser&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КлавішаКлавіатуриЗапитатиЧат
  ідентифікатор_запиту число
  чат_є_каналом логічне
  чат_є_форумом логічне
  чат_має_ім'я_користувача логічне
  чат_створено логічне
  права_адміністратора_користувача ПраваАдміністратораЧату
  права_адміністратора_бота ПраваАдміністратораЧату
  бот_є_учасником логічне
кінець

КлавішаКлавіатуриЗапитатиЧат.назва_типу = &quot;KeyboardButtonRequestChat&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КлавішаКлавіатуриЗапитатиОпитування
  тип текст
кінець

КлавішаКлавіатуриЗапитатиОпитування.назва_типу = &quot;KeyboardButtonPollType&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПрибратиКлавіатуруВідповіді
  видалити_клавіатуру логічне
  вибірковий логічне
кінець

ПрибратиКлавіатуруВідповіді.назва_типу = &quot;ReplyKeyboardRemove&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РозміткаІнлайнКлавіатури
  інлайн_клавіатура Список
кінець

РозміткаІнлайнКлавіатури.назва_типу = &quot;InlineKeyboardMarkup&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КлавішаІнлайнКлавіатури
  текст текст
  урл текст
  дані_для_виклику текст
  веб_додаток ІнформаціяВебДодатку
  url_входу ПосиланняАвторизації
  переключити_інлайн_запит текст
  переключити_інлайн_запит_поточного_чату текст
  ігри_для_виклику ЗворотнійВикликГра
  оплатити логічне
кінець

КлавішаІнлайнКлавіатури.назва_типу = &quot;InlineKeyboardButton&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПосиланняАвторизації
  урл текст
  переслати_текст текст
  ім'я_бота текст
  запит_на_доступ_до_запису логічне
кінець

ПосиланняАвторизації.назва_типу = &quot;LoginUrl&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗапитЗворотньогоВиклику
  ідентифікатор текст
  від Користувач
  повідомлення Повідомлення
  ідентифікатор_інлайн_повідомлення текст
  інстанція_чату текст
  дані текст
  коротке_ім'я_гри текст
кінець

ЗапитЗворотньогоВиклику.назва_типу = &quot;CallbackQuery&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПримусоваВідповідь
  примусова_відповідь логічне
  підказка_для_поля_введення текст
  вибірковий логічне
кінець

ПримусоваВідповідь.назва_типу = &quot;ForceReply&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ФотоЧату
  ідентифікатор_маленького_файлу текст
  унікальний_ідентифікатор_маленького_файлу текст
  ідентифікатор_великого_файлу текст
  унікальний_ідентифікатор_великого_файлу текст
кінець

ФотоЧату.назва_типу = &quot;ChatPhoto&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПосиланняНаЗапрошенняДоЧату
  посилання_запрошення текст
  створювач Користувач
  створює_запит_на_вступ логічне
  є_первинним логічне
  було_відкликано логічне
  назва текст
  дата_закінчення число
  ліміт_учасників число
  кількість_очікуючих_запитів_на_вступ число
кінець

ПосиланняНаЗапрошенняДоЧату.назва_типу = &quot;ChatInviteLink&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПраваАдміністратораЧату
  анонімне_опитування логічне
  може_керувати_чатом логічне
  може_видаляти_повідомлення логічне
  може_керувати_відеоконференціями логічне
  може_обмежувати_учасників логічне
  може_підвищувати_учасників логічне
  може_змінювати_інформацію логічне
  може_запрошувати_користувачів логічне
  може_публікувати_повідомлення логічне
  може_редагувати_повідомлення логічне
  може_закріплювати_повідомлення логічне
  може_керувати_темами логічне
кінець

ПраваАдміністратораЧату.назва_типу = &quot;ChatAdministratorRights&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура УчасникЧату
кінець

УчасникЧату.назва_типу = &quot;ChatMember&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура УчасникЧатуВласник
  статус текст
  користувач Користувач
  анонімне_опитування логічне
  індивідуальний_заголовок текст
кінець

УчасникЧатуВласник.назва_типу = &quot;ChatMemberOwner&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура УчасникЧатуАдміністратор
  статус текст
  користувач Користувач
  може_бути_змінене логічне
  анонімне_опитування логічне
  може_керувати_чатом логічне
  може_видаляти_повідомлення логічне
  може_керувати_відеоконференціями логічне
  може_обмежувати_учасників логічне
  може_підвищувати_учасників логічне
  може_змінювати_інформацію логічне
  може_запрошувати_користувачів логічне
  може_публікувати_повідомлення логічне
  може_редагувати_повідомлення логічне
  може_закріплювати_повідомлення логічне
  може_керувати_темами логічне
  індивідуальний_заголовок текст
кінець

УчасникЧатуАдміністратор.назва_типу = &quot;ChatMemberAdministrator&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура УчасникЧатуУчасник
  статус текст
  користувач Користувач
кінець

УчасникЧатуУчасник.назва_типу = &quot;ChatMemberMember&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОбмеженийУчасникЧату
  статус текст
  користувач Користувач
  є_учасником логічне
  може_надсилати_повідомлення логічне
  може_надсилати_аудіо логічне
  може_надсилати_документи логічне
  може_надсилати_фото логічне
  може_надсилати_відео логічне
  може_надсилати_відео_з_нотатками логічне
  може_надсилати_голосові_повідомлення логічне
  може_надсилати_опитування логічне
  може_надсилати_інші_повідомлення логічне
  може_додавати_перегляд_вебсторінок логічне
  може_змінювати_інформацію логічне
  може_запрошувати_користувачів логічне
  може_закріплювати_повідомлення логічне
  може_керувати_темами логічне
  до_дати число
кінець

ОбмеженийУчасникЧату.назва_типу = &quot;ChatMemberRestricted&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПокинутийУчасникЧату
  статус текст
  користувач Користувач
кінець

ПокинутийУчасникЧату.назва_типу = &quot;ChatMemberLeft&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗаблокованийУчасникЧату
  статус текст
  користувач Користувач
  до_дати число
кінець

ЗаблокованийУчасникЧату.назва_типу = &quot;ChatMemberBanned&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура УчасникаЧатуОновлено
  чат Чат
  від Користувач
  дата число
  старий_учасник_чату УчасникЧату
  новий_учасник_чату УчасникЧату
  посилання_запрошення ПосиланняНаЗапрошенняДоЧату
кінець

УчасникаЧатуОновлено.назва_типу = &quot;ChatMemberUpdated&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗапитНаПриєднанняДоЧату
  чат Чат
  від Користувач
  ідентифікатор_користувача_в_чаті число
  дата число
  біографія текст
  посилання_запрошення ПосиланняНаЗапрошенняДоЧату
кінець

ЗапитНаПриєднанняДоЧату.назва_типу = &quot;ChatJoinRequest&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ДозволиЧату
  може_надсилати_повідомлення логічне
  може_надсилати_аудіо логічне
  може_надсилати_документи логічне
  може_надсилати_фото логічне
  може_надсилати_відео логічне
  може_надсилати_відео_з_нотатками логічне
  може_надсилати_голосові_повідомлення логічне
  може_надсилати_опитування логічне
  може_надсилати_інші_повідомлення логічне
  може_додавати_перегляд_вебсторінок логічне
  може_змінювати_інформацію логічне
  може_запрошувати_користувачів логічне
  може_закріплювати_повідомлення логічне
  може_керувати_темами логічне
кінець

ДозволиЧату.назва_типу = &quot;ChatPermissions&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура МісцезнаходженняЧату
  розташування Місцезнаходження
  адреса текст
кінець

МісцезнаходженняЧату.назва_типу = &quot;ChatLocation&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ТемаФоруму
  ідентифікатор_теми_повідомлення число
  назва текст
  колір_іконки число
  ідентифікатор_спеціальної_емоджі_іконки текст
кінець

ТемаФоруму.назва_типу = &quot;ForumTopic&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КомандаБота
  команда текст
  опис текст
кінець

КомандаБота.назва_типу = &quot;BotCommand&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ОбсягКомандБота
кінець

ОбсягКомандБота.назва_типу = &quot;BotCommandScope&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура BotCommandScopeDefault
  тип текст
кінець

BotCommandScopeDefault.назва_типу = &quot;BotCommandScopeDefault&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура BotCommandScopeAllPrivateChats
  тип текст
кінець

BotCommandScopeAllPrivateChats.назва_типу = &quot;BotCommandScopeAllPrivateChats&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура BotCommandScopeAllGroupChats
  тип текст
кінець

BotCommandScopeAllGroupChats.назва_типу = &quot;BotCommandScopeAllGroupChats&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура BotCommandScopeAllChatAdministrators
  тип текст
кінець

BotCommandScopeAllChatAdministrators.назва_типу = &quot;BotCommandScopeAllChatAdministrators&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура BotCommandScopeChat
  тип текст
  ідентифікатор_чату число
кінець

BotCommandScopeChat.назва_типу = &quot;BotCommandScopeChat&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура BotCommandScopeChatAdministrators
  тип текст
  ідентифікатор_чату число
кінець

BotCommandScopeChatAdministrators.назва_типу = &quot;BotCommandScopeChatAdministrators&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура BotCommandScopeChatMember
  тип текст
  ідентифікатор_чату число
  ідентифікатор_користувача число
кінець

BotCommandScopeChatMember.назва_типу = &quot;BotCommandScopeChatMember&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КнопкаМеню
кінець

КнопкаМеню.назва_типу = &quot;MenuButton&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КнопкаМенюКоманди
  тип текст
кінець

КнопкаМенюКоманди.назва_типу = &quot;MenuButtonCommands&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КнопкаМенюВебДодаток
  тип текст
  текст текст
  веб_додаток ІнформаціяВебДодатку
кінець

КнопкаМенюВебДодаток.назва_типу = &quot;MenuButtonWebApp&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КнопкаМенюЗаЗамовчуванням
  тип текст
кінець

КнопкаМенюЗаЗамовчуванням.назва_типу = &quot;MenuButtonDefault&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПараметриВідповіді
  перенесено_до_ідентифікатора_чату число
  спробуйте_пізніше число
кінець

ПараметриВідповіді.назва_типу = &quot;ResponseParameters&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВвідМедіа
кінець

ВвідМедіа.назва_типу = &quot;InputMedia&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВхіднеМедіаФото
  тип текст
  медіа текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  має_спойлер логічне
кінець

ВхіднеМедіаФото.назва_типу = &quot;InputMediaPhoto&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВхіднеМедіаВідео
  тип текст
  медіа текст
  мініатюра ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  ширина число
  висота число
  тривалість число
  підтримує_стрімінг логічне
  має_спойлер логічне
кінець

ВхіднеМедіаВідео.назва_типу = &quot;InputMediaVideo&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВхіднеМедіаАнімація
  тип текст
  медіа текст
  мініатюра ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  ширина число
  висота число
  тривалість число
  має_спойлер логічне
кінець

ВхіднеМедіаАнімація.назва_типу = &quot;InputMediaAnimation&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВхіднеМедіаАудіо
  тип текст
  медіа текст
  мініатюра ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  тривалість число
  виконавець текст
  назва текст
кінець

ВхіднеМедіаАудіо.назва_типу = &quot;InputMediaAudio&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВхіднеМедіаДокумент
  тип текст
  медіа текст
  мініатюра ВвідФайлу
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  вимкнути_визначення_типу_контенту логічне
кінець

ВхіднеМедіаДокумент.назва_типу = &quot;InputMediaDocument&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВвідФайлу
кінець

ВвідФайлу.назва_типу = &quot;InputFile&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Стікер
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  тип текст
  ширина число
  висота число
  є_анімованим логічне
  є_відео логічне
  мініатюра РозмірФото
  емодзі текст
  встановити_ім'я текст
  преміум_анімація Файл
  позиція_маски ПозиціяМаски
  ідентифікатор_спеціального_емодзі текст
  розмір_файлу число
кінець

Стікер.назва_типу = &quot;Sticker&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НабірСтікерів
  назва текст
  назва текст
  тип_стікера текст
  є_анімованим логічне
  є_відео логічне
  стікери Список
  мініатюра РозмірФото
кінець

НабірСтікерів.назва_типу = &quot;StickerSet&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПозиціяМаски
  точка текст
  зсув_x число
  зсув_y число
  масштаб число
кінець

ПозиціяМаски.назва_типу = &quot;MaskPosition&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВбудованийЗапит
  ідентифікатор текст
  від Користувач
  запит текст
  зсув текст
  тип_чату текст
  розташування Місцезнаходження
кінець

ВбудованийЗапит.назва_типу = &quot;InlineQuery&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапиту
кінець

РезультатВбудованогоЗапиту.назва_типу = &quot;InlineQueryResult&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуСтаття
  тип текст
  ідентифікатор текст
  назва текст
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
  розмітка_відповіді РозміткаІнлайнКлавіатури
  урл текст
  приховати_посилання логічне
  опис текст
  посилання_на_мініатюру текст
  ширина_мініатюри число
  висота_мініатюри число
кінець

РезультатВбудованогоЗапитуСтаття.назва_типу = &quot;InlineQueryResultArticle&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуФото
  тип текст
  ідентифікатор текст
  посилання_на_фото текст
  посилання_на_мініатюру текст
  ширина_фото число
  висота_фото число
  назва текст
  опис текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

РезультатВбудованогоЗапитуФото.назва_типу = &quot;InlineQueryResultPhoto&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуGIF
  тип текст
  ідентифікатор текст
  посилання_на_GIF текст
  ширина_GIF число
  висота_GIF число
  тривалість_GIF число
  посилання_на_мініатюру текст
  мімтип_мініатюри текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

РезультатВбудованогоЗапитуGIF.назва_типу = &quot;InlineQueryResultGif&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуMPEG4GIF
  тип текст
  ідентифікатор текст
  посилання_на_MPEG4 текст
  ширина_MPEG4 число
  висота_MPEG4 число
  тривалість_MPEG4 число
  посилання_на_мініатюру текст
  мімтип_мініатюри текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

РезультатВбудованогоЗапитуMPEG4GIF.назва_типу = &quot;InlineQueryResultMpeg4Gif&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуВідео
  тип текст
  ідентифікатор текст
  посилання_на_відео текст
  мімтип текст
  посилання_на_мініатюру текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  ширина_відео число
  висота_відео число
  тривалість_відео число
  опис текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

РезультатВбудованогоЗапитуВідео.назва_типу = &quot;InlineQueryResultVideo&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуАудіо
  тип текст
  ідентифікатор текст
  посилання_на_аудіо текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  виконавець текст
  тривалість_аудіо число
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

РезультатВбудованогоЗапитуАудіо.назва_типу = &quot;InlineQueryResultAudio&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуГолос
  тип текст
  ідентифікатор текст
  посилання_на_голосове_повідомлення текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  тривалість_голосового_повідомлення число
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

РезультатВбудованогоЗапитуГолос.назва_типу = &quot;InlineQueryResultVoice&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуДокумент
  тип текст
  ідентифікатор текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  посилання_на_документ текст
  мімтип текст
  опис текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
  посилання_на_мініатюру текст
  ширина_мініатюри число
  висота_мініатюри число
кінець

РезультатВбудованогоЗапитуДокумент.назва_типу = &quot;InlineQueryResultDocument&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуМісцезнаходження
  тип текст
  ідентифікатор текст
  широта число
  довгота число
  назва текст
  горизонтальна_точність число
  активний_період число
  напрямок число
  радіус_сповіщення число
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
  посилання_на_мініатюру текст
  ширина_мініатюри число
  висота_мініатюри число
кінець

РезультатВбудованогоЗапитуМісцезнаходження.назва_типу = &quot;InlineQueryResultLocation&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуЗаклад
  тип текст
  ідентифікатор текст
  широта число
  довгота число
  назва текст
  адреса текст
  ідентифікатор_Foursquare текст
  тип_Foursquare текст
  ідентифікатор_Google текст
  тип_Google текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
  посилання_на_мініатюру текст
  ширина_мініатюри число
  висота_мініатюри число
кінець

РезультатВбудованогоЗапитуЗаклад.назва_типу = &quot;InlineQueryResultVenue&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуКонтакт
  тип текст
  ідентифікатор текст
  номер_телефону текст
  ім'я текст
  прізвище текст
  візитна_картка текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
  посилання_на_мініатюру текст
  ширина_мініатюри число
  висота_мініатюри число
кінець

РезультатВбудованогоЗапитуКонтакт.назва_типу = &quot;InlineQueryResultContact&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РезультатВбудованогоЗапитуГра
  тип текст
  ідентифікатор текст
  коротке_ім'я_гри текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
кінець

РезультатВбудованогоЗапитуГра.назва_типу = &quot;InlineQueryResultGame&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗбереженийРезультатВбудованогоЗапитуФото
  тип текст
  ідентифікатор текст
  ідентифікатор_файлу_фото текст
  назва текст
  опис текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

ЗбереженийРезультатВбудованогоЗапитуФото.назва_типу = &quot;InlineQueryResultCachedPhoto&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗбереженийРезультатВбудованогоЗапитуГіф
  тип текст
  ідентифікатор текст
  ідентифікатор_файлу_GIF текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

ЗбереженийРезультатВбудованогоЗапитуГіф.назва_типу = &quot;InlineQueryResultCachedGif&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗбереженийРезультатВбудованогоЗапитуМпег4Гіф
  тип текст
  ідентифікатор текст
  ідентифікатор_файлу_MPEG4 текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

ЗбереженийРезультатВбудованогоЗапитуМпег4Гіф.назва_типу = &quot;InlineQueryResultCachedMpeg4Gif&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КешованийРезультатПошукуСтікера
  тип текст
  ідентифікатор текст
  ідентифікатор_файлу_стікера текст
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

КешованийРезультатПошукуСтікера.назва_типу = &quot;InlineQueryResultCachedSticker&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КешованийРезультатПошукуДокумента
  тип текст
  ідентифікатор текст
  назва текст
  ідентифікатор_файлу_документа текст
  опис текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

КешованийРезультатПошукуДокумента.назва_типу = &quot;InlineQueryResultCachedDocument&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КешованийРезультатПошукуВідео
  тип текст
  ідентифікатор текст
  ідентифікатор_файлу_відео текст
  назва текст
  опис текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

КешованийРезультатПошукуВідео.назва_типу = &quot;InlineQueryResultCachedVideo&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КешованийРезультатПошукуГолосу
  тип текст
  ідентифікатор текст
  ідентифікатор_файлу_голосового_повідомлення текст
  назва текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

КешованийРезультатПошукуГолосу.назва_типу = &quot;InlineQueryResultCachedVoice&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура КешованийРезультатПошукуАудіо
  тип текст
  ідентифікатор текст
  ідентифікатор_файлу_аудіо текст
  підпис текст
  режим_розбору текст
  сутності_підпису Список
  розмітка_відповіді РозміткаІнлайнКлавіатури
  вхідний_контент_повідомлення ВмістВведенняПовідомлення
кінець

КешованийРезультатПошукуАудіо.назва_типу = &quot;InlineQueryResultCachedAudio&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВмістВведенняПовідомлення
кінець

ВмістВведенняПовідомлення.назва_типу = &quot;InputMessageContent&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВмістВведенняТекстовогоПовідомлення
  текст_повідомлення текст
  режим_розбору текст
  сутності Список
  вимкнути_попередній_перегляд_сторінки логічне
кінець

ВмістВведенняТекстовогоПовідомлення.назва_типу = &quot;InputTextMessageContent&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВмістВведенняПовідомленняПроМісцезнаходження
  широта число
  довгота число
  горизонтальна_точність число
  активний_період число
  напрямок число
  радіус_сповіщення число
кінець

ВмістВведенняПовідомленняПроМісцезнаходження.назва_типу = &quot;InputLocationMessageContent&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВмістВведенняПовідомленняПроМісце
  широта число
  довгота число
  назва текст
  адреса текст
  ідентифікатор_Foursquare текст
  тип_Foursquare текст
  ідентифікатор_Google текст
  тип_Google текст
кінець

ВмістВведенняПовідомленняПроМісце.назва_типу = &quot;InputVenueMessageContent&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВмістВведенняПовідомленняПроКонтакт
  номер_телефону текст
  ім'я текст
  прізвище текст
  візитна_картка текст
кінець

ВмістВведенняПовідомленняПроКонтакт.назва_типу = &quot;InputContactMessageContent&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВмістВведенняПовідомленняПроРахунок
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

ВмістВведенняПовідомленняПроРахунок.назва_типу = &quot;InputInvoiceMessageContent&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВибранийРезультатПошукуПозастроками
  ідентифікатор_результату текст
  від Користувач
  розташування Місцезнаходження
  ідентифікатор_інлайн_повідомлення текст
  запит текст
кінець

ВибранийРезультатПошукуПозастроками.назва_типу = &quot;ChosenInlineResult&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВідправленоПовідомленняВебДодатку
  ідентифікатор_інлайн_повідомлення текст
кінець

ВідправленоПовідомленняВебДодатку.назва_типу = &quot;SentWebAppMessage&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПозначенаЦіна
  мітка текст
  сума число
кінець

ПозначенаЦіна.назва_типу = &quot;LabeledPrice&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Рахунок
  назва текст
  опис текст
  початковий_параметр текст
  валюта текст
  загальна_сума число
кінець

Рахунок.назва_типу = &quot;Invoice&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура АдресаДоставки
  код_країни текст
  область текст
  місто текст
  вулиця_1 текст
  вулиця_2 текст
  поштовий_індекс текст
кінець

АдресаДоставки.назва_типу = &quot;ShippingAddress&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ІнформаціяПроЗамовлення
  назва текст
  номер_телефону текст
  електронна_адреса текст
  адреса_доставки АдресаДоставки
кінець

ІнформаціяПроЗамовлення.назва_типу = &quot;OrderInfo&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ВаріантДоставки
  ідентифікатор текст
  назва текст
  ціни Список
кінець

ВаріантДоставки.назва_типу = &quot;ShippingOption&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура УспішнаОплата
  валюта текст
  загальна_сума число
  інформація_про_рахунок текст
  ідентифікатор_опції_доставки текст
  інформація_про_замовлення ІнформаціяПроЗамовлення
  ідентифікатор_оплати_в_Telegram текст
  ідентифікатор_оплати_провайдера текст
кінець

УспішнаОплата.назва_типу = &quot;SuccessfulPayment&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗапитДоставки
  ідентифікатор текст
  від Користувач
  інформація_про_рахунок текст
  адреса_доставки АдресаДоставки
кінець

ЗапитДоставки.назва_типу = &quot;ShippingQuery&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗапитНапередВідшкодування
  ідентифікатор текст
  від Користувач
  валюта текст
  загальна_сума число
  інформація_про_рахунок текст
  ідентифікатор_опції_доставки текст
  інформація_про_замовлення ІнформаціяПроЗамовлення
кінець

ЗапитНапередВідшкодування.назва_типу = &quot;PreCheckoutQuery&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ДаніПаспорта
  дані Список
  ідентифікаційні_дані ЗашифрованіОбліковіДані
кінець

ДаніПаспорта.назва_типу = &quot;PassportData&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ФайлПаспорта
  ідентифікатор_файлу текст
  унікальний_ідентифікатор_файлу текст
  розмір_файлу число
  дата_файлу число
кінець

ФайлПаспорта.назва_типу = &quot;PassportFile&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗашифрованийЕлементПаспорта
  тип текст
  дані текст
  номер_телефону текст
  електронна_адреса текст
  файли Список
  фронтальна_сторона ФайлПаспорта
  зворотна_сторона ФайлПаспорта
  селфі ФайлПаспорта
  переклад Список
  хеш текст
кінець

ЗашифрованийЕлементПаспорта.назва_типу = &quot;EncryptedPassportElement&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗашифрованіОбліковіДані
  дані текст
  хеш текст
  секрет текст
кінець

ЗашифрованіОбліковіДані.назва_типу = &quot;EncryptedCredentials&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаЕлементуПаспорту
кінець

ПомилкаЕлементуПаспорту.назва_типу = &quot;PassportElementError&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаДанихЕлементуПаспорту
  джерело текст
  тип текст
  ім'я_поля текст
  хеш_даних текст
  повідомлення текст
кінець

ПомилкаДанихЕлементуПаспорту.назва_типу = &quot;PassportElementErrorDataField&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаПередньоїСторониЕлементуПаспорту
  джерело текст
  тип текст
  хеш_файлу текст
  повідомлення текст
кінець

ПомилкаПередньоїСторониЕлементуПаспорту.назва_типу = &quot;PassportElementErrorFrontSide&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаЗворотньоїСторониЕлементуПаспорту
  джерело текст
  тип текст
  хеш_файлу текст
  повідомлення текст
кінець

ПомилкаЗворотньоїСторониЕлементуПаспорту.назва_типу = &quot;PassportElementErrorReverseSide&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаСелфіЕлементуПаспорту
  джерело текст
  тип текст
  хеш_файлу текст
  повідомлення текст
кінець

ПомилкаСелфіЕлементуПаспорту.назва_типу = &quot;PassportElementErrorSelfie&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаФайлуЕлементуПаспорту
  джерело текст
  тип текст
  хеш_файлу текст
  повідомлення текст
кінець

ПомилкаФайлуЕлементуПаспорту.назва_типу = &quot;PassportElementErrorFile&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаФайлівЕлементуПаспорту
  джерело текст
  тип текст
  хеші_файлів Список
  повідомлення текст
кінець

ПомилкаФайлівЕлементуПаспорту.назва_типу = &quot;PassportElementErrorFiles&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаФайлуПерекладуЕлементуПаспорту
  джерело текст
  тип текст
  хеш_файлу текст
  повідомлення текст
кінець

ПомилкаФайлуПерекладуЕлементуПаспорту.назва_типу = &quot;PassportElementErrorTranslationFile&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ПомилкаФайлівПерекладуЕлементуПаспорту
  джерело текст
  тип текст
  хеші_файлів Список
  повідомлення текст
кінець

ПомилкаФайлівПерекладуЕлементуПаспорту.назва_типу = &quot;PassportElementErrorTranslationFiles&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура НевизначенаПомилкаЕлементуПаспорту
  джерело текст
  тип текст
  хеш_елемента текст
  повідомлення текст
кінець

НевизначенаПомилкаЕлементуПаспорту.назва_типу = &quot;PassportElementErrorUnspecified&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура Гра
  назва текст
  опис текст
  фото Список
  текст текст
  текстові_ентіті Список
  анімація Анімація
кінець

Гра.назва_типу = &quot;Game&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура ЗворотнійВикликГра
кінець

ЗворотнійВикликГра.назва_типу = &quot;CallbackGame&quot;`"
      />
    </div>
    <br>
    <div class="code-window code-window-full">
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="`структура РекордУГрі
  позиція число
  користувач Користувач
  оцінка число
кінець

РекордУГрі.назва_типу = &quot;GameHighScore&quot;`"
      />
    </div>
  </div>
</template>
