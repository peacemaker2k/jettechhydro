import smtplib
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://jetechhydro.vercel.app/"}})

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
EMAIL_ADDRESS = 'sanjayjaya2000@gmail.com'
EMAIL_PASSWORD = 'mxya ounl yjng mvuo'  # App password


@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.get_json()

    msg = EmailMessage()
    msg["Subject"] = f"New Inquiry from {data['name']}"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = "akash06vijay@gmail.com"
    msg.set_content(f"""
    Name: {data['name']}
    Email: {data['email']}
    Phone: {data['phone']}
    Service: {data['service']}
    Message: {data['message']}
    """)

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)
        return jsonify({
            "success": True, 
            "message": "Email sent successfully! We'll get back to you soon.",
            "status": "success"
        }), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({
            "success": False, 
            "error": str(e),
            "message": "Failed to send email. Please try again or contact us directly.",
            "status": "error"
        }), 500


if __name__ == "__main__":
    app.run(debug=True)
