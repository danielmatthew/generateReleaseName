import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export async function generate(event, context) {
  const releaseName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: releaseName,
    }),
  };
};
