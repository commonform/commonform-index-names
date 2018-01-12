replace terms and headings in a Common Form with numeric indices

```javascript
var assert = require('assert')
var index = require('commonform-index-names')

assert.deepEqual(
  index({content: [{definition: 'Agreement'}]}),
  {content: [{definition: 0}]}
)

assert.deepEqual(
  index({
    content: [
      {definition: 'Agreement'},
      {definition: 'Parties'},
      {form: {content: [{use: 'Agreement'}]}},
      {form: {content: [{use: 'Parties'}]}}
    ]
  }),
  {
    content: [
      {definition: 0},
      {definition: 1},
      {form: {content: [{use: 0}]}},
      {form: {content: [{use: 1}]}}
    ]
  }
)

assert.deepEqual(
  index({
    content: [
      {
        heading: 'A',
        form: {content: ['some text']}
      },
      {form: {content: [{reference: 'A'}]}}
    ]
  }),
  {
    content: [
      {
        heading: 0,
        form: {content: ['some text']}
      },
      {form: {content: [{reference: 0}]}}
    ]
  }
)

assert.deepEqual(
  index({
    content: [
      {
        heading: 'A',
        form: {
          content: [
            {
              heading: 'B',
              form: {content: ['some text']}
            }
          ]
        }
      },
      {form: {content: [{reference: 'B'}]}}
    ]
  }),
  {
    content: [
      {
        heading: 0,
        form: {
          content: [
            {
              heading: 1,
              form: {content: ['some text']}
            }
          ]
        }
      },
      {form: {content: [{reference: 1}]}}
    ]
  }
)
```
