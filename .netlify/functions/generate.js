import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

exports.handler = (event, context, callback) => {
  const releaseName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: releaseName,
    }),
  });
};
