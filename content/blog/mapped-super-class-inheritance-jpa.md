---
title: 'TIL: @MappedSuperclass vs. @Inheritance (JPA)'
description: 'What i have learned about it and how this can help you'
date: '2022-12-17'
type: 'Back-end'
---

<p>Today i needed to learn the difference between MappedSuperclass and Inheritance especially for use in my personal project.</p>
<br />
<p style="font-weight: bold;  font-size: 1.2em">What do i needed in my project</p>
<br />
<p>
There was two tables, Person and Role. The Person table it's a super table, so there was more tables that inherits properties and methods from it, does not have the need for a table Person in the database, so Person does not use the Entity annotation.</p>
<br />
<p>But, i need to use the OneToMany and ManyToOne annotation between Person and Role tables, but how Person does not use Entity, the OneToMany annotation was not possible in Role (Yes, i also learned this).</p>
<br />
<p style="font-weight: bold;  font-size: 1.2em">So, the difference between the annotations and my use for each it.</p>
<br />
<p>I searched in the _StackOverflow_ and haved founded these links:</p>
<a href="https://stackoverflow.com/questions/9667703/jpa-implementing-model-hierarchy-mappedsuperclass-vs-inheritance"
style="text-decoration: underline; margin-left: 16px">JPA: Implementing Model Hierarchy - @MappedSuperclass vs. @Inheritance</a>
<br />
<a href="https://stackoverflow.com/questions/4769546/mappedsuperclass-and-onetomany"
style="text-decoration: underline; margin-left: 16px">@MappedSuperclass and @OneToMany</a>
<br />
<p style="font-weight: bold; margin-top: 20px; margin-bottom: 6px">What do i have learned from that:</p>
<p><span style="font-weight: bold"> - MappedSuperclass</span>: Will only be used to inherits props and methods and will not create a table in the database for it.</p>
<p><span style="font-weight: bold"> - Inheritance</span> With the use of the prop (_strategy = InheritanceType.TABLE_PER_CLASS_) and the _Entity_ annotation, will inherits the props and methods, and also, create a table for it in the database.</p> 
<br />
<p>if there is some misunderstood in my text, let me know so i can change it.</p>
<br />
<p>Thanks for reading and i hope i helped.</p>