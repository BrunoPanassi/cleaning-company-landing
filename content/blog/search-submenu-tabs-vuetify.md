---
title: 'Search submenu tabs with flatMap and Vuetify'
description: 'A simple, fast and elegant approach'
date: '2022-03-07'
type: 'Front-End'
---

On these days on work i had to add a search in a menu that has v-tabs on it, and when i finished, there was two approaches on how to do this. Of course that the changes in the system was more complex than in this example, but i hope that this can help someone.

## Before we dive into
The first approach was more simple (at least for me), that uses only _map_ and _filter_.The second approach was made by a work colleague that uses a _v-autocomplete_ and _flatMap_(that i had never heard before).

## Structure
So we have here a menu that have a sub menu, so you can imagine him like this:
![menu-structure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u06pice8e6j9hna8pf86.png)

Yes, a computed property that is an _Array_ of a _Object_ that has two props:

- **name**: Title of the menu (String)

- **sub**: Content of the sub-menu (Array of strings)
  
And this will be the data for the _v-tabs_ that have a _v-menu_ on each tab. I will focus here only in the _JS_ code, but you can check the _HTML_ in this link of [CodePen](https://codepen.io/BrunoPanassi/pen/OJOLBmd)

## 1º Approach
So the first approach will be a _map_ on the computed _tabs_ itself, that returns only the _sub_ names that includes the letters of the variable search(used by a _v-text-field_), and then returns only the tabs that have the _subs_:
![first-approach](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzpnm5ueeozzay8gnyl6.png)
The reason i thought this is the simplest way its for the familiar methods (filter and map) but this approach its not the clever or cleaner one.

## 2º Approach
This approach uses the flatMap, that _maps_ a nested array to a single array (simplifying the explanation), wich in this case it's the better option because we need only the values of the _sub_ property. And then filter only the values that matchs with the _search_ variable.
![second_approach](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nofqtssf01kmxej7q9a5.png)
In this example this computed property it's been used in a _v-auto-complete_ component.

## Conclusion
So for me the 2º approach was the cleaner one, both for code and screen design, and you can combine the search of the menu with a _$emit_ method to show the screen of the selected menu.

Thanks for reading, i hope that this was useful for you!


 
 

 
