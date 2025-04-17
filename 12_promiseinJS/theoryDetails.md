# Promise
## Defination

```
=> The Promise object represents the eventual completion (or failure) of an asynchronous operations and its resulting value.
Promises will completed in the future.
We consume the promises max time.

** A promise is an object representing the eventual completion or failure of an asynchronous operation **
```

## State of Promise

```
Promise has 3 states:
    1. pending: initial state, neither fulfilled nor rejected.
    2. fulfilled: meaning that the operation was completed successfully
    3. rejected: meaning that the operation failed
```

## History
```
In side promise there had Q and Bluebird. By using this we can do the same work which we do using fetch.
After that Node.js added native support for promises, there is no need to use libraries like Q or BlueBird
```