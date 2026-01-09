// create the url for given content type
const buildPath = (type) => {
  return `src/posts/${type}/**/*.md`;
};

// blog post
export const posts = (eleventyCollection) => {
  let posts = eleventyCollection
    .getFilteredByGlob(buildPath('blog'))
    .filter((p) => {
      return !p.data.rssClub;
    })
    .reverse();

  for (let i = 0; i < posts.length; i += 1) {
    const nextPost = posts[i - 1];
    const prevPost = posts[i + 1];
    posts[i].data['nextPost'] = nextPost;
    posts[i].data['prevPost'] = prevPost;
  }

  console.log('posts', posts[0].data.date.getFullYear());

  return posts;
};

export default {
  posts,
};
