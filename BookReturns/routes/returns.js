const returnsController = require('../controllers/returnsController');

module.exports = [
  {
    method: 'POST',
    path: '/returns',
    handler: returnsController.handleReturn
  },
  {
    method: 'GET',
    path: '/returns/late/{userId}',
    handler: returnsController.getLateReturns
  },
  {
    method: 'GET',
    path: '/returns/penalty/{userId}',
    handler: returnsController.calculatePenalty
  }
];
