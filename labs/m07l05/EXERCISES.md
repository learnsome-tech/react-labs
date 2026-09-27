# Exercises — Client-Side Data Fetching Architectures with Suspense

Lesson `m07l05` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m07l05)

## Exercise 1: Build a Cached Resource Reader for User Profiles

1. Implement a resource cache that maps user IDs to fetch promises.
2. Author a UserProfile component that calls use(readUser(id)).
3. Wrap the profile in Suspense with an avatar placeholder fallback.
4. Confirm that rendering two identical cards makes only one network call.

> **Hint**: Check if cache.has(userId) before instantiating a new fetch promise.


---

© LearnSome.tech · support@iwantto.learnsome.tech
