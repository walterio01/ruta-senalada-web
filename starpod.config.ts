import { defineStarpodConfig } from 'starpod/config';

export default defineStarpodConfig({
  blurb: 'Un podcast de símbolos y reflexiones',
  description: 'Un podcast de símbolos y reflexiones.',
  hosts: [
    { name: 'Walter Alta', bio: '', img: 'walter.jpg' }
  ],
  platforms: {},
  rssFeed: 'https://www.spreaker.com/show/6168781/episodes/feed'
});
