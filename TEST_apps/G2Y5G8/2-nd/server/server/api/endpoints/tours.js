const router = require('express').Router();
const TourService = require('../../services/tours');

router.get('/', async (req, res, next) => {
   try {
      const tourService = new TourService();
      let search = req.query.search;
      search && (search = search.toLowerCase().trim());

      const result = await tourService.getTours(search);

      res.send(result)
   } catch (error) {
      return next(error);
   }
});

module.exports = router;
