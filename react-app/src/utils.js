const splitDate = (date) => {
  const arr = date.split("-")
  splitDate[1] = parseInt(splitDate[1], 10) -1
  return arr
};

const getDaysToExpire = (date) => {
  const dateArr = splitDate(date)
  const expiration = new Date(...dateArr)
  const daysToExpire = Math.ceil((expiration - Date.now())/(1000*60*60*24))

  return daysToExpire
};

const getTimeStamp = (date) => {
  const dateArr = splitDate(date)
  const expiration = new Date(...dateArr)
  return expiration.toISOString()
}

module.exports = {
  getDaysToExpire,
  getTimeStamp
};
