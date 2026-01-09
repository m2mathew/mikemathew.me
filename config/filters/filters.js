import * as marked from 'marked';

const stripIndex = (path) => {
  if (!path) {
    return '';
  }
  return path.replace('/index.html', '/');
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

export default {
  stripIndex,
  toLowerCase,
  mdToHtml,
};
