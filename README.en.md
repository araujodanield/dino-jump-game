##### <img height="15px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png">[  Leia este documento em português](README.md)

<div display="block" align="center">
  <img height="200px" alt="dino-jump" src="https://cdn.discordapp.com/attachments/673658623892914207/1002439138953412649/ezgif-4-a81e658d3e.gif">
  <h1><b>Dino Jump Game</b></h1>
  <code><em><b>Project version: 0.1</b></em></code>
</div>

#

## **Introduction**
Hello! As a beginner who finished covering the fundamentals of HTML, CSS, and JS, I still don't feel confident enough to start creating my own portfolio page, so I decided to try something simpler first to gather some experience. And that was my idea, create a jumping game based on Google Chrome's dino game. 😂

This is my first "big" project, where I try to develop all from scratch with only my knowledge of HTML, CSS, and JS, using a minimum of tutorials when necessary. Like the repository description says, the primary objective of this project is to practice and learn more about CSS and DOM, more specifically, some advanced CSS properties like 
<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes" target=”_blank”>`@keyframes`</a> 
and how the manipulation of elements with JavaScript really works.<br>

All the assets I'm using in this project are free to download and can be found 
<a href="https://www.gameart2d.com/freebies.html" target=”_blank”><b>here</b></a>.

If you want, you can check the game by <a href="https://araujodanield.github.io/Dino-Jump-Game/" target="_blank"><b>clicking here</b></a> (be aware that's still very bugged).

#

### Below I list the bugs and errors of the current version, as well as the following steps to be taken after fixing these issues.

<br>

## **Issues to be fixed:**
> - ### The character animations don't stop/freeze after the *"Game-Over"*. If you press the *jump* key, it starts running again. The correct would be you won't be able to do anything until restart the game;

> - ### Probably because I'm using GIFs for the character when you hold the *jump* key, this makes the char perform two correct jumps, but then the toggle condition between *run* and *jump* GIFs breaks, locking the char on the ground and repeating the first frame of the GIF until you release the key;

> - ### Any hit with the rock that doesn't occur by the ground will not execute the *'death'* animation. It will be stuck in the *run* animation;

> - ### Pressing the *jump* key after the *'death'* animation will reset the char to the *run* animation;

> - ### In all my attempts to create a *"Restart"* screen with CSS, I couldn't make it appear over the background screen, even declaring a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index" target=”_blank”>`z-index`</a> for each element, so I did a simple and provisory button to do it reloading the page for now.

<br>

## **Project's next steps:**
> - ### Set a specific keyboard key to execute the *jump*;

> - ### Add a *"Start Game"* screen for the game doesn't auto-start when you open the page;

> - ### Add a *"Restart"* screen for the *"Game-Over"* and set the **R** key for also do it in the middle of the gameplay;

> - ### Create a *Scoring* system;

> - ### Add a condition to gradually increase the *game speed* based on the *player's points*;

> - ### Make a *game screen* with adaptative width because I made the current screen for a minimized window;

> - ### Add sounds for the *jump*, *points*, *UI buttons*, and add a background music.
>   ##### <b>*This one is a <em>"Maybe"</em> because I don't have the slightest idea how to do it with JS, and it looks like something complex, so I will let it for the project's end.</b>

<br>

### That's it! If you are interested in doing a similar project and want to use this repository as a base, feel free to do so! 
### And if you have any tips to help me, send me a message. It will be very helpful and welcome! 😀

#

## **References and Tutorials:**
> <h3><a href="https://www.youtube.com/watch?v=r9buAwVBDhA" target=”_blank”>[Youtube] Como criar um jogo SIMPLES usando JavaScript e HTML | JavaScript para iniciantes - Tutorial</a> made by <a href="https://github.com/manualdodev" target=”_blank”>@manualdodev</a>.</h3><small>*Audio in pt-br only.</small>

<br>

> <h3><a href="https://css-tricks.com/how-to-play-and-pause-css-animations-with-css-custom-properties/" target=”_blank”>[Article] How to Play and Pause CSS Animations with CSS Custom Properties</a> made by <a href="https://twitter.com/madsstoumann" target=”_blank”>@madsstoumann</a>.

<br>

> <h3><a href="https://blog.logrocket.com/creating-infinite-css-background-image-loop/" target=”_blank”>[Article] Creating an infinite CSS background image loop</a> made by <a href="https://twitter.com/MrConerMurphy" target=”_blank”>@MrConerMurphy</a>.

#

<h3 align="center"><em>By the end of this project, I intend to turn this README file into a full-written and detailed step-by-step tutorial to help other beginners interested in creating a similar project.</em></h3>

#

##### <img height="15px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png">[  Leia este documento em português](README.md)
