import botApiSchema from "./bot-api-schema.js";
import { nativeTypes, propertyNamesMap, structureNamesMap } from "./common.js";

const mapStructureName = (name) => name.startsWith("Array of") ? "Список" : name in structureNamesMap ? structureNamesMap[name] : name;
const mapPropertyName = (name) => name in propertyNamesMap ? propertyNamesMap[name] : name;

const makeTelegramTypeStructureName = (item) => `${mapStructureName(item.name)}`;

const makeStructureProperty = (field) => `
${mapPropertyName(field.name)} ${field.types[0] in nativeTypes ? nativeTypes[field.types[0]] : mapStructureName(field.types[0])} = undefined
`.trim();

const makeTelegramTypeStructureProperties = (item) => {
  return item.fields.map((f) => `  ${makeStructureProperty(f)}`).join(`
`);
};

const makeStructureToProperty = (field) => {
  let pName = mapPropertyName(field.name);

  if (!(field.types[0] in nativeTypes)) {
    pName = `${pName} ? ${pName}.перетворити_на_телеграм_обʼєкт() : я.${pName}`;
  }

  return `  ${field.name}=я.${pName}`;
};

const makeStructureToProperties = (item) => item.fields.map((f) => `  ${makeStructureToProperty(f)}`).join(`,
`);

const gives = [];

const mapTelegramMethod = (item) => {
  if (!item.fields) {
    item.fields = [];
  }

  const toPropsText = makeStructureToProperties(item);
  const structureProps = makeTelegramTypeStructureProperties(item);

  const structureName = makeTelegramTypeStructureName(item);

  gives.push(structureName);

  return `
структура ${structureName}${structureProps ? `
${structureProps}` : ""}
кінець

${structureName}.назва_методу = "${item.name}"

дія ${makeTelegramTypeStructureName(item)}.перетворити_на_телеграм_обʼєкт()
  (${toPropsText ? `
${toPropsText}
  ` : ""})
кінець
`.trim();
};

const result = Object.values(botApiSchema.methods)
  .map(mapTelegramMethod)
  .join(`

;; ---

`);

const givesText = gives.map((v) => `дати ${v}`).join(`
`);

console.log(result + "\n\n" + givesText);
