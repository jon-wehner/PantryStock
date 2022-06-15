export const getDaysToExpire = (date: string) => {
  const expiration = new Date(date);
  const daysToExpire = Math.ceil((expiration.getTime() - new Date().getTime()) / (1000 * 3600 * 60 * 24));
  return daysToExpire;
};

export const getExpirationString = (date: string) => {
  const days = getDaysToExpire(date);

  if (days > 14) {
    return '2 Weeks+';
  }
  if (days === 14) {
    return '2 Weeks';
  }
  if (days > 7) {
    return '1 Week+';
  }
  if (days >= 2) {
    return `${days} Days`;
  }
  if (days === 1) {
    return 'Tommorrow';
  }
  if (days === 0) {
    return 'Today';
  }

  return 'Expired';
};

export const getTimeStamp = (date: string) => {
  const expiration = new Date(date);
  const expirationString = expiration.toISOString();
  return expirationString;
};

export const getQuantityString = (quantity: number, measurement: string) => {
  let quantityString = ` ${measurement}`;
  if (measurement !== 'Each' && quantity > 1) {
    quantityString += 's';
  }
  quantityString += ' of ';
  return quantityString;
};
