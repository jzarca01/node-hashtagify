# node-hashtagify

API to get trending and related hashtags

## Usage

```javascript
const Hashtagify = require('node-hashtagify');
const hash = new Hashtagify();
```

### Get related hashtags

```javascript
hash.getRelated((hashtags = ['cool', 'instapic']));
/*
hashtags array can take between 1 and 3 hashtags
*/
```

### Get trending hashtags

```javascript
hash.getTrends((hashtags = ['cool', 'instapic']));
/*
hashtags array can take between 1 and 3 hashtags
*/
```
