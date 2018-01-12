module.exports = function (form) {
  return recurse(form, [], [])
}

function recurse (form, terms, headings) {
  var returned = {}
  if (form.conspicuous) returned.conspicuous = form.conspicuous
  returned.content = form.content.map(function (element) {
    var term
    var heading
    var index
    if (element.hasOwnProperty('definition')) {
      term = element.definition
      index = terms.indexOf(term)
      if (index === -1) {
        terms.push(term)
        index = terms.length - 1
      }
      return {definition: index}
    } else if (element.hasOwnProperty('use')) {
      term = element.use
      index = terms.indexOf(term)
      if (index === -1) {
        terms.push(term)
        index = terms.length - 1
      }
      return {use: index}
    } else if (element.hasOwnProperty('form')) {
      if (element.hasOwnProperty('heading')) {
        heading = element.heading
        index = headings.indexOf(heading)
        if (index === -1) {
          headings.push(heading)
          index = headings.length - 1
        }
        return {
          heading: index,
          form: recurse(element.form, terms, headings)
        }
      } else {
        return {
          form: recurse(element.form, terms, headings)
        }
      }
    } else if (element.hasOwnProperty('reference')) {
      heading = element.reference
      index = headings.indexOf(heading)
      if (index === -1) {
        headings.push(heading)
        index = headings.length - 1
      }
      return {reference: index}
    } else {
      return element
    }
  })
  return returned
}