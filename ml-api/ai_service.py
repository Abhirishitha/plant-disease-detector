import os
import json
from dotenv import load_dotenv
from google import genai

# Load .env
load_dotenv()

# Create Gemini Client
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def get_ai_recommendation(disease_name, confidence):
    """
    Generates AI recommendations using Gemini.
    """

    prompt = f"""
You are an experienced agricultural expert.

A deep learning model detected:

Disease: {disease_name}
Confidence: {confidence:.2f}%

Return ONLY valid JSON.

Format:

{{
    "description":"",
    "symptoms":[
        "",
        "",
        ""
    ],
    "severity":"",
    "organicTreatment":[
        "",
        ""
    ],
    "chemicalTreatment":[
        "",
        ""
    ],
    "prevention":[
        "",
        "",
        ""
    ],
    "farmerAdvice":"",
    "whenToSeekHelp":""
}}

Rules:

1. Return only JSON.
2. No markdown.
3. No explanation outside JSON.
4. Keep language simple.
5. If disease is Healthy,
   mention no treatment is needed.
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        # Remove markdown if Gemini adds it
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        return json.loads(text)

    except Exception as e:

        return {
            "description": "AI recommendation unavailable.",
            "symptoms": [],
            "severity": "Unknown",
            "organicTreatment": [],
            "chemicalTreatment": [],
            "prevention": [],
            "farmerAdvice": "",
            "whenToSeekHelp": "",
            "error": str(e)
        }