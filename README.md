# MedPredict AI - Breast Cancer Prediction Web Application

Advanced AI-powered breast cancer detection system using machine learning for educational purposes and breast cancer awareness.

## Demo

![Breast Cancer Prediction App Demo](breast-cancer-prediction-app/demo/app.gif)

## ✨ Features & Highlights

- **AI-Powered Detection**: Advanced machine learning algorithms for breast cancer prediction
- **Interactive 3D Visualization**: Three.js powered cell nucleus rendering
- **Comprehensive Dataset Analysis**: Wisconsin Breast Cancer Dataset with 30 diagnostic features
- **Real-time Predictions**: Instant results with confidence intervals
- **Educational Focus**: Designed for learning and breast cancer awareness

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/breast-cancer-prediction-app.git
   cd breast-cancer-prediction-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to http://localhost:3000

## Breast Cancer Classification with Logistic Regression

This project uses a logistic regression model to classify breast cancer tumors as **benign (0)** or **malignant (1)** based on fine needle aspiration (FNA) data.

### Overview

- **Dataset**: Breast cancer FNA dataset with binary labels.
- **Label Meaning**:
  - `0`: Benign
  - `1`: Malignant
- **Goal**: Predict tumor classification from input features using logistic regression.

### Project Structure

1. **Data Acquisition**
   - Load raw FNA dataset (CSV or similar).
2. **Preprocessing**
   - Handle missing/null values.
   - Normalize or scale numeric features (if needed).
   - Remove irrelevant columns (like IDs).
3. **Data Splitting**
   - Split into:
     - **Training Set** (used to fit the model)
     - **Test Set** (used to evaluate model accuracy)
4. **Model Training**
   - Apply logistic regression from `sklearn.linear_model`.
   - Fit model on training data.
5. **Prediction and Evaluation**
   - Run predictions on test data.
   - Evaluate using accuracy, precision, recall, and confusion matrix.
6. **Prediction on New Data**
   - Accept new input samples.
   - Predict malignancy probability using the trained model.

### How to Run

```bash
# Install dependencies
pip install -r requirements.txt

# Run the training script
python train.py

# Run prediction on new data (example)
python predict.py --input sample_input.csv
```
