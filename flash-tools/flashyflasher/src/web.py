import wifi
import socketpool
import time
import asyncio
from adafruit_httpserver import server, response
import settings

from badgeFunctions import *

TICK = 0.25


http = server.HTTPServer(socketpool.SocketPool(wifi.radio))


@http.route('/')
def index(request):
    with response.HTTPResponse(request) as r:
        r.send_file("static/index.html")

@http.route('/upload')
def upload(request):
    print("upload")
    data = assembleFile("/data/scanner.asm")
    with response.HTTPResponse(request) as r:
        r.send_file("static/loadNow.html")
        time.sleep(5)

        loadRAW(data)
        print("done")


def serve():
    name = settings.NET_NAME
    password = settings.NET_PASS
    wifi.radio.tx_power = 5
    wifi.radio.start_ap(name, password)
    address = str(wifi.radio.ipv4_address_ap)
    http.start(address, port=80, root_path='/static/')
    print("Serving on", address)
    while True:
        http.poll()
        #await asyncio.sleep(TICK)