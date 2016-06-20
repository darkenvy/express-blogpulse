var db = require('./models');

// db.comment.create({
//   name: 'Nick Bostrom',
//   content: 'We need more AI. The singularity is closer than you think.',
//   postId: 1
// }).then(function(comment) {
//   console.log(comment.get());
// });

db.post.find({
  where: { id: 1 },
  include: [db.comment]
}).then(function(post) {
  console.log(post);
});
