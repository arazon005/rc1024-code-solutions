# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

To allow us to interface with postgresql databases.

- How do you tell `pg` which database to connect to?

new pg.Pool({connectionString:'direct to db here'})

- How do you send SQL to PostgreSQL from your Express server?

assign the sql text to a variable which will be used in a query function

- How do you access the rows that get returned from the SQL query?

result.rows[x]

- What must you always remember to put around your asynchronous route handlers? Why?

the query is also asynchronous

- What is a SQL Injection Attack and how do you avoid it in `pg`?

Malicious code is sent and run by abusing how string concatenation or template literals is read by the application. You can avoid it by not using them and by sanitizing escaping characters, by using parameterized queries ($N)

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
