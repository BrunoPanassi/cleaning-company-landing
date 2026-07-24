---
title: 'When hover prop doesnt work on javascript frameworks'
description: 'On this case, choose the native way'
date: '2026-04-19'
type: 'Front-End'
---

Even if you've learned a framework that solves many problems beforehand, you might end up opting for a simpler solution, just using simpler functionalities.

Recently I tried using Vuetify's v-hover, because I needed to enable an icon when the user positioned the mouse cursor over a component.

I tried it, but it wasn't working exactly the way I wanted, until I remembered the good old mouseenter, searched for 'javascript mouse events' to see if that was what I wanted (since it also has mouseover) and it worked perfectly for what I needed.
