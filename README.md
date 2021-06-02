# @shengshunyan/utils

[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![Node.js][NODE VERSION BADGE]][NODE PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]

[NPM VERSION BADGE]: https://img.shields.io/npm/v/@shengshunyan/utils
[NPM PAGE]: https://www.npmjs.com/package/@shengshunyan/utils
[NODE VERSION BADGE]: https://img.shields.io/node/v/@shengshunyan/utils
[NODE PAGE]: https://nodejs.org/
[LICENSE BADGE]: https://img.shields.io/npm/l/@shengshunyan/utils
[LICENSE PAGE]: https://github.com/jbenner-radham/node-readme-md/blob/master/LICENSE

日常工作积累的工具函数

## Installation

```sh
$ npm install --save @shengshunyan/utils
```

## Usage

### Script tag

```html
<script src="./utils.js"></script>
<script>
    const arr = [1, 3, 2, 2, 2]
    
    utils.sort.bubbleSort(arr)
</script>
```

### CommonJs

```JavaScript
const utils = require('@shengshunyan/utils')

const arr = [1, 3, 2, 2, 2]
const bubbleSortArr = utils.sort.bubbleSort(arr)
console.log('bubbleSortArr: ', bubbleSortArr)
```

### ESModule

```JavaScript
import { sort } from '@shengshunyan/utils'

const arr = [1, 3, 2, 2, 2]
const bubbleSortArr = sort.bubbleSort(arr)
console.log('bubbleSortArr: ', bubbleSortArr)
```

## Testing

```sh
$ npm test
```

## License

The MIT License (Expat). See the [license file](LICENSE) for details.

## Keywords

utils, JavaScript

