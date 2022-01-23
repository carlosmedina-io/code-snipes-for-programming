
const convertToOrdinal = number => {
  const pluralRules = new Intl.PluralRules(
    'en-US', { type: 'ordinal' }
  )

  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th',
  }

  return `${number}${ordinals[
    pluralRules.select(number)
  ]}`
}

console.log(convertToOrdinal(1))
console.log(convertToOrdinal(2))
console.log(convertToOrdinal(3))
console.log(convertToOrdinal(7))
console.log(convertToOrdinal(20))