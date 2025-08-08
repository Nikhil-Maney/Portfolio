import http.server
import socketserver
import os
import socket

# Define a list of ports to try
ports = [8000, 8080, 8001, 8888, 9000]

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # If path is '/', serve index.html
        if self.path == '/':
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Change to the directory containing the HTML files
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create an object of the above class
handler_object = MyHttpRequestHandler

# Try each port until we find one that works
for port in ports:
    try:
        with socketserver.TCPServer(("", port), handler_object) as httpd:
            print(f"Server started at localhost:{port}")
            print(f"Open your browser and navigate to http://localhost:{port}/")
            print("Press Ctrl+C to stop the server")
            httpd.serve_forever()
            break
    except socket.error as e:
        print(f"Port {port} is in use, trying next port...")
        if port == ports[-1]:
            print("All ports are in use. Please close another application using these ports or modify the port list in server.py")
            break
        print(f"Port {port} is in use, trying another port...")
        if port == ports[-1]:
            print("All ports in use. Please free up a port or modify the ports list in server.py.")
            break
