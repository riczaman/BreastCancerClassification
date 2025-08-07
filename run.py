#!/usr/bin/env python3
import subprocess
import sys
import os

# Get the directory of this script
script_dir = os.path.dirname(os.path.abspath(__file__))
venv_python = os.path.join(script_dir, 'venv', 'bin', 'python')
main_script = os.path.join(script_dir, 'breastcancerprediction.py')

# Run the main script with the virtual environment's Python
try:
    result = subprocess.run([venv_python, main_script], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("Errors:", result.stderr)
except Exception as e:
    print(f"Error running script: {e}")
