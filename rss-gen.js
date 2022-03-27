const RSS = require('rss');
const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');

// my blog posts live in `/content/blog`
const blogPostDir = path.resolve(__dirname, 'content', 'posts');
const base_url = 'https://teknosia.netlify.app/';

const feed = new RSS({
  title: 'Teknosia Blog',
  description: 'Mengulas beragam aplikasi dan tutorial sesuai trend saat ini',
  feed_url: base_url + `rss.xml`,
  site_url: base_url ,
  author: 'Teknosia',
  copyright: `2022 Teknosia`,
  language: 'id',
  pubDate: new Date().toLocaleString(),
  ttl: '60',
});

// read all the files in my blog post dir, however you can grab
// an array of data however, via node-fetch or json files, etc
fs.readdirSync(blogPostDir)
  .map(fileName => {
    // we need the full path of the file to be able to read it
    const fullPath = path.join(blogPostDir, fileName);
    // read the file so we can grab the front matter
    const file = fs.readFileSync(fullPath, 'utf8');
    // for the RSS feed we don't need the html, we
    // just want the attributes
    const { attributes } = frontMatter(file);
    // I want access to the fileName later on so we save it to our object
    return { ...attributes, fileName };
  })
  // sort the items by date in descending order, feel free
  // to customize this as needed to sort your RSS items properly
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  // loop over each blog post and add it to our RSS feed
  .forEach(({ title, description, date, fileName }) => {
    // title, description, and date are properties of my front matter
    // attributes. Yours might be different depending on your data structure
    feed.item({
      title,
      description,
      url: base_url + `posts/${fileName.replace('.md', '')}`,
      // author,
      date,
    });
  });

const xml = feed.xml();

fs.writeFileSync(path.resolve(__dirname, 'public') + '/rss.xml', xml);
