# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  create, read, update, delete
- How do you add a row to a SQL table?
  insert into {table} ([column names]) values ([column values])
- How do you add multiple rows to a SQL table at once?
  add a comma and then another parentheses containing the values for the additional row
- How do you update rows in a database table?
  update "database" set "column" = value where "column" = specifier;
- How do you delete rows from a database table?
  delete from "database" where "x" = "y" and "a" ="b"
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  to specify which rows you want to update
- How do you accidentally delete or update all rows in a table?
  without using the where clause
- How do you get back the modified row without a separate `select` statement?
  returning
- Why did you get an error when trying to delete certain films?
  Its columns values were being referenced by other tables.

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
