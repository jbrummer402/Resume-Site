const dbConnection = require("./mongoConnection");

const getCollectionFunction = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

module.exports = {
  users: getCollectionFunction("users"),
  blogPosts: getCollectionFunction("blogPosts"),
};
