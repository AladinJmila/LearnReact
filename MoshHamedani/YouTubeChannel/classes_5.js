
const person = {
  name: 'Mosh',
  walk() {
    console.log('walk')
  }
}

/**Read text**/

const person2 = {
  name: 'Mosh',
  walk() {
    console.log('walk')
  }
}

/**Read text**/

class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log('walk')
  }
}

/**Read text**/

const person = new Person('Mosh')
person.name
person.walk()
