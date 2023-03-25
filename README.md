# Example

```shell
$ npm install awesomeWords --save
```

```javascript
const  awesomeWords = require('awesomeWords').default
/// ES2015 moduel
import awesomeWords from 'awesomeWords'

const filtered = awesomeWords('The new Apple Macbook Pro will have a touchbar',
  ['pro', 'touchbar'])

console.log(filtered)
// The new Apple Macbook *** will have ***
```