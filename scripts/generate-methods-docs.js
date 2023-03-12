import botApiSchema from "./bot-api-schema.js";
import { nativeTypes, propertyNamesMap, structureNamesMap } from "./common.js";

const mapStructureName = (name) => name.startsWith("Array of") ? "Список" : name in structureNamesMap ? structureNamesMap[name] : name;
const mapPropertyName = (name) => name in propertyNamesMap ? propertyNamesMap[name] : name;

const makeTelegramTypeStructureName = (item) => `${mapStructureName(item.name)}`;

const makeStructureProperty = (field) => `
${mapPropertyName(field.name)} ${field.types[0] in nativeTypes ? nativeTypes[field.types[0]] : mapStructureName(field.types[0])}
`.trim();

const makeTelegramTypeStructureProperties = (item) => {
  return item.fields.map((f) => `  ${makeStructureProperty(f)}`).join(`
`);
};

const makeStructureToProperty = (field) => {
  let pName = mapPropertyName(field.name);

  if (!(field.types[0] in nativeTypes)) {
    pName = `pName ? ${pName}.перетворити_на_телеграм_об'єкт() : пусто`;
  }

  return `  ${field.name}=я.${pName}`;
};

const makeStructureToProperties = (item) => item.fields.map((f) => `  ${makeStructureToProperty(f)}`).join(`,
`);

const gives = [];

const mapTelegramMethodForDocs = (item) => {
  if (!item.fields) {
    item.fields = [];
  }

  const toPropsText = makeStructureToProperties(item);
  const structureProps = makeTelegramTypeStructureProperties(item);

  const structureName = makeTelegramTypeStructureName(item);

  gives.push(structureName);

  return `
<div class="code-window code-window-full">
    <highlightjs
      language="diia"
      :autodetect="false"
      :code="\`структура ${structureName}${structureProps ? `
${structureProps}` : ""}
кінець

${structureName}.назва_методу = &quot;${item.name}&quot;
\`"
    />
  </div>
`.trim();
};

const result = Object.values(botApiSchema.methods)
  .map(mapTelegramMethodForDocs)
  .join(`
<br>
`);

console.log(result);
