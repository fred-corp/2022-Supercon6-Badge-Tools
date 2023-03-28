# FlashyFlasher

## Introduction

This folder hosts the code for an ESP32-based assembler and loader for the Hackaday Supercon/Berlin badge.
It uses any generic ESP32 board running [CircuitPython](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/installing-circuitpython).

> For those remembering, a bare minimum version (uploading a pre-compiled binary, without webpage) was presented at the badge hacking ceremony at the Hackaday Berlin Conference :D

## Requirements

- ESP32 board with at least 2 available GPIO (we assigned `TX` to 3 and `RX` to 5) and [CircuitPython](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/installing-circuitpython) capabilities.
- Hackaday Berlin badge (duh), UART pins (on the expandion header, pins 2 and 3) connected to the ESP32 with the beforementioned pins.

## Notes

Don't connect to the SAO header as it can't be used for loading programs (at the time of writing this documentation).  
When connecting the ESP32 to a computer, make sure you're not backfeeding power from the USB interface from the ESP32 back to the badge (we found this out the hard way by having the batteries on the badge vent out their electrolyte).  
Be patient when running the assembler, it might take up to 20s on a heavy program !  
To add files, connect the ESP32 to your computer (it should show up as a flashdrive). Drag and drop `.asm` files in the `data` folder.  

## Milestones

- [x] ~~Directly upload a .hex file from the ESP32.~~ Finished just in time for the badge demoscene
- [x] ~~Integrate the assembler in the the FlashyFlasher.~~ Slow but works
- [ ] Implement a web interface to choose the .asm file to assemble and send to the badge. (WIP)
  - [x] ~~Create a webpage to upload a default file.~~ Works, but is slow due to re-occuring requests (fix is coming)
  - [ ] Implement a file selector
  - [ ] Implement an assembly editor
  - [ ] Implement an "upload file" option
- [ ] Make it word with in "AP mode" or "Network" mode.
- [ ] Implement the emulator
  - [ ] Implement the emulator in the ESP32
  - [ ] Implement the emulator in the webpage

## Acknowledgements

Made with ❤️, lots of ☕️, and lack of 🛌
