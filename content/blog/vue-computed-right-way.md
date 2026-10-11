---
title: 'What do you think what happens when you use find on Vue computed?'
description: 'By the end of this text, i will convince you not to use it'
date: '2026-05-04'
type: 'Front-End'
---

<p style="font-weight: bold;  font-size: 1.2em">What do you think the following method does?</p>
<p style="font-weight: lighter">array.find(prop => prop.id = id)</p>
<br />
<p>Well, it has '=' as an assignment and not '==' as a comparison, so it doesn't find anything and returns undefined.</p>
<br />
<p>Wrong!</p>
<br />
<p>It takes the first item from the list, changes the prop.id with the value passed as a parameter, and returns it to you.</p>
<br />
<p>JavaScript (especially Javascript) doesn't do what it should do, but rather what you wrote it to do.</p>
<br />
<p>It understand the function inside of the find method, and then execute it.</p>
<br />
<p style="font-weight: bold; font-size: 1.2em">Ok, so what should be the better way?</p>
<br />
<p>On this case you should use what a compute property expects, to return a value.
<br /> So use the common standards like filter, map, flatMap, etc.</p>