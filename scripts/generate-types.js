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

const mapTelegramType = (item) => {
  if (!item.fields) {
    item.fields = [];
  }

  const fromPropsText = makeStructureFromProperties(item);
  const toPropsText = makeStructureToProperties(item);
  const structureProps = makeTelegramTypeStructureProperties(item);

  return `
структура ${makeTelegramTypeStructureName(item)}${structureProps ? `
${structureProps}` : ""}
кінець

${makeTelegramTypeStructureName(item)}.створити_з_телеграм_об'єкта = (то): то ? ${makeTelegramTypeStructureName(item)}(${fromPropsText ? `
${fromPropsText}
` : ""}) : пусто

дія ${makeTelegramTypeStructureName(item)}.перетворити_на_телеграм_об'єкт()
  Об'єкт(${toPropsText ? `
${toPropsText},
    __оминати_пустоту_конвертуючи__=так
  ` : ""})
кінець
`.trim();
};

const result = Object.values(botApiSchema.types)
  .map(mapTelegramType)
  .join(`

;; ---

`);

console.log(result);
