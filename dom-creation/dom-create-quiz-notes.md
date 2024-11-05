# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No. It creates a new element which may or may not be added to the new page.
- How do you add an element as a child to another element?
  the appendChild method
- What do you pass as the arguments to the `element.setAttribute()` method?
  a string of the name of the attribute you want to add, then a string of the value of the attribute
- What steps do you need to take in order to insert a new element into the page?
  create a new element, then append the element to an existing element in the page
- What is the `textContent` property of an element object for?
  to set or get the text content of the element
- Name two ways to set the `class` attribute of a DOM element.
  use the setAttribute() method or className property
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  you can pass the function to event listeners, you can use one block of code to create multiple objects.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
