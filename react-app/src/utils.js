const splitDate = (date) => {
  const arr = date.split("-")
  arr[1] = parseInt(arr[1], 10) -1
  return arr
};

const getDaysToExpire = (date) => {
  const expiration = new Date(date)
  const daysToExpire = Math.ceil((expiration - Date.now())/(1000*60*60*24))

  return daysToExpire
};

const getExpirationString = (date) => {
  const days = getDaysToExpire(date)
  switch (days) {
    case days > 14:
      return '2 Weeks+'
    case days === 14:
      return '2 Weeks'
    case days > 7:
      return '1 Week+'
    case days >= 2:
      return `${days} Days`
    case days === 1:
      return 'Tommorrow'
    case days === 0:
      return 'Today'
    case days < 0:
      return 'Expired'
  }

}

const getTimeStamp = (date) => {
  const dateArr = splitDate(date)
  const expiration = new Date(...dateArr)
  console.log(expiration.toISOString())
  return expiration.toISOString()
}

module.exports = {
  getDaysToExpire,
  getTimeStamp,
  getExpirationString
};
