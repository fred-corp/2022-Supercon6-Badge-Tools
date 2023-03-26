# FlashyFlasher

## Introduction

This repo hosts the code for an ESP32-based assembler and loader for the Hackaday Supercon/Berlin badge. 
It uses any generic ESP32 board running circuit python. 

## Requirements 
 - ESP32 board with at least 2 available GPIO (we assigned Tx=3 and Rx=5)
 - Hackaday Berlin badge (duh), UART pins connected to the ESP32 with the beforementioned pins.
 
## Notes
Don't connect to the SAO header as it can't be use for loading programs (at the time of writing this documentation).
Be patient when running the assembler, it might take up to 10s on a heavy program!
To add files, connect the ESP32 (it should show up as a flashdrive). Drag and drop .asm files in the "data" folder.

## Milestones
 - ~~Directly upload a .hex file from the ESP32.~~ Finished just in time for the badge demoscene
 - ~~Integrate the assembler in the the FlashyFlasher.~~ Slow but works
 - Implement a web interface to choose the .asm file to assemble and send to the badge. (WIP)
 - Implement a text editor to directly create/edit asm files

## Acknowledgements

Made with ❤️, lots of ☕️, and lack of 🛌
