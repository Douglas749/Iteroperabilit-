exports.isLate = (dueDate, returnDate) => {
  return new Date(returnDate) > new Date(dueDate);
};

exports.daysLate = (fromDate, toDate) => {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const diff = (to - from) / (1000 * 60 * 60 * 24);
  return Math.max(0, Math.floor(diff));
};
