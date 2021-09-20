const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
]

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      if (err) {
        reject('Error')
      } else {
        resolve();
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    posts.forEach(function(post) {
      document.querySelector('.output').innerHTML += `
        <li>${post.title}<li>
      `;
    });
  });
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(err) {
  console.log(err);
});