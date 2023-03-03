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

const makeStructureToProperty = (field) => `  ${field.name}=я.${mapPropertyName(field.name)}`;

const makeStructureToProperties = (item) => item.fields.map((f) => `  ${makeStructureToProperty(f)}`).join(`,
`);

const mapTelegramMethod = (item) => {
  if (!item.fields) {
    item.fields = [];
  }

  const toPropsText = makeStructureToProperties(item);
  const structureProps = makeTelegramTypeStructureProperties(item);

  return `
структура ${makeTelegramTypeStructureName(item)}${structureProps ? `
${structureProps}` : ""}
кінець

дія ${makeTelegramTypeStructureName(item)}.перетворити_на_телеграм_об'єкт()
  Об'єкт(${toPropsText ? `
${toPropsText},
    __оминати_пустоту_конвертуючи__=так
  ` : ""})
кінець
`.trim();
};

const result = Object.values(botApiSchema.methods)
  .map(mapTelegramMethod)
  .join(`

;; ---

`);

console.log(result);
