from flask import render_template, Flask, flash, request


app = Flask(__name__)


@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        print(request.form)
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
