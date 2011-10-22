# FrenchPress.sugar

A javascript action that beautifies javascript files into formatted code:

* Uses the library from jsbeautifier.org

* To run use Actions->Javascript menu or press `Control + Alt + Arrow Up`

* This will not fix syntactically incorrect documents

* This is beta software, please backup your code in advance. You may _undo_ the action by pressing `command+z` (or Edit->Undo)

## Installation

**Requires Espresso 2.0**

The easiest way to install FrenchPress.sugar currently is directly from GitHub:

    cd ~/Library/Application\ Support/Espresso/Sugars
    git clone git://github.com/switz213/FrenchPress.sugar

https://github.com/switz213/FrenchPress.sugar

Relaunch Espresso, and a new Javascript submenu will be available in your Actions menu.

## Development

Handy.sugar is written entirely in XML and JavaScript using Espresso's [JavaScript API](http://wiki.macrabbit.com/index/JavaScriptActions/)! Feel free to mess around with the code or fork it on github!

You may email me if you have any feedback, requests, or run across any problems.

hi@danielsaewitz.com

## Changelog

**1.0**:

* Initial release
* Beautify Javascript using menu or key-combo (`Control + Alt + Arrow Up`)
* Will automatically match your Espresso tab settings (# of spaces, spaces or tabs)

## Thanks to:

* Ian Beck
---------------

This could not have been completed without the [Handy.sugar](http://github.com/onecrayon/Handy.sugar.git) source code

* JS Beautifier
---------------

Written by [Einar Lielmanis](mailto:einar@jsbeautifier.org)
	http://jsbeautifier.org/

Originally converted to javascript by [Vital](mailto:vital76@gmail.com)
"End braces on own line" added by [Chris J. Shull](mailto:chrisjshull@gmail.com)

## MIT License

Copyright (c) 2011 Daniel Saewitz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
