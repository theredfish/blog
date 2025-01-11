---
title: "Announcing Grillon v0.4.0"
description: "Grillon is an expressive Rust library to test your HTTP APIs. Announcing v0.4.0."
image: "grillon_cover.png"
date: "2023-01-31"
---

This blog post was originally posted on [dev.to](https://dev.to/owlduty/grillon-the-expressive-rust-library-to-test-your-http-apis-52om) but I prefer to host my content here.

## About Grillon

[Grillon](https://github.com/owlduty/grillon) is a Rust testing library that helps you write API tests in an expressive and natural way. It currently supports HTTP and I plan to extend it to other protocols/frameworks such as gRPC, WebSockets, SSL (certificates), TCP, UDP, ICMP.

I'm currently focusing on HTTP testing features and ensuring a good developer experience (API, book, global documentation, examples). My goal is to make it easier for people to navigate the project and contribute.

## An expressive API

My priority is to offer a great developer experience through an API that feels natural and intuitive to use. The [v0.4.0](https://github.com/owlduty/grillon/releases/tag/v0.4.0) comes with many improvements to compose assertions with predicates.

```rust
Grillon::new("http://jsonplaceholder.typicode.com")?
  .post("posts")
  .payload(json!({
    "title": "foo",
    "body": "bar",
    "userId": 1
  }))
  .assert()
  .await
  .status(is_success())
  .status(is(201))
  .response_time(is_less_than(500))
  .json_body(is(json!({
    "id": 101
  })));
```

Here is the current list of assertions supported with predicates for HTTP:

- status: `is`, `is_not`, `is_between`, `is_success`, `is_client_error`, `is_server_error`
- response time: `is_less_than`
- headers: `is`, `is_not`, `contains`, `does_not_contain`
- body: `is`, `is_not`

Each predicate function can take one or more types compatible with the tested subject. For example with `status`, the `is` predicate accepts these different types: `Range<u16>` (between), `u16`, `StatusCode`.

## Write your own assertion logic

While waiting for more built-in test functions (like json path for `body`), or if you have a specific need, you can use the `assert_fn` function. It allows you to access the internal representation of an http response under test through an instance of `Assert`.

## Configure your logs

As I'm using the library for Owl Duty I need to output json data. I decided to make the logs configurable so you can choose what best suits your needs:

- `StdAssert`: only prints assertion failures via `std::assert` macro. This is the default mode.
- `StdOut`: prints all assertion results to standard output.
- `Json`: formats assertion results into json output.

If you configure your log settings like this:

```rust
Grillon::new("http://jsonplaceholder.typicode.com")?
  .log_settings(LogSettings::Json);
```

Here is an example of json output you will get from an assertion:

```json
{
   "left":201,
   "part":"status code",
   "predicate":"should be",
   "result":"passed",
   "right":201
}
```

## When to use Grillon?

Mainly when you want to test live APIs, here is a non-exhaustive list:

- Endpoint monitoring
- Synthetic monitoring
- Integration tests
- Automated API calls (scripts)
- E2E API tests

It really depends on your needs. The thing is, Grillon is flexible and as long as you want to automate API calls, it will be a good choice. Note however that some features are missing(*) for the moment (client certificates, HTTP 2, ...). I'm on it! If you're interested in a particular feature or would like to contribute, you can check the [issues](https://github.com/theredfish/grillon/issues).

(*) _but you can still provide your own http client and response handler by implementing the `Response` trait ([see api doc](https://docs.rs/grillon/latest/grillon/response/trait.Response.html))._

---

## What's next

As I briefly mentioned, I will first focus on the documentation and developer experience (book, examples, ...). Then I'll work on extending HTTP testing functionality, supporting more protocols, making it easier to run in pipelines and outside of Rust projects, producing logs, metrics, tracing, ... everything to deliver a production-ready test library.

Thanks for reading! Happy hacking/coding!
