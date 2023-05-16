import sys
import unittest
import os
import numpy as np
import time
from PIL import Image
from torch import Tensor
from model import load_model_inference, prepare_input, \
    predict_image, CLASSES, INPUT_SIZE

# start the whole app with docker
# to go into backend docker container
# docker exec -it basegun-backend /bin/bash
# then cd app/src/ then "python test.py"

# Test only the model in pure python
# put image folder in src it will be easier
def test_model():
    for path in my_folder:
        for i in range(10):
            with open(path, 'rb') as f:
                res = predict_image(self.model, f.read())

            if i == 0:
                reference = res
            else:
                # pseudocode
                # check if res = reference
                # if not print res
                pass

# test api
def test_upload_and_logs(self):
    """Checks that the file upload works properly"""
    for path in my_folder:
        for i in range(10):
            with open(path, 'rb') as f:
                r = requests.post("http://localhost:5000/upload",
                    files={"image": f},
                    data={"date": time.time(), "geolocation": "12.666,7.666"})
            res = r.json()
            res = {"label": res["label"], "confidence": res["confidence"], "confidence": res["confidence_level"]}

            if i == 0:
                reference = res
            else:
                # pseudocode
                # check if res = reference
                # if not print res
                pass
