# ТелеграмБот

Розширення Мавки для роботи з телеграм-ботами.

## Використання

```
взяти "хмарний.пак.укр/телеграм_бот/0.0.1"

бот = ТелеграмБот.Бот(токен="ВАШ_ТОКЕН")

дія обробити_оновлення(оновлення)
  друк(оновлення)
кінець

бот.запустити(обробити_оновлення)
```

## Приклад

```
взяти "хмарний.пак.укр/телеграм_бот/0.0.1"

бот = ТелеграмБот.Бот(токен="ВАШ_ТОКЕН")

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
```
