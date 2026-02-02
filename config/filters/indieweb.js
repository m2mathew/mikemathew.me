export default {
  getOgImageUrl: (page) => {
    if (page.attachments && page.attachments.length > 0) {
      return page.attachments[0].url
        ? page.attachments[0].url
        : page.attachments[0];
    }
    let path = page.url;
    if (page.permalink === '404.html') {
      path = '/404/';
    }
    if (path.startsWith('/notes/') && path !== '/notes/') {
      path = '/notes/single/';
    }
    const url = encodeURIComponent(`https://mikemathew.me/opengraph${path}`);

    return `https://v1.screenshot.11ty.dev/${url}/opengraph/_24689`;
  },
  getOpengraphUrl: (inputPath) => {
    let path = inputPath;
    if (path.startsWith('/notes/') && path !== '/notes/') {
      path = '/notes/single/';
    }
    const url = encodeURIComponent(`https://mikemathew.me/opengraph${path}`);
    return `https://v1.screenshot.11ty.dev/${url}/opengraph/_246810`;
  },
};
