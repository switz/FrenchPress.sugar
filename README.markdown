# Barista-Beautifier.sugar

A JavaScript action sugar for MacRabbits code editor Espresso that beautifies HTML, CSS and JavaScript files into formatted code:

* Uses the library from jsbeautifier.org

* To run use the **Actions→Beautify** menu or press `Control + Alt + Cmd + B`

* This will not fix syntactically incorrect documents

* Works with **XML** and **LESS** files too (Experimental)

* This is beta software, please backup your code in advance. You may _undo_ the action by pressing `command+z` (or **Edit-→Undo**)

## Installation & Usage

**Requires Espresso 2.0**

The easiest way to install Barista-Beautifier.sugar is directly from GitHub:

    cd ~/Library/Application\ Support/Espresso/Sugars
    git clone git://github.com/jancbeck/Barista-Beautifier.sugar

https://github.com/jancbeck/Barista-Beautifier.sugar.git

Alternatively download the [archive](https://github.com/jancbeck/Barista-Beautifier.sugar/zipball/master) and execute it after extracting its contents.

Relaunch Espresso, and a new Action will be available in your Actions menu.
If you do not have a selection, the entire document will be processed.

## Development

Barista-Beautifier.sugar is a fork of [FrenchPress.sugar](http://github.com/switz213/FrenchPress.sugar) by switz213 who did all the hard work. This sugar basically just extends the support for HTML und CSS. The library by JS Beautifier is nearly untouched except that global variables JS have been removed. Espresso doesn't seem to like them very much.

Barista-Beautifier.sugar is written entirely in XML and JavaScript using Espresso's [JavaScript API](http://wiki.macrabbit.com/index/JavaScriptActions/)! Feel free to mess around with the code or fork it on github!

## To do

* Allow formatting options through sugar preferences panel
* Seperate CSS property and value by spacing. List grouped CSS rules in seperate lines.
* Don't display text-level inline HTML elements in seperate lines.

## Changelog

**1.0**:

* Initial release forked from [Frenchpress.sugar](http://github.com/switz213/FrenchPress.sugar)
* Beautify HTML, CSS and JS using the menu or key-combo (`Control + Alt + Cmd + B`)
* Will automatically match your Espresso tab settings (# of spaces, spaces or tabs)

## Thanks to:

### Ian Beck

I'm using have a dozen of his sugars and his community work is fantastic.

### Daniel Saewitz

I did not believe this was possible until I saw [Frenchpress.sugar](http://github.com/switz213/FrenchPress.sugar).

## JS Beautifier

Written by [Einar Lielmanis](mailto:einar@jsbeautifier.org)
	http://jsbeautifier.org/

Originally converted to JavaScript by [Vital](mailto:vital76@gmail.com)
"End braces on own line" added by [Chris J. Shull](mailto:chrisjshull@gmail.com)

## MIT License

Copyright (c) 2012 Jan Beck

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
