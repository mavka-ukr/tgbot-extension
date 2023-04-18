<script setup>
const installNetCode = `
взяти "хмарний.пак.укр/телеграм_бот/0.0.1"
`.trim();

const givesCode = `
ТелеграмБот.Бот ;; структура самого бота

ТелеграмБот.Типи ;; модуль, що містить структури типів
;; приклад:
;; ТелеграмБот.Типи.Повідомлення

ТелеграмБот.Методи ;; модуль, що містить структури методів
;; приклад:
;; ТелеграмБот.Методи.НадіслатиПовідомлення
`.trim();

const basicExample = `
взяти "хмарний.пак.укр/телеграм_бот/0.0.1"

бот = ТелеграмБот.Бот(токен="-_-")

дія обробити_оновлення(оновлення)
  друк(оновлення)
кінець

бот.запустити(обробити_оновлення)
`.trim();

const realExample = `
взяти "хмарний.пак.укр/телеграм_бот/0.0.1"

бот = ТелеграмБот.Бот(токен="-_-")

тривала дія обробити_оновлення(оновлення)
  друк(оновлення)

  якщо оновлення.повідомлення не пусто і оновлення.повідомлення.текст рівно "статистика"
    чекати відповідь = отримати_джсон("https://russianwarship.rip/api/v2/statistics/latest")

    статистика = "
вбитих солдат = %(відповідь.data.stats.personnel_units)
танків = %(відповідь.data.stats.tanks)
бронетехніки = %(відповідь.data.stats.armoured_fighting_vehicles)
артилерії = %(відповідь.data.stats.artillery_systems)
літаків = %(відповідь.data.stats.planes)
гелікоптерів = %(відповідь.data.stats.helicopters)
".обрізати()

    чекати бот.виконати(ТелеграмБот.Методи.НадіслатиПовідомлення(
      ідентифікатор_чату=оновлення.повідомлення.чат.ідентифікатор,
      текст=статистика
    ))
  кінець
кінець

бот.запустити(обробити_оновлення)
`.trim();
</script>

<template>
  <h1 class="docs-content-title">
    Використання
  </h1>

  <p>
    Офіційна документація телеграм-ботів знаходиться тут:
    <a target="_blank" class="link external"
       href="https://core.telegram.org/bots/api">core.telegram.org/bots/api</a>
  </p>

  <p>
    Код самого паку знаходиться тут:
    <a target="_blank" class="link external"
       href="https://github.com/mavka-ukr/tgbot-extension">github.com/mavka-ukr/tgbot-extension</a>
  </p>

  <p>
    Детальніше про паки Мавки можна почитати тут:
    <a target="_blank" class="link external"
       href="https://мавка.укр/docs/cloud-paks">мавка.укр/docs/cloud-paks</a>
  </p>

  <p>
    Щоб підключити пак Мавки для роботи з телеграм-ботами необхідно виконати наступну команду:
  </p>
  <div class="code-window code-window-full">
    <highlightjs
      language="diia"
      :autodetect="false"
      :code="installNetCode"
    />
  </div>
  <p>
    Пак додає в контекст модуль <code>ТелеграмБот</code> який містить необхідні структури, дії та модулі для
    роботи з телеграм-ботами.
  </p>
  <p>
    Список елементів, які дає модуль <code>ТелеграмБот</code>:
  </p>
  <div class="code-window code-window-full">
    <highlightjs
      language="diia"
      :autodetect="false"
      :code="givesCode"
    />
  </div>

  <h4>
    Базовий приклад бота:
  </h4>
  <p>
    Цей бот друкує кожне оновлення в консоль.
  </p>
  <div class="code-window code-window-full">
    <highlightjs
      language="diia"
      :autodetect="false"
      :code="basicExample"
    />
  </div>
  <h4>
    Більш реальний приклад бота:
  </h4>
  <p>
    Цей бот вміє показувати статистику втрат росіян на війні.
  </p>
  <div class="code-window code-window-full">
    <highlightjs
      language="diia"
      :autodetect="false"
      :code="realExample"
    />
  </div>
  <br>
  <blockquote>
    УВАГА: структури типів та методів перекладав ChatGPT і, так як їх надто багато, мною вони не перевірялись. Якщо ви
    бачите помилку або покращення - зробіть issue або PR в репозиторій паку на Гітхабі.
  </blockquote>
</template>
