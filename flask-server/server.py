from flask import Flask, jsonify
from flask_cors import CORS

# Set up Flask application with CORS, which allows requests from different domains

app = Flask(__name__)
CORS(app)

@app.route('/api/home', methods=['GET'])
def get_profile():
    profile_data = {
        "name": "Robin Batingan",
        "occupation": "Student & Software Engineer",
        "about": "Hi, my name is Robin and I am an aspiring Software Developer and a 4th year student at North Seattle College. I have skills in Java and Python, as well as expierence in SQL, HTML/CSS, and Javascript. I like to play basketball,play games, and read in my freetime.",
        "work_experience": [
            {
                "title": "Site Reliability Engineer Fellowship",
                "company": "MLH Fellowship",
                "duration": "June 2024-Sep2024",
                "description": "Completed a 12-week SRE curriculum, supplemented with events and workshops by Meta engineers"
            },
            {
                "title": "Automation Intern",
                "company": "Lockheed Martin",
                "duration": "Jun 2023-Sep 2023",
                "description": "Developed and implemented Ansible automation for report generation, improving team efficiency by 90%'"
            },
            {
                "title": "SMART Intern",
                "company": "California State University - Los Angeles",
                "duration": "Jun 2022-Aug 2022",
                "description": "Developed and implemented Ansible automation for report generation, improving team efficiency by 90%'"
            },
            {
                "title": "Fire Control Technician",
                "company": "United States Navy",
                "duration": "May 2015-May2021",
                "description": "Orchestrated the deployment and upkeep of the Tomahawk computer system, encompassing software installations, user management, and proactive system update administration to sustain optimal equipment readiness'"
            }

        ],
        'hobbies': [
                '/jimmyButler.jpg',
                '/rockClimb.png',
                '/pic2.png',
                '/pic3.png'
        ],
        'hobbiesDescription': "I like to play and watch basketball. I also like to rock climb and take photo's as well as travel!!!!",
        "education": [
            {
                "degree": "Bachelor of Science in Computer Science",
                "university": "North Seattle College",
                "duration": "2025",
                "description": "Graduated with a 3.8 GPA, specializing in software engineering and web development."
            },
            {
                "degree": "Associates of Science in Computer Science",
                "university": "Seattle Central College",
                "duration": "2023",
                "description": "Maintained a strong academic record and participated in various extracurricular activities."
            }
        ],
        "travels": "Exploring new places and experiencing different cultures is one of my greatest passions. I've had the opportunity to travel to various countries around the world, with the priveledge to live in Japan and travel all around Asia and the US."
    }
    return jsonify(profile_data)

#Set port, setup server for external access
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
