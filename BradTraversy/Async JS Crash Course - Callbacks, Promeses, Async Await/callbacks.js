
const posts = [
  { title: 'Post 1', body: 'This is post one' },
  { title: 'Post 2', body: 'This is post two' },
  { title: 'Post 3', body: 'This is post three' },
  { title: 'Post 4', body: 'This is post four' },
]

/**Read text**/
//
// function getPosts() {
//   setTimeout(fuction() {
//
//   }, 1000)
// }

/**Read text**/

// function getPosts() {
//   setTimeout(() => {
//
//   },1000)
// }

/**Read text**/

// function getPosts() {
//   setTimeout(() => {
//     let output = ''
//   },1000)
// }

/**Read text**/

// function getPosts() {
//   setTimeout(() => {
//     let output = ''
//       posts.forEach((post, index) => {
//         output += `<li>${post.title}</li>`
//       })
//   },1000)
// }

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

// getPosts()

/**Read text**/

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post)
//   }, 2000)
// }
//
// createPost({ title: 'Post 5', body: 'This is post five'})

/**Read text**/

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

createPost({ title: 'Post 5', body: 'This is post five'}, getPosts)

/**Read text**/
