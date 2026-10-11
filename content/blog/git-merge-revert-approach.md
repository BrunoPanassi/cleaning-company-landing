---
title: 'OMG, this was not supposed to be merged, how do i revert?'
description: 'Every developer has been through this.'
type: 'Version Control'
date: '2022-04-12'
---

<p>Have you merged that branch from that PR that not supposed to be merged? Well, i already once, and i want to show how i got out of it.</p>
<br />
<p class="bold-title">What really happened?</p>
<p>On the project that this happened, there was two branches, that we will call here as 'main' and 'parallel'. Only changes from 'main' can merge to 'parallel', and not the other way around. But, on that day, i have merged changes from 'parallel' to 'main'.</p>
<br />
<p class="bold-title">What do next?</p>
<p>So on the <span class="bold-title">main</span> branch, it had a last commit, that looks like:</p>
<p class="lighter-title">`8f937c683929b08379097828c8a04350b9b8e183`</p>
<br />
<p>So i searched for "Git merge commit revert" and with all the things that i read, and the commit id that i got it, i had executed the bellow command:</p>
<p class=lighter-title>`git revert <commit_id>`</p>
<br />
<p>And an error message was shown:</p>
<p class="lighter-title">`git revert <commit_id> alone won't work. -m must be specified`</p>
<br />
<p class="bold-title">What is this '-m must be specified'?</p>
<br />
<p>So i searched deeper, and i found out this link on StackOverflow, that helped me a lot:</p>
<a href="https://stackoverflow.com/questions/7099833/how-to-revert-a-merge-commit-thats-already-pushed-to-remote-branch"
class="link-reference">How to revert a merge commi thats already pushed to remote branch</a>
<p style="margin-top: 16px">if you run 'git log' you will see the parents of the merge commit on the 'Merge' prop, like this:</p>
<p class="lighter-title">`commit 8f937c683929b08379097828c8a04350b9b8e183</p>
<p class="lighter-title">Merge: 8989ee0 7c6b236</p>
<p class="lighter-title">Author: Ben James <ben@example.com></p>
<p class="lighter-title">Date:   Wed Aug 17 22:49:41 2011 +0100`</p>
<br />
<p>When you run:</p>
<p class="lighter-title">`git revert <commit_id> -m 1`</p>
<p>You are saying that you want to come back like it was on 8989ee0.</p>
<br />
<p>And if you run:</p>
<p class="lighter-title">`git revert <commit_id> -m 2`</p>
<p>You want to come back on 7c6b236 tree.</p>
<br />
<p>Thanks for the reading, and i hope that this can help you like it helped me.</p>