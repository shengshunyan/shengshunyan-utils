# @shengshunyan/utils

[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![Node.js][NODE VERSION BADGE]][NODE PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![Build Status][BUILD BADGE]][BUILD PAGE]

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