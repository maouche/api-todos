# NodeJS JWT Authentication sample

A Todo Application with NodeJS and ExpressJS that uses JWT authentication to manage each user's todos.


## Available APIs

### User APIs

#### GET `/todos`

You can do a GET to `/todos` to get all todos for user.

The JWT must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

It returns the following:

```json
[
  {todo},
  {todo}
]
```

#### POST `/todos`

You can do a POST to `/todos` to add todo.

The JWT must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

The body must have:

* `title`: The title

It returns the following:

```json
[
  {new todo}
]
```


#### PUT `/todos`

You can do a PUT to `/todos` to update todo.

The JWT must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

It returns the following:

The body must have:

* `id`: The id
* `completed`: true or false

```json
[
  {todo}
]
```


#### DELETE `/todos`

You can do a PUT to `/todos` to remove todo.

The JWT must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`

It returns the following:

The body must have:

* `id`: The id

```json
[
  {todo}
]
```


## Running it

Just clone the repository, run `npm install` and then `node server.js`. That's it :).


## Issue Reporting

If you have found a bug or if you have a feature request, please contact me. 


## Author

[MAOUCHE Yacine](https://github.com/maouche)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.