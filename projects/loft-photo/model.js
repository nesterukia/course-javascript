// eslint-disable-next-line no-unused-vars
import photosDB from './photos.json';
// eslint-disable-next-line no-unused-vars
import friendsDB from './friends.json';

export default {
  getRandomElement(array) {
      if((!Array.isArray(array)) || (array.length === 0)){
        throw new Error('Error: empty array.');
      }
      const index = Math.floor(Math.random() * array.length)
      return array[index];
  },
  getNextPhoto() {
    const friend = this.getRandomElement(friendsDB);
    const photo = this.getRandomElement(photosDB[friend.id]);

    return {
      friend: friend,
      url: photo.url
    }
  },
};
