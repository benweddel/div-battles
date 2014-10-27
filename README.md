# Div Battles

The Div Battles plug-in "battles" two divs of your choosing on an html page. The 2 divs will initially shake and then rush each other toward a convergence point you select.

NOTE: This plug-in is best suited for 2 divs that are placed apart from one another left and right with at least some space in-between them.

---

## Install

Copy the `battle.js` in your project folder.

Include script tags at the end of your body tag to load in the jQuery and the file. Ex:

```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="battle.js"></script>
</body>
```
Note: You may need to change the src location of `battle.js` depending on where you copy the file.


##Usage

Select the two divs you want to use for the battle. Give the left div an ID of "battle1" and the right div an ID of "battle2". Find a convergence point (the point where the divs will collide) on your page and give it an ID of "conv". 

##Settings

Parameter | Type | Default | Description
--- | --- | --- | ---
`battle1`| string | `#battle1` | The ID the left div will use, string value must start with "#"
`battle2`| string | `#battle2` | The ID the right div will use, string value must start with "#"
`converge`| string | `#conv` | The ID of the converge point where the 2 divs will collide, string must start with "#"
`prepTime`| number | `4` | The number of shake iterations
`prepSpeed`| number | `60` | The shake speed of the divs, measured in milliseconds
`rushSpeed`| number | `250` | The speed at which the divs rush to battle, measured in milliseconds

##License
This projected is licensed under the terms of the MIT license.






