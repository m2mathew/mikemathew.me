// create the url for given content type
const buildPath = (type) => {
  return `src/posts/${type}/**/*.md`;
};

// Posts shown on home page
export const homePagePosts = (eleventyCollection) => {
  return eleventyCollection
    .getFilteredByGlob(buildPath('blog'))
    .filter((p) => {
      return !p.data.rssClub;
    })
    .reverse()
    .slice(0, 5);
};

// Links
export const links = (eleventyCollection) => {
  return eleventyCollection.getFilteredByGlob(buildPath('links')).reverse();
};

// Blog posts
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
  links,
  posts,
};
