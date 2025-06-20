const dateUtils = require('../utils/dateUtils');
const returnsModel = require('../models/returnsModel');

exports.handleReturn = async (request, h) => {
  const { userId, bookId, returnDate } = request.payload;

  const loanInfo = await returnsModel.getLoanInfo(userId, bookId);
  const isLate = dateUtils.isLate(loanInfo.dueDate, returnDate);

  await returnsModel.saveReturn(userId, bookId, returnDate, isLate);

  return h.response({ message: 'Retour enregistré', isLate }).code(200);
};

exports.getLateReturns = async (request, h) => {
  const { userId } = request.params;
  const lateReturns = await returnsModel.getLateReturns(userId);
  return h.response(lateReturns).code(200);
};

exports.calculatePenalty = async (request, h) => {
  const { userId } = request.params;
  const penalty = await returnsModel.calculateTotalPenalty(userId);
  return h.response({ penalty }).code(200);
};
