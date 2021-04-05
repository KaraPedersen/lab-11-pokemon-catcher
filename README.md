## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) T

## HTML Setup
1) Radio Button for Pokemon
20 Button to catch Pokemon

### State
    - Encounters - caught for each pokemon
    -let captures = 0


#### Events
- on click
    - send selected Pokemon to the PokeDirectory
     - figure out which Pokemon is selected
     - ask is Pokemon in the cart?
     - grab PokeDirectory from LocalStorage
    - generate 3 new Pokemon
        - add encountered Pokemon to the PokeDirectory
        - grab pokeDirectory from LocalStorage
        - ask is Pokemon in the cart?

