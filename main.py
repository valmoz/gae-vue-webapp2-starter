import webapp2
import os
from google.appengine.ext.webapp import template


class IndexHandler(webapp2.RequestHandler):
    def get(self):
        if os.getenv('SERVER_SOFTWARE', '').startswith('Google App Engine/'):
            requests_host = 'http://localhost:3000'

        else:
            # production
            requests_host = ""

        template_params = {
            "requests_host": requests_host
        }

        html = template.render("app/dist/index.html", template_params)
        self.response.out.write(html)

app = webapp2.WSGIApplication([
    ('/', IndexHandler)
], debug=True)
