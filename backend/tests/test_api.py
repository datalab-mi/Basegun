import unittest
import os
import time
from io import BytesIO
import requests
from PIL import Image, ImageChops

class TestModel(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestModel, self).__init__(*args, **kwargs)
        self.url = "http://localhost:5000"

    def test_home(self):
        """Checks that the route / is alive"""
        r = requests.get(self.url)
        self.assertEqual(r.text, "Basegun backend")

    def test_version(self):
        """Checks that the route /version sends a version"""
        r = requests.get(self.url + '/version')
        self.assertNotEqual(r.text, "-1")
        self.assertEqual(len(r.text.split('.')), 2) # checks version has format X.Y

    def test_upload_and_logs(self):
        """Checks that the file upload works properly"""
        path = os.path.join(
            os.path.dirname(os.path.abspath(__file__)),
            "revolver.jpg")
        geoloc = "12.666,7.666"

        self.assertTrue("OS_USERNAME" in os.environ)
        with open(path, 'rb') as f:
            r = requests.post(self.url + "/upload",
                files={"image": f},
                data={"date": time.time(), "geolocation": geoloc})
        self.assertEqual(r.status_code, 200)
        res = r.json()

        # checks that the json result is as expected
        self.assertEqual(set(res.keys()), set({"label", "confidence", "confidence_level", "path"}))
        self.assertEqual(res["label"], "revolver")
        self.assertAlmostEqual(res["confidence"], 99.53, places=1)
        self.assertTrue(res["confidence_level"], "high")
        self.assertTrue("ovh" in res["path"])
        # checks that written file is exactly the same as input file
        time.sleep(30)
        response = requests.get(res["path"])
        with Image.open(path) as image_one:
            with Image.open(BytesIO(response.content)) as image_two:
                self.assertEqual(image_one.size, image_two.size)
                diff = ImageChops.difference(image_one, image_two)
                self.assertFalse(diff.getbbox())
        # checks that the result is written in logs
        r = requests.get(self.url + "/logs")
        self.assertEqual(r.status_code, 200)
        # checks the latest log "Upload to OVH"
        self.assertEqual(r.json()[0]["_bg_image_url"], r.json()[1]["_bg_image_url"])
        self.assertEqual(r.json()[0]["short_message"], "Upload to OVH successful")
        # checks the previous log "Identification request"
        log = r.json()[1]
        self.assertEqual(
            set(log.keys()),
            set({'timestamp', '_bg_device', 'host', '_bg_model_time', 'version', '_bg_device_os', '_bg_device_family',
            'short_message', '_bg_confidence', '_bg_confidence_level', '_bg_upload_time', '_bg_date', '_bg_user_id', '_bg_label', '_bg_image_url',
            'level', '_bg_geolocation', '_bg_device_browser', '_bg_version', '_bg_model'})
        )
        self.assertEqual(log["level"], 6)
        self.assertEqual(log["short_message"], "Identification request")
        self.assertTrue("-" in log["_bg_user_id"])
        self.assertEqual(log["_bg_geolocation"], geoloc)
        self.assertTrue(log["_bg_upload_time"]>=0)

    def test_feedback_and_logs(self):
        """Checks that the feedback works properly"""
        confidence = 90
        label = "revolver"
        confidence_level = "high"
        r = requests.post(self.url + "/feedback",
                json={"image_url": "test", "feedback": False, "confidence": confidence, "label": label, "confidence_level": confidence_level})
        self.assertEqual(r.status_code, 200)
        r = requests.get(self.url + "/logs")
        self.assertEqual(r.status_code, 200)
        log = r.json()[0]
        self.assertEqual(log["level"], 6)
        self.assertEqual(log["short_message"], "Identification feedback")
        self.assertEqual(log["_bg_image_url"], "test")
        self.assertFalse(log["_bg_feedback_bool"])
        self.assertEqual(log["_bg_confidence"], confidence)
        self.assertEqual(log["_bg_label"], label)
        self.assertEqual(log["_bg_confidence_level"], confidence_level)

    def test_geoloc_api(self):
        """Checks that the geolocation api works properly"""
        r = requests.get("https://api.ipgeolocation.io/ipgeo?apiKey=17dc6bed199b45ca92d60079686e03f1")
        res = r.json()
        self.assertTrue("latitude" in res.keys())
        self.assertTrue("longitude" in res.keys())
        lat = float(res["latitude"])
        self.assertTrue(abs(lat) < 90)
        lon = float(res["longitude"])
        self.assertTrue(abs(lon) < 180)