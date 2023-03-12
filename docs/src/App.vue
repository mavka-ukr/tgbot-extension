<script setup>
import { ref } from "vue";
import router from "@/router/index.js";

const sidebarShown = ref(false);

router.afterEach(() => {
  sidebarShown.value = false;
});
</script>

<template>
  <div class="page">
    <main class="container">
      <div id="docs" class="docs">
        <div class="docs-sidebar" :class="{ 'shown': sidebarShown }">
          <div class="docs-sidebar-head">
            <RouterLink to="/" class="logo">
              <img class="logo-light" src="@/assets/images/logo.png" alt="">
              <img class="logo-dark" src="@/assets/images/logo.png" alt="">
            </RouterLink>
          </div>
          <div class="docs-sidebar-menu">
            <RouterLink to="/" class="docs-sidebar-menu-item" active-class="active">
              Використання
            </RouterLink>
            <RouterLink to="/types" class="docs-sidebar-menu-item" active-class="active">
              Типи
            </RouterLink>
            <RouterLink to="/methods" class="docs-sidebar-menu-item" active-class="active">
              Методи
            </RouterLink>
          </div>
        </div>
        <div class="docs-content">
          <RouterView />
        </div>

        <button @click="sidebarShown = !sidebarShown" class="nav-toggle">
          {{ sidebarShown ? "×" : "☰" }}
        </button>
      </div>
    </main>

    <footer class="footer">
      <a href="https://мавка.укр" target="_blank">мавка.укр</a>
    </footer>
  </div>
</template>

<style lang="scss">
$sidebarWidth: 20rem;

.docs {
  width: 100%;
}

#app, body, html {
  height: 100%;
}

.docs-sidebar {
  position: fixed;

  z-index: 1000;

  height: calc(100% - 2rem);
  width: $sidebarWidth;

  overflow: auto;

  border-radius: 1rem;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  &-head {
    padding: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  &-menu {
    margin-top: 2rem;
    padding-bottom: 4rem;

    &-item {
      padding: .5rem;

      display: block;

      text-decoration: none;
      border: 1px solid var(--text-color);
      border-bottom: none;

      cursor: pointer;

      color: var(--text-color);

      &:last-child {
        border-bottom: 1px solid var(--text-color);
      }

      &:hover {
        background-color: rgba(var(--text-color_rgb), .1);
      }

      &.active {
        background-color: var(--text-color);
        color: var(--bg-color);
      }
    }
  }

  @media screen and (max-width: 956px) {
    width: 100%;
    height: 100%;

    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    padding: 1rem;

    background-color: var(--bg-color);

    &:not(.shown) {
      display: none;
    }
  }
}

.docs-content {
  margin-left: $sidebarWidth;

  padding: 0 3rem;
  padding-bottom: 4rem;

  &-title {
    text-align: center;
  }

  @media screen and (max-width: 956px) {
    margin-left: 0;

    padding: 0 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  code {
    padding: .2rem .5rem;
    background-color: black;
    color: white;
    border-radius: 1rem;
  }

  ul {
    li {
      margin-bottom: .5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .hljs {
    max-width: 446px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  pre, code {
    font-family: "Fira Code", monospace !important;
    font-weight: 500;
  }

  .code-window {
    position: relative;

    background: black;
    padding: .5rem;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    font-size: 1rem;

    &-buttons {
      margin-top: .5rem;

      display: flex;

      .button {
        font-size: .8rem;
      }
    }

    pre {
      margin: 0;

      overflow-x: auto;
    }
  }

  .code-window-full {
    .hljs {
      max-width: 100% !important;
    }
  }
}

.footer {
  margin-top: auto;
  padding: 2rem 1rem 2rem 1rem;

  text-align: center;
  color: var(--hint-color);
}
</style>

