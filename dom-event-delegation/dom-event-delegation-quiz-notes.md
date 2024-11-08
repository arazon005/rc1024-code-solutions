# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The element at which an event would occur.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  event bubbling; when an event occurs on a particular DOM element, it ripples through its ancestors in the DOM hierarchy
- What DOM element property tells you what type of element it is?
  element.tagName
- What does the `element.closest()` method take as its argument and what does it return?
  takes a selector name as a string, and goes up the ancestry and returns the first DOM tree that matches the attribute
- How can you remove an element from the DOM?
  element.remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  add the listener to one of the parent nodes

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
