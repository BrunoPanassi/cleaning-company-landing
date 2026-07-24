---
title: 'The most simple way to create a date input on Vuetify'
description: 'No, its not with a properly date component'
date: '2026-05-16'
type: 'Front-End'
---

The easiest way to create a Date input using Vue and Vuetify is not with v-date-picker.

Sometimes you'll need to use it in a modal, and v-date-picker might be inconvenient to use with a v-menu.

Only in cases where it needs to be simple and fast, and without much configuration, use a v-text-field with type date, and you're done.