---
title: "Grillon : HTTP API testing library in Rust"
description: "Introduction to Grillon, the Rust HTTP API testing library in Rust."
date: "2022-02-15"
---

# HTTP testing tools in Rust

I recently started a personal project involving a lot of HTTP APIs (microservices yay!) in Rust and I wanted to run some
end-to-end http testing to ensure their quality. Rust is a growing ecosystem, with amazing testing tools like
[httpmock](https://github.com/alexliesenfeld/httpmock), but is still very young and some tools are missing.

I was looking for a library to run end-to-end http requests with an elegant API to fully express what I'm testing.
A solution could have been to use the [cucumber-rs](https://github.com/cucumber-rs/cucumber) testing framework,
but it's not the most suitable way to test HTTP APIs in my opinion.
BDD offers the possibility to use an ubiquitous language that helps to involve the stakeholders from the beginning
and improve the communication. It works great when you are working in a team and you need to express things at a
higher level.

The downside is that you have a bigger maintenance cost due to the "glue code", so it doesn't really fit my needs as a
solo developer on my projects. I wanted to create an expressive and extensible library that can be used with any
testing approach (TDD, BDD, structural software testing, e2e, ...).

This is how [Grillon](https://github.com/theredfish/grillon) was born!

# Grillon

> Grillon offers an elegant and natural way to approach end-to-end HTTP API testing in Rust.

## A basic use case

Let's use jsonplaceholder which provides an online REST api for testing purposes. It will be our system under test.
Let's say we want to test that a post is correctly created :

- The request is correctly sent and we receive a valid status : `201`
- The response header is correctly set : `application/json; charset=utf-8`
- The response body is a valid json containing the expected id `101`

We will have three steps :

1. **Arrange** : We compose the http request
2. **Act** : This step is handled by the library. We act behind the scene where we send the request and deserialize the response
   to json
3. **Assert** : We verify that the result matches our expectations

```rust
#[tokio::test]
async fn end_to_end_test() -> Result<()> {
    // Arrange
    Grillon::new("http://jsonplaceholder.typicode.com")?
        .post("posts")
        .payload(json!({
            "title": "foo",
            "body": "bar",
            "userId": 1
        }))
        // Act and Assert
        .assert()
        .await
        .status(StatusCode::CREATED)
        .headers_exist(vec![(
            CONTENT_TYPE,
            HeaderValue::from_static("application/json; charset=utf-8"),
        )])
        .body(json!({
            "id": 101,
        }));

    Ok(())
}
```

That's it! If one assertion fails, your test will panic and the error will be captured by `libtest` (the built-in
testing / benchmarking framework in Rust). Try to change the status code for example!

For a more complete getting started, check the [README](https://github.com/theredfish/grillon#getting-started)!
I also recommend you to take a look to the [API documentation](https://docs.rs/grillon/latest/grillon).

## A custom http client

Now, you maybe need to use your own http client and not the one provided by Grillon powered by
[Hyper](https://github.com/hyperium/hyper). This is particularly useful if you have a specific behaviour attached to it, or in case Grillon is missing some features.

You can use the `Response` trait and define how to use the different elements composing the http response
(status, json and headers). In this example I'm using [reqwest](https://github.com/seanmonstar/reqwest) and since we
can't implement a `Trait` on a type that is not defined in the current crate, we will need a wrapper. For a more complete example you can check this [test](https://github.com/theredfish/grillon/blob/main/tests/assert/assert_builder.rs).

First we need to implement the trait :

```rust
use async_trait::async_trait;

struct ResponseWrapper {
    pub response: reqwest::Response,
}

#[async_trait(?Send)]
impl Response for ResponseWrapper {
    fn status(&self) -> StatusCode {
        self.response.status()
    }

    async fn json(self) -> Option<Value> {
        self.response.json::<Value>().await.ok()
    }

    fn headers(&self) -> HeaderMap {
        self.response.headers().clone()
    }
}
```

As you can see we use the `async_trait` dependency because `async fn` cannot be used in traits yet.
For more information see [async in Traits](https://rust-lang.github.io/async-book/07_workarounds/05_async_in_traits.html).

This will allow us to to send an HTTP request with `Reqwest` and assert the result.

```rust
// Arrange and Act
let response = reqwest::get(mock_server.server.url("/users/1"))
    .await
    .expect("Valid reqwest::Response");

// Assert
Assert::new(ResponseWrapper { response }).await.status_success();
```

# Next steps

The development of Grillon is driven by my own needs for the moment and I add features as I need them. But if you need
specific built-in functions feel free to open a new issue and/or contribute to the library!

For sure I will bring a lot of new features in the next months to support cookies, certificates, plain text,
multipart, ... so I invite you to star the [repository](https://github.com/theredfish/grillon) and watch it
(you can tick releases option) to receive the updates!

Happy testing!
