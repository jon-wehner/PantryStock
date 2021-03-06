const splitDate = (date) => {
  const arr = date.split("-")
  arr[1] = parseInt(arr[1], 10) -1
  return arr
};

export const getDaysToExpire = (date) => {
  const expiration = new Date(date)
  const daysToExpire = Math.ceil((expiration - Date.now())/(1000*60*60*24))

  return daysToExpire
};

export const getExpirationString = (date) => {
  const days = getDaysToExpire(date)

    if (days > 14) {
      return '2 Weeks+'
    }
    else if (days === 14) {
      return '2 Weeks'
    }
    else if (days > 7) {
      return '1 Week+'
    }
    else if (days >= 2) {
      return `${days} Days`
    }
    else if (days === 1) {
      return 'Tommorrow'
    }
    else if (days === 0) {
      return 'Today'
    }
    else {
      return 'Expired'
    }
}

export const getTimeStamp = (date) => {
  const dateArr = splitDate(date)
  let expiration = new Date(...dateArr)
  expiration = expiration.toISOString()
  return expiration
}

export const getQuantityString = (quantity, measurement) => {
  let quantityString = " " + measurement
  if (measurement !== "Each" && quantity > 1) {
    quantityString += 's'
  }
  return quantityString += " of "
}
