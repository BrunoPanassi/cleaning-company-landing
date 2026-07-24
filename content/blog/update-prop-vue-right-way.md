---
title: 'The only right way of updating prop on Vue component'
description: 'A mandatory rule for every Vue component'
date: '2026-03-29'
type: 'Front-End'
---

Changing a prop directly in a Vue component is ugly, and besides being ugly, it's also very performant.

Not to mention it's a huge code smell. (Smells like a hot bug coming out of the oven, mmm)

Now let's get serious. Suppose you need to change a prop in your component. The first thing you need to analyze is:

- Can I change this prop before passing it to the child component?

If the answer is yes, your reading ends here. Otherwise, the most common approach, and even mentioned in the documentation, is to emit an event that takes the updated value of the prop and change it in the parent component, thus creating a single flow.

But it doesn't end there, because the problem can be even more critical. Besides not being able to pass it already changed, you need to display it differently in the child component, and it will need to be changed within that component.

Thank goodness there's something called documentation, and down that rabbit hole you discovered that it's possible to create a computed object with getters and setters, so you can display it the way you need, and when you change it you change the prop directly... NOOOOO, you emit an event passing this new value to the parent component to update. You should never change a prop directly; to tell the truth, Vue doesn't even like doing that, and displays some warnings if you try.

"Ah, but there's toRef()..." Yes, it helps a lot, but would you want the parent component not to know about the variable changed in the child component? I'm 99% sure your future self wouldn't want that.

So does that mean I'll never need to use toRef, toRefs, and their cousins? Of course not, each context has a problem, each problem has a solution.

However, what I want to bring up here is:

You are in a Vue project, and you find a component that is somehow altering a prop (or appears to be doing so). Be aware that this is wrong and sooner or later, it will give you a headache.
