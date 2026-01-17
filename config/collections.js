// create the url for given content type
const buildPath = (type) => {
  return `src/posts/${type}/**/*.md`;
};

// Blog posts for RSS feed
export const blogPostsForFeed = (eleventyCollection) => {
  return eleventyCollection
    .getFilteredByGlob(buildPath('blog'))
    .reverse()
    .slice(0, 50);
};

export const blogTags = (eleventyCollection) => {
  const allTags = [
    ...eleventyCollection.getFilteredByGlob(buildPath('blog')),
    // ...collectionApi.getFilteredByGlob(buildPath('notes')),
  ]
    .reverse()
    .reduce((tags, p) => {
      if (p.data.tags && Array.isArray(p.data.tags)) {
        return [...tags, ...p.data.tags];
      }
      return tags;
    }, []);

  return [...new Set(allTags)];
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
  blogPostsForFeed,
  blogTags,
  homePagePosts,
  links,
  posts,
};
