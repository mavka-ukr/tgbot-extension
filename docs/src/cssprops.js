function hexToRgb(hex) {
  hex = hex.trim();

  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function generateRgbProp(name) {
  const $root = document.getElementsByTagName("html")[0];
  const colorValue = getComputedStyle($root).getPropertyValue(name);

  if (colorValue) {
    const colorRgb = hexToRgb(colorValue);

    if (colorRgb) {
      $root.style.setProperty(`${name}_rgb`, `${colorRgb.r},${colorRgb.g},${colorRgb.b}`);
    }
  }
}

function setColorScheme(cs) {
  if (cs === "light") {
    document.body.classList.remove("cs-dark");
    document.body.classList.add("cs-light");
  } else {
    document.body.classList.remove("cs-light");
    document.body.classList.add("cs-dark");
  }

  regenerateRgbProps();
}

function regenerateRgbProps() {
  generateRgbProp("--bg-color");
  generateRgbProp("--text-color");
  generateRgbProp("--hint-color");
}

setColorScheme("light");
regenerateRgbProps();

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setColorScheme("dark");
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
  setColorScheme(event.matches ? "dark" : "light");
});
