
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
        reslove()
      } else {
        reject('Error: Something went wrong')
      }

    }, 2000)
  })
}

/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/



/**Read text**/
