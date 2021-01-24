Virtual Pet: This is a virtual pet app allowing you to grow your virtual JS pet that imitataes the behaviors of a regular pet. Briefly, it feels hungry, needs to be walked to keep fit and ages. You can also talk to your pet to see if it needs feeding or walking. Just like in real life, if your pet gets too hungry or unfit, it will die. Otherwise, it'll die when it gets to 30 days old.

How to grow a pet?

1- Create a new pet using Pet() function.
- eg -> const Fido = new Pet('Fido');

2- Grow your pet older with growUp() method.
- eg -> fido.growUp();

3- Feed your pet using feed() function.
- eg -> fido.feed();

4- Walk your pet using walk() function.
- eg -> fido.walk();

5- Check your pet's fitness and hunger levels with checkUp() function.
- eg -> fido.checkUp() // This will return 'I am hungry' if hunger level is above 5/10, it'll return 'I need a walk' if fitness level is below 3/10 and 'I am hungry AND I need a walk' if both of the above statements evaluate true at once. 'I feel great!' will be returned if none of the above is true

You're encouraged to open issues if you'd like to propose any improvements/feedback.
