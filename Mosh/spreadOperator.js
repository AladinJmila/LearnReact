
const first = [1, 2, 3]
const second = [4, 5, 6]

/**Read text**/

const combined = first.concat(second)

/**Read text**/

const combined = [...first, ...second]

/**Read text**/

const combined = [...first, 'a', ...second]

/**Read text**/

const combined = [...first, 'a', ...second, 'b']

/**Read text**/

const clone = [...first]
console.log(clone)
console.log(first)

//(3) [1, 2, 3]
//(3) [1, 2, 3]

/*********************************************/

const first = { name: 'Mosh' }
const second = { job: 'Instructor' }

/**Read text**/

const combined = { ...first, ...second, location: 'Australia' }
console.log(combined)

//{name: "Mosh", job: "Instructor", location: "Australia"}


/**Read text**/

const combinedCopy = { ...combined }
console.log(combinedCopy)

//{name: "Mosh", job: "Instructor", location: "Australia"}
