// resolvers.js

const posts = [
    {
      id: '1',
      title: 'Chinmays First Post',
      content: 'Hello',
    },
    {
      id: '2',
      title: 'Second Post',
      content: 'Good Day',
    },
  ];
  
  const resolvers = {
    Query: {
      posts: () => posts,
      post: (_, { id }) => posts.find(post => post.id === id),
    },
    Mutation: {
      createPost: (_, { title, content }) => {
        const newPost = {
          id: String(posts.length + 1),
          title,
          content,
        };
        posts.push(newPost);
        return newPost;
      },
    },
  };
  
  module.exports = resolvers;
  