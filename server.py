import http.server
import socketserver
import os

PORT = 8000

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

# Start the server
with socketserver.TCPServer(("", PORT), handler_object) as httpd:
    print(f"Server started at localhost:{PORT}")
    print("Open your browser and navigate to http://localhost:8000/")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()
