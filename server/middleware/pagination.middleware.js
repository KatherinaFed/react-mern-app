export const paginatedResult = (model) => {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    const results = {};

    if (endIndex < await model.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        size,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        size,
      };
    }

    try {
      results.results = await model.find().limit(size).skip(startIndex).exec();
      results.eventsCount = await model.countDocuments().exec();
      res.paginatedResults = results;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};
