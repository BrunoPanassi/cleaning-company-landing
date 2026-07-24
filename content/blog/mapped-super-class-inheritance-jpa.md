---
title: 'TIL: @MappedSuperclass vs. @Inheritance (JPA)'
description: 'What i have learned about it and how this can help you'
date: '2022-12-17'
type: 'Back-end'
---

Today i needed to learn the difference between _MappedSuperclass_ and _Inheritance_ especially for use in my personal project.

## What do i needed in my project
There was two tables, _Person_ and _Role_. The _Person_ table it's a super table, so there was more tables that inherits properties and methods from it, does not have the need for a table _Person_ in the database, so Person does not use the _Entity_ annotation.

But, i need to use the _OneToMany_ and _ManyToOne_ annotation between Person and Role tables, but how Person does not use _Entity_, the _OneToMany_ annotation was not possible in Role (Yes, i also learned this).

## So, the difference between the annotations and my use for each it.

I searched in the _StackOverflow_ and haved founded these links:
[JPA: Implementing Model Hierarchy - @MappedSuperclass vs. @Inheritance](https://stackoverflow.com/questions/9667703/jpa-implementing-model-hierarchy-mappedsuperclass-vs-inheritance)

[@MappedSuperclass and @OneToMany](https://stackoverflow.com/questions/4769546/mappedsuperclass-and-onetomany)

What do i have learned from that:

- **MappedSuperclass**: Will only be used to inherits props and methods and will not create a table in the database for it.

- **Inheritance**: With the use of the prop (_strategy = InheritanceType.TABLE_PER_CLASS_) and the _Entity_ annotation, will inherits the props and methods, and also, create a table for it in the database.

if there is some misunderstood in my text, let me know so i can change it.

Thanks for reading and i hope i helped.