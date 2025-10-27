import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://jetechhydro.vercel.app"}})

@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.get_json()
    try:
        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {os.environ.get('RESEND_API_KEY')}",
                "Content-Type": "application/json"
            },
            json={
                "from": "onboarding@resend.dev",
                "to": ["kuttisanjay2000@gmail.com"],
                "subject": f"New Inquiry from {data['name']}",
                "html": f"""
                    <p><strong>Name:</strong> {data['name']}</p>
                    <p><strong>Email:</strong> {data['email']}</p>
                    <p><strong>Phone:</strong> {data['phone']}</p>
                    <p><strong>Service:</strong> {data['service']}</p>
                    <p><strong>Message:</strong><br>{data['message']}</p>
                """
            }
        )
        if response.status_code == 200:
            return jsonify({"success": True, "message": "Email sent successfully!"}), 200
        else:
            return jsonify({"success": False, "error": response.text}), 500
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
