import * as marked from 'marked';

const getAllTags = (collection) => {
  // Set to de-dupe tags
  let tagSet = new Set();

  for (let item of collection) {
    (item.data.tags || []).forEach((tag) => tagSet.add(tag));
  }

  return Array.from(tagSet);
};

const toLowerCase = (string) => {
  return string.toLowerCase();
};

const mdToHtml = (content) => {
  if (!content) {
    return '';
  }

  return marked.parse(content);
};

const stripIndex = (path) => {
  if (!path) {
    return '';
  }
  return path.replace('/index.html', '/');
};

export default {
  getAllTags,
  mdToHtml,
  stripIndex,
  toLowerCase,
};
