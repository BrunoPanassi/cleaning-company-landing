---
title: 'Search submenu tabs with flatMap and Vuetify'
description: 'A simple, fast and elegant approach'
date: '2022-03-07'
type: 'Front-End'
---

<p>On these days on work i had to add a search in a menu that has v-tabs on it, and when i finished, there was two approaches on how to do this. Of course that the changes in the system was more complex than in this example, but i hope that this can help someone.</p>
<br />
<p class="bold-title">Before we dive into</p>
<p>The first approach was more simple (at least for me), that uses only 'map' and 'filter'.The second approach was made by a work colleague that uses a 'v-autocomplete' and 'flatMap'(that i had never heard before).</p>
<br />
<p class="bold-title">Structure</p>
<p>So we have here a menu that have a sub menu, so you can imagine him like this:</p>
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u06pice8e6j9hna8pf86.png">
<br />
<p>Yes, a computed property that is an 'Array' of a 'Object' that has two props:</p>
<p style="margin-left: 12px"><span class="bold-title">- name</span>: Title of the menu (String)</p>
<p style="margin-left: 12px"><span class="bold-title">- sub</span>: Content of the sub-menu (Array of strings)</p>
<br />
<p>And this will be the data for the 'v-tabs' that have a 'v-menu' on each tab. I will focus here only in the 'JS' code, but you can check the 'HTML' in this link of :</p>
<a href="https://codepen.io/BrunoPanassi/pen/OJOLBmd" class="link-reference">https://codepen.io/BrunoPanassi/pen/OJOLBmd</a>
<p class="bold-title" style="margin-top: 12px">1º Approach</p>
<p>So the first approach will be a 'map' on the computed 'tabs' itself, that returns only the 'sub' names that includes the letters of the variable search(used by a _v-text-field_), and then returns only the tabs that have the 'subs':</p>
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzpnm5ueeozzay8gnyl6.png">
<br />
<p>The reason i thought this is the simplest way its for the familiar methods (filter and map) but this approach its not the clever or cleaner one.</p>
<br />
<p class="bold-title">2º Approach</p>
<p>This approach uses the flatMap, that _maps_ a nested array to a single array (simplifying the explanation), wich in this case it's the better option because we need only the values of the _sub_ property. And then filter only the values that matchs with the _search_ variable.</p>
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nofqtssf01kmxej7q9a5.png">
<br />
<p>In this example this computed property it's been used in a _v-auto-complete_ component.</p>
<br />
<p class="bold-title">Conclusion</p>
<p>So for me the 2º approach was the cleaner one, both for code and screen design, and you can combine the search of the menu with a _$emit_ method to show the screen of the selected menu.</p>
<br />
<p>Thanks for reading, i hope that this was useful for you!</p>


 
 

 
