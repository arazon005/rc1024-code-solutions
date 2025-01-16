# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

fetch()

- What two things need to be done to properly handle HTTP request errors? Why?

check the value of response.ok, and then throw a new error if it is false.

- How can `useEffect` be used to load data for a component?

fetch data with an http request with a useEffect call, which will update variables that will be used within th compononet

- How do you use `useEffect` to load component data just once when the component mounts?

  add a dependency with no parameters

- How do you use `useEffect` to load component data every time the data key changes?

  add a dependency to watch the data key

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

  React Query or Vercel SWR

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
