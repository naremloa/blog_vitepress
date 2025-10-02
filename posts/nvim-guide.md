---
title: Nvim Guide
description: A simple guide to using Neovim.
editedAt: 2025-10-02T00:10:25+08:00
category: Vim
tags:
datetime: 2025-10-02T00:10:25+08:00
---
# Neovim Guide

## Operator
| operator | key
| ---- | ----
| delete | `d`
| yank | `y`
| change | `c`
| case reversal | `g~`
| uppercase | `gU`
| lowercase | `gu`
| indent | `>`
| dedent | `<`

## Motion
| motion | key
| ---- | ----
| word forward/end/backward/end backward | `w` `e` `b` `ge`
| line start | `^` `0`
| line end | `$`
| find char forward/backward | `f{char}` `F{char}`
| till before char forward/backward | `t{char}` `T{char}`
| repeat last f/F/t/T forward/backward | `;` `,`

## Text object

| text object | key
| ---- | ----
| inner/a word | `iw` `aw`
| inner/a sentence | `is` `as`
| inner/a paragraph | `ip` `ap`
| inner/a parentheses | `i(` `i)` `a(` `a)`
| inner/a tag | `it` `at`

## Scenario-Based Action

1. **Efficient navigation within a single file**

| scenario | key
| ---- | ----
| vertical navigation full page | `Ctr+b` `Ctr+f`
| vertical navigation half page | `Ctr+u` `Ctr+d`
| vertical navigation line | `Ctr+y` `Ctr+e`

2. **Common action**

| scenario | key
| ---- | ----
| undo / redo | `u` `Ctr+r`
| [mini.surround] add /remove surrounding | `gsa+{text object}+{char}` `gsd+{text object}`
