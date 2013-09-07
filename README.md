Cardflip-polymer
=================
## Demo
[Check it live](http://konforti.net/cardflip-polymer/demo/)

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//polymer-project.org/polymer/polymer.min.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="../card-flip.html">
	```

3. Start using it!

	Place the flipper button
	```xml
	<card-flip-button></card-flip-button>
	```
	Place the card
	```xml
	<card-flip>
	    <div>First</div>
	    <div>Second</div>
	</card-flip>
	```
	[Check out the demo app](https://github.com/konforti/cardflip-polymer/blob/master/demo/index.html)
	
	## Options
	
	### Cards
	Attribute  | Options                   | Default             | Description
	---        | ---                       | ---                 | ---
	`flipdir`  | `left`, `up`, `down`      | `right`             | The flip direction
	
	By default Cards are flipped 'right', unless there a 'flipdir' attribute instructs otherwise.


	### Buttons
	Attribute     | Options       | Default             | Description
	---           | ---           | ---                 | ---
	`class-name`  | *String*      | `none`              | The button will affect only cards with this class
	
	A button will flips all cards on page, unless the there a `class-name` attribute instructs to influence only cards with this class attached.

	For more about the Polymer framework: http://www.polymer-project.org
