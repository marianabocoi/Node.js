const { format, formatDistance, formatRelative, subDays } = require('date-fns')

function hello() {
  const now = new Date()
  console.log(format(now, "'Today is 'iiii"))
  // => 'Today is a Sunday'
  console.log(formatDistance(subDays(now, 3), now))
  // => '3 days ago'
  console.log(formatRelative(subDays(now, 3), now))
  // => 'last Thursday at 11:26 a.m.'
}

hello()
