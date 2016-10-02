initSidebarItems({"enum":[["Async","Return type of future, indicating whether a value is ready or not."]],"fn":[["collect","Creates a future which represents a collection of the results of the futures given."],["done","Creates a new \"leaf future\" which will resolve with the given result."],["empty","Creates a future which never resolves, representing a computation that never finishes."],["failed","Creates a \"leaf future\" from an immediate value of a failed computation."],["finished","Creates a \"leaf future\" from an immediate value of a finished and successful computation."],["lazy","Creates a new future which will eventually be the same as the one created by the closure provided."],["oneshot","Creates a new in-memory oneshot used to represent completing a computation."],["select_all","Creates a new future which will select over a list of futures."]],"macro":[["task_local!","A macro to create a `static` of type `LocalKey`"],["try_ready!","A macro for extracting the successful type of a `Poll<T, E>`."]],"mod":[["stream","Asynchronous streams"],["task","Tasks used to drive a future computation"]],"struct":[["AndThen","Future for the `and_then` combinator, chaining a computation onto the end of another future which completes successfully."],["Canceled","Error returned from a `Oneshot<T>` whenever the correponding `Complete<T>` is dropped."],["CatchUnwind","Future for the `catch_unwind` combinator."],["Collect","A future which takes a list of futures and resolves with a vector of the completed values."],["Complete","Represents the completion half of a oneshot through which the result of a computation is signaled."],["Done","A future representing a value that is immediately ready."],["Empty","A future which is never resolved."],["Failed","A future representing a finished but erroneous computation."],["Finished","A future representing a finished successful computation."],["Flatten","Future for the `flatten` combinator, flattening a future-of-a-future to get just the result of the final future."],["Fuse","A future which \"fuse\"s a future once it's been resolved."],["Join","Future for the `join` combinator, waiting for two futures to complete."],["Join3","Future for the `join3` combinator, waiting for three futures to complete."],["Join4","Future for the `join4` combinator, waiting for four futures to complete."],["Join5","Future for the `join5` combinator, waiting for five futures to complete."],["Lazy","A future which defers creation of the actual future until a callback is scheduled."],["Map","Future for the `map` combinator, changing the type of a future."],["MapErr","Future for the `map_err` combinator, changing the error type of a future."],["Oneshot","A future representing the completion of a computation happening elsewhere in memory."],["OrElse","Future for the `or_else` combinator, chaining a computation onto the end of a future which fails with an error."],["Select","Future for the `select` combinator, waiting for one of two futures to complete."],["SelectAll","Future for the `select_all` combinator, waiting for one of any of a list of futures to complete."],["SelectAllNext","Future yielded as the result in a `SelectAll` future."],["SelectNext","Future yielded as the second result in a `Select` future."],["Then","Future for the `then` combinator, chaining computations on the end of another future regardless of its outcome."]],"trait":[["Future","Trait for types which are a placeholder of a value that will become available at possible some later point in time."],["IntoFuture","Class of types which can be converted themselves into a future."]],"type":[["BoxFuture","A type alias for `Box<Future + Send>`"],["Poll","Return type of the `Future::poll` method, indicates whether a future's value is ready or not."]]});