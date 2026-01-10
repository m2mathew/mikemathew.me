// create the url for given content type
const buildPath = (type) => {
  return `src/posts/${type}/**/*.md`;
};

export const homePagePosts = (collectionApi) => {
  return collectionApi
    .getFilteredByGlob(buildPath('blog'))
    .filter((p) => {
      return !p.data.rssClub;
    })
    .reverse()
    .slice(0, 5);
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

  return posts;
};

export default {
  homePagePosts,
  posts,
};
