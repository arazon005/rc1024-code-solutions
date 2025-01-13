# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  C (POST), R (GET), U (PUT), D (DELETE)
- What is Express middleware?
  a function that fulfills the requested action
- What is Express middleware useful for?

- How do you mount a middleware with an Express application?
  app.METHOD({path},(req,res)=>{})
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req(uest), res(ponse)
- How do you specify and retrieve route parameters?
  specify route paramters in the route with a semicolon followed by the parameter name. retrieve route parameters using req.params

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
