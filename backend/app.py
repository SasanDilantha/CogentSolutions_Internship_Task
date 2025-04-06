from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import os

app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'event_registration'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    try:
        firstname = data["firstname"]
        lastname = data["lastname"]
        job_title = data["jobTitle"]
        company = data["company"]
        mobile_number = data["number"]
        email = data["email"]
        company_url = data["url"]
        agree_to_policy = data["agree"]

        cur = mysql.connection.cursor()
        cur.execute("""
            INSERT INTO registrations (
                firstname, lastname, job_title, company,
                mobile_number, email, company_url, agree_to_policy
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            firstname, lastname, job_title, company,
            mobile_number, email, company_url, agree_to_policy
        ))
        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Registration successful"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
