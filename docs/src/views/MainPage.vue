<script setup>
const installNetCode = `
підключити_розширення_з_мережі("https://raw.githubusercontent.com/mavka-ukr/tgbot-extension/main/tgbot.m.js")
`.trim();
const installLocCode = `
підключити_розширення_з_файлу("tgbot.m.js")
`.trim();
</script>

<template>
  <h1 class="docs-content-title">
    Використання
  </h1>

  <p>
    Підключити розширення Мавки для роботи з телеграм-ботами можна напряму з мережі, або з файлу.
  </p>
  <div class="code-window code-window-full">
    <highlightjs
      language="diia"
      :autodetect="false"
      :code="installNetCode"
    />
  </div>
  <br>
  <div class="code-window code-window-full">
    <highlightjs
      language="diia"
      :autodetect="false"
      :code="installLocCode"
    />
  </div>
</template>
