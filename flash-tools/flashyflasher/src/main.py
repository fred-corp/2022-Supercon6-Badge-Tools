import web
import asyncio
import time

def main():
    #web_task = asyncio.create_task(web.serve())
    print("Hey!")
    #await asyncio.gather(web_task)
    web.serve()

main()