
class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log('walk')
  }
}

/**Read text**/

class Teacher {
  teach() {
    console.log('teach')
  }
}

/**Read text**/

class Teacher extends Person {
  teach() {
    console.log('teach')
  }
}

const person = new Teacher('Mosh')

/**Read text**/

class Teacher extends Person {
  constructor(name, degree) {

  }

  teach() {
    console.log('teach')
  }
}

/**Read text**/

class Teacher extends Person {
  constructor(name, degree) {
    super(name)
    this.degree = degree
  }

  teach() {
    console.log('teach')
  }
}

const teacher = new Teacher('Mosh', 'Msc')

/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/
