import board
import busio
from assemble import *

uart = busio.UART(board.IO3, board.IO5, baudrate=9600) # TX RX

def assembleFile(fname):
    with open(fname, 'r') as f:
        asm = f.read()
    
    pgm = parse_asm(asm)
    return pgm

def load(fname):
    with open(fname, 'rb') as f:
        pgm = f.read()
    
    uart.write(pgm)
    #uart.flush()
    uart.write(b'\0' * 1024) # sometimes flush doesn't seem to work. this'll fix it

def loadRAW(rawData):
    uart.write(rawData)
    #uart.flush()
    uart.write(b'\0' * 1024) # sometimes flush doesn't seem to work. this'll fix it

data = assembleFile("/data/scanner.asm")
loadRAW(data)