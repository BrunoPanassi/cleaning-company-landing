---
title: 'Multi Filter Column in Vuetify Data Table '
description: 'When the suggestion of the documentation doenst work'
date: '2021-04-24'
---

I know that there is a solution for this if you see the documentation for custom filter in data table, but i tried and for some reason it didn’t work. So i search for other solution and i find many other ways, but the only one that allowed multi filter column independent of the filtering order, was the one that i will show here.

So, i will take the common v-data-table used in the Vuetify documentation:
![Vuetify Data Table](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ba1jpkiyrantopdk9syg.png)

The first thing to do is use a slot for the header of the column name, that we will add a icon to activate a menu, that will have a v-text-field to filter the data and a button to clean the input.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/acoyffyezr4154hlxl8j.png)

And we will have this:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nab70n4cn75qwnze51d4.png)

Now we gonna need a variable, that we will called it dessertName to filter the data. To this we add it to the property v-model of the v-text-field in the menu of the column template, and add a click event on the v-btn to clean the input data.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9by1lmnd769mvit5xhfp.png)

A method is needed to filter the data when dessertName is filled, so we call it filterDessertName, and pass a argument called item to access the property name of the desserts array.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9nm5fm2zve4d1kej6rsr.png)

But, to the method work and return the data filtered, we need to create a computed property and call it in the prop items of the v-data-table.

In the computed property filteredDesserts we create the array conditions, and check every time that the variable dessertName is filled, if so, we add the method filterDessertName to the conditions, and then, we return the desserts array filtering every condition that have in the conditions array:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9z6jmr9dsoruzpay97lx.png)

And the v-data-table will be like this:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5q85bh3mttx1knhbntiv.png)

And the column name filtered will be like:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pl0s9s2ebrdxwxw7vbvn.png)

Ok, for now, he have a column that allow you to filter the data in it, but this is not a multi filtering, so we gonna do the same for the columns Calories and Fat, and add more data to the dessert array. The data will be Eclair Dark and Eclair Light with new values, to test the multi filtering in the right way.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z6nwu4su6eh9lf5th8bz.png)

The methods:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tg3dd9s773p0l88lcqup.png)

The computed property filteredDesserts:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gktr37yk2fg60x2db5y1.png)

And the v-data-table header templates for Calories and Fat. To have a better vision of which column is filtered, a small function is added in the color property of every v-icon:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o5ca4np0mlmubo80yztf.png)

And if we filter the column name with the text ec, the column calories with the value 2, and the column fat with the value 16, independent of the order that you put the values, we will see this row:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dha565k4cjcasirowz1q.png)

You can see the code and test the orders of the filter in this CodePen: 
https://codepen.io/BrunoPanassi/pen/dyNQZQP

Sure, you can make better the computed property filteredDesserts by decreasing the if statements and joining the filter variables and filter methods in one Object, but the purpose of this article, is only to show another way to do the multi filtering in the data table, other than by the documentation.

See you later.
