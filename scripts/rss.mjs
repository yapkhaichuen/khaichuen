import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Khai Chuen',
    site_url: 'https://khaichuen.vercel.app',
    feed_url: 'https://khaichuen.vercel.app/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://khaichuen.vercel.app/blog/${post.slug}`,
      published: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
