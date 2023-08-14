---
title: "API testing in Rust with test contexts"
description: "In one of my Rust projects I needed to setup and reset specific contexts for functional
and end-to-end API tests. In this article I describe the test strategy I used for my PostgREST API."
image: "social_media_tools.png"
date: "2023-08-14"
---

I created a Rust API testing library, [Grillon](https://github.com/owlduty/grillon), that
I use as a test runner in my open source SaaS [Owl Duty](https://owlduty.com). But I also do what is
called "dogfooding", and use it to test my own SaaS APIs.

I believe real world examples bring the subject matter to life and offer interesting learning.
They give the reality on the ground and contribute to a the transmission of knowledge.
That's why in this article I decided to talk about my experience with end-to-end test and how to
configure test contexts in Rust.

## 📚Before we start

### PostgREST

To give you a bit of context, I'm building my API with [PostgREST](https://postgrest.org/en/stable/). Here are some reasons:

- Most of the time your API performs CRUD operations,
- PostgreSQL allow you to request data in a declarative way.
- Relations, constraints, roles and permissions comes out of the box.
- You can use procedural languages to write your functions, [PL/Rust](https://github.com/tcdi/plrust)
included.

### My testing flow

![Diagram of my testing flow with postgREST](/images/blog/api-testing-in-rust-with-test-contexts/postgrest.png)

### Testing knowledge

#### Functional tests

TODO

#### End-to-end (E2E) tests

To follow this article you don't need to know much about tests; but let's clarify what are
E2E tests. Whenever you are talking about E2E tests you need to set the context. Are we talking
about a user journey? Going through external services? Testing the UI, the backend, or both? As you
can see it depends on your test strategy. But the main idea is that you want to go from a point A
to a point B in a black box way - and test that the system as a whole works as intended and meets
your business requirements (user journeys for example).

In our case we will manipulate portions of the system via the public REST API and test different
user journeys. This will help us to verify those different parts:

- The API contract (status code, json schema, headers ...),
- the network from postgREST to postgreSQL (or any other services like proxies, load balancers, ...),
- the security such as roles, permissions or JWT tokens,
- and finally the data correctness through the API responses.

#### Test boundaries

I think this is a matter of "testing style", but I prefer to configure the system in a specific
state and only test some user journeys with E2E tests. That way I can easily try a specific scope
while reducing the setup time of my tests and ensuring test isolation. Then I define some larger
E2E tests that will take longer to execute and maintain but will be a good safety net. You need to
fine tune your test strategy to find a good compromise between test coverage, test stability and
execution time.

#### Developer experience

I value rapid feedback and great developer experience. As a test engineer I mostly design tools,
pipelines and testing infrastructures to remove frictions from development to production.
So it makes totally sense for me to spend time on good testing experience and being able to quickly
debug any critical path in my application.

## 🔥Let's get started

As a reminder we are in the context of Owl Duty, a SaaS that offers testing services. So users can
manage their tests, schedule them and be alerted if something is going wrong in production or on
specific environments.

I decided to reduce the examples to some test cases:

- A user sign up
  - Happy path: the user is created
  - Unhappy paths: the user already exists, and the email format is wrong
- A user login and request his list of scheduled tests

### Test context

During my reasearchs

### User Signup

#### Create a user
