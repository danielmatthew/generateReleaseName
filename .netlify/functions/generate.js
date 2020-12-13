import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export async function generate() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
      }),
    }),
  };
};
