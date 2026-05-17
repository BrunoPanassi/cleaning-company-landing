---
title: 'What do you think what happens when you use find on Vue computed?'
description: 'By the end of this text, i will convince you not to use it'
date: '2026-05-04'
---

### What do you think the following method does?

array.find(prop => prop.id = id)

Well, it has '=' as an assignment and not '==' as a comparison, so it doesn't find anything and returns undefined.

Wrong!

It takes the first item from the list, changes the prop.id with the value passed as a parameter, and returns it to you.

JavaScript (especially Javascript) doesn't do what it should do, but rather what you wrote it to do.

It understand the function inside of the find method, and then execute it.

### Ok, so what should be the better way?

On this case you should use what a compute property expects, to return a value. So use the common standards like filter, map, flatMap, etc.