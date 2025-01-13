# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  The column that links one table to another.
- How do you join two SQL tables? (Provide at least two syntaxes.)

select "column" from "table"
join "table" using "column"

or

select "table"."column" from "table"
join "table" using "column"

- How do you temporarily rename columns or tables in a SQL statement?
  as "renamed column"
- How do you create a one-to-many relationship between two tables?
  one foreign key can link to many other data, but the data can only be linked back to the initial foreign key
- How do you create a many-to-many relationship between two tables?
  multiple foreign keys can link to data, which may also be linked to a different foreign key

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
