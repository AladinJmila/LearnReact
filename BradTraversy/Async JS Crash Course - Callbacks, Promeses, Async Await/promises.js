
const posts = [
  { title: 'Post 1', body: 'This is post one' },
  { title: 'Post 2', body: 'This is post two' },
  { title: 'Post 3', body: 'This is post three' },
  { title: 'Post 4', body: 'This is post four' },
]

/**Read text**/

function getPosts() {
  setTimeout(() => {
    let output = ''
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`
      })
      document.body.innerHTML = output
  },1000)
}


/**Read text**/

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)

      const error = false

      if (!error) {
        resolve()
      } else {
        reject('Error: Something went wrong')
      }

    }, 2000)
  })
}

/**Read text**/

// createPost({ title: 'Post 5'}, {body: 'This is post five'})
// .then(getPosts)
// .catch (err => console.log(err))

/**Read text**/

// Promise.all
// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'Goodbye')
// )

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

/**Read text**/

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
//   res.json()
// )

/**Read text**/

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))

/**Read text**/

// async function init() {
//   await createPost({title: 'Post 5'}, {body: 'This is post five'})
//
//   getPosts()
// }
// init()

/**Read text**/

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  const data = await res.json()
  console.log(data)
}
fetchUsers()

/**Read text**/
