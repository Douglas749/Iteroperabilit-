// Fausse base de données simulée
let returnsDB = [];

exports.getLoanInfo = async (userId, bookId) => {
  // À remplacer par une requête réelle vers une BDD
  return {
    dueDate: '2025-06-15'
  };
};

exports.saveReturn = async (userId, bookId, returnDate, isLate) => {
  returnsDB.push({ userId, bookId, returnDate, isLate });
};

exports.getLateReturns = async (userId) => {
  return returnsDB.filter(r => r.userId === userId && r.isLate);
};

exports.calculateTotalPenalty = async (userId) => {
  const penaltyPerDay = 200;
  const today = new Date().toISOString().split('T')[0];
  const late = await exports.getLateReturns(userId);

  let total = 0;
  for (let r of late) {
    const days = require('../utils/dateUtils').daysLate(r.returnDate, today);
    total += days * penaltyPerDay;
  }

  return total;
};
