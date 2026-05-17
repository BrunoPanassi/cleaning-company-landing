---
title: 'OMG, this was not supposed to be merged, how do i revert?'
description: 'Every developer has been through this.'
date: '2022-04-12'
---

Have you merged that branch from that PR that not supposed to be merged? Well, i already once, and i want to show how i got out of it.

## What really happened?
On the project that this happened, there was two branches, that we will call here as **main** and **parallel**. Only changes from **main** can merge to **parallel**, and not the other way around. But, on that day, i have merged changes from **parallel** to **main**.

## What do next?
So on the **main** branch, it had a last commit, that looks like:
`8f937c683929b08379097828c8a04350b9b8e183`

So i search _"Git merge commit revert"_ and with all the things that i read, and the commit id that i got it, i had executed the bellow command:
`git revert <commit_id>`

And an error message was shown:
`git revert <commit_id> alone won't work. -m must be specified`

## What is this '-m must be specified'?

So i searched deeper, and i found out this link on **StackOverflow**, that helped me a lot:
[How to revert a merge commi thats already pushed to remote branch](https://stackoverflow.com/questions/7099833/how-to-revert-a-merge-commit-thats-already-pushed-to-remote-branch)

if you run _git log_ you will see the parents of the merge commit on the _Merge_ prop, like this:
`commit 8f937c683929b08379097828c8a04350b9b8e183
Merge: 8989ee0 7c6b236
Author: Ben James <ben@example.com>
Date:   Wed Aug 17 22:49:41 2011 +0100`

When you run:
`git revert <commit_id> -m 1`
You are saying that you want to come back like it was on _8989ee0_.

And if you run:
`git revert <commit_id> -m 2`
You want to come back on _7c6b236_ tree.

Thanks for the reading, and i hope that this can help you like it helped me.