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

const makeStructureFromProperty = (field) => `
${mapPropertyName(field.name)}=${field.types[0] in nativeTypes || field.types[0].startsWith("Array of") ? `то.${field.name}` : mapStructureName(field.types[0]) + `.створити_з_телеграм_об'єкта(то.${field.name})`}
`.trim();

const makeStructureToProperty = (field) => `  ${field.name}=я.${mapPropertyName(field.name)}`;

const makeStructureFromProperties = (item) => item.fields.map((f) => `  ${makeStructureFromProperty(f)}`).join(`,
`);

const makeStructureToProperties = (item) => item.fields.map((f) => `  ${makeStructureToProperty(f)}`).join(`,
`);

const gives = [];

const mapTelegramTypeForDocs = (item) => {
  if (!item.fields) {
    item.fields = [];
  }

  const fromPropsText = makeStructureFromProperties(item);
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

${structureName}.назва_типу = &quot;${item.name}&quot;\`"
    />
  </div>
`.trim();
};

const result = Object.values(botApiSchema.types)
  .map(mapTelegramTypeForDocs)
  .join(`
<br>
`);

console.log(result);
