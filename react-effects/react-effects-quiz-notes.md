# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  after it is rendered
- What is a React Effect?
  code that runs by rendering itself
- When should you use an Effect and when should you not use an Effect?
  You should use an effect when something MUST happen (i.e connecting to a server or other external library)
- When do Effects run?
  after every dom commit
- What function is used to declare an Effect?
  useEffect(()=>{})
- What are Effect dependencies and how do you declare them?
  Effect dependencies are variables that are checked if they have changed during the effect runtime, in which case the effect would stop rerunning. It is declared with an array of variables after the function code block
- Why would you want to clean up from an Effect?
  To close the effect runtime
- How do you clean up from an Effect?
  add a return statement that calls a function
- When does the cleanup function run?
  Before the effect runs again, and when the component unmounts

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
