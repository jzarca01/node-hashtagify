const axios = require('axios');
const qs = require('qs');

class Hashtagify {
  constructor() {
    this.request = axios.create({
      baseURL: 'https://ipa.hshtg.app',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        premium: true
      },
      paramsSerializer: function(params) {
        return qs.stringify(params, {
          arrayFormat: 'brackets'
        });
      }
    });
  }

  async getHashtags(hashtags) {
    try {
      const foundHashtags = await this.request({
        method: 'POST',
        url: '/hashtag/related',
        params: {
          tag: hashtags
        }
      });
      return foundHashtags.data;
    } catch (err) {
      console.log('error with getHashtags', err);
    }
  }

  async getRelated(hashtags) {
    try {
      const foundHashtags = await this.getHashtags(hashtags);
      return foundHashtags.related;
    } catch (err) {
      console.log('error with getRelated', err);
    }
  }

  async getTrends(hashtags) {
    try {
      const foundHashtags = await this.getHashtags(hashtags);
      return foundHashtags.trends;
    } catch (err) {
      console.log('error with getTrends', err);
    }
  }
}

module.exports = Hashtagify;
