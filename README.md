# 🚗 Indian Passenger Vehicle Market Analytics Platform

> **An end-to-end data analytics platform for the Indian Passenger Vehicle Market (2016–2026), built using Streamlit, PostgreSQL, Plotly, and Scikit-learn.**

The platform analyzes **11 years (2016–2026)** of Indian passenger vehicle sales data covering **20 leading automobile brands**. It provides interactive dashboards, market intelligence, brand and model comparisons, EV market insights, forecasting, and business-oriented analytics to support data-driven decision-making.

---

# 📌 Table of Contents

- Project Overview
- Objectives
- Key Features
- Dashboard Modules
- Dataset Information
- Database Design
- Technologies Used
- Data Analytics Concepts
- Machine Learning Concepts
- Data Visualization
- System Architecture
- Project Structure
- Installation
- Database Setup
- Deployment
- Future Enhancements
- Screenshots
- Author

---

# 🚀 Project Overview

The Indian Automobile Industry generates a massive amount of sales data every year. Understanding this data manually is difficult for manufacturers, analysts, dealerships, and researchers.

This project transforms raw sales data into interactive dashboards that allow users to:

- Analyze market trends
- Compare automobile brands
- Compare vehicle models
- Analyze category performance
- Explore EV adoption
- Forecast future sales
- Generate business insights

The application is designed as a Business Intelligence dashboard using modern data analytics techniques.

---

# 🎯 Objectives

- Analyze Indian Passenger Vehicle Market (2016–2026)
- Study market trends of 20 automobile brands
- Compare EV and ICE vehicle performance
- Understand customer demand using sales analytics
- Visualize trends through interactive dashboards
- Predict future sales using Machine Learning
- Support business decisions using data

---

# 📊 Dataset Information

## Time Period

**2016 – 2026**

## Industry

Indian Passenger Vehicle Market

## Brands Covered

- Maruti Suzuki
- Hyundai
- Tata Motors
- Mahindra
- Kia
- Toyota
- Honda
- MG
- Renault
- Nissan
- Volkswagen
- Skoda
- Ford
- Chevrolet
- Fiat
- Datsun
- Jeep
- Citroën
- Mitsubishi
- Isuzu

## Vehicle Categories

- Hatchback
- Sedan
- SUV
- MUV
- MPV
- Compact SUV
- Electric Vehicles (EV)
- Hybrid Vehicles

---

# ✨ Key Features

## Dashboard

- Interactive Streamlit Dashboard
- Responsive UI
- Sidebar Navigation
- Interactive Filters
- Dynamic Charts

---

## Market Analysis

- Total Vehicle Sales
- Monthly Sales Trends
- Year-wise Analysis
- Market Growth
- Seasonal Analysis
- Revenue Analysis

---

## Brand Analysis

- Brand Performance
- Market Share
- Sales Distribution
- Brand Ranking
- Growth Comparison

---

## Model Analysis

- Model-wise Sales
- Top Selling Models
- Revenue Contribution
- Model Comparison

---

## Category Analysis

- Hatchback Analysis
- Sedan Analysis
- SUV Analysis
- MUV Analysis
- EV Category Analysis

---

## EV Analysis

- EV Sales Growth
- EV Adoption Rate
- EV Brand Comparison
- EV Model Performance
- EV Market Share

---

## Comparison Dashboard

Compare

- Brand vs Brand
- Model vs Model
- Category vs Category
- EV vs ICE Vehicles

---

## Forecasting

Predict future vehicle sales using

- Linear Regression
- Trend Analysis
- Historical Sales Data

---

# 📈 Analytics Performed

The project performs multiple business analytics operations.

## Descriptive Analytics

- Total Sales
- Average Sales
- Market Share
- Revenue
- Growth Rate

---

## Comparative Analytics

- Brand Comparison
- Model Comparison
- Category Comparison
- EV Comparison

---

## Trend Analysis

- Monthly Trends
- Quarterly Trends
- Yearly Trends
- Seasonal Trends

---

## Predictive Analytics

- Sales Forecast
- Future Trend Prediction
- Growth Estimation

---

# 🧠 Machine Learning Concepts Used

- Linear Regression
- Feature Engineering
- Historical Trend Prediction

Libraries

- Scikit-learn
- NumPy
- Pandas

---

# 📊 Data Visualization

Charts used

- Line Charts
- Bar Charts
- Pie Charts
- Scatter Plots
- Area Charts
- Donut Charts
- Trend Charts

Libraries

- Plotly Express
- Plotly Graph Objects

---

# 🗄️ Database Design

Database

**PostgreSQL (Neon Cloud)**

Tables

## Brands

Stores

- Brand ID
- Brand Name

---

## Categories

Stores

- Category ID
- Category Name

---

## Models

Stores

- Model Information
- Brand Mapping
- Category Mapping

---

## Sales

Stores

- Year
- Month
- Units Sold
- Revenue
- Average Price
- Model ID

---

## EV Models

Stores EV model information

---

## EV Monthly Sales

Stores EV monthly sales records

---

Relationships

Brands

↓

Models

↓

Sales

Categories

↓

Models

---

# 🏗️ System Architecture

```
CSV Dataset
      │
      ▼
Data Cleaning
      │
      ▼
PostgreSQL Database
      │
      ▼
Python Backend
      │
      ▼
Pandas Processing
      │
      ▼
Analytics Engine
      │
      ▼
Machine Learning
      │
      ▼
Plotly Charts
      │
      ▼
Streamlit Dashboard
```

---

# 💻 Tech Stack

## Frontend

- Streamlit

## Backend

- Python

## Database

- PostgreSQL
- Neon Cloud

## Data Processing

- Pandas
- NumPy

## Visualization

- Plotly

## Machine Learning

- Scikit-learn

## Database Connectivity

- psycopg2

---

# 📂 Project Structure

```
Indian-Automobile-Market-Analytics

dashboard/
    app.py
    reports.py
    ev_analysis.py

data/

carlogos/

static/

requirements.txt

README.md
```

---

# 🚀 Installation

Clone repository

```bash
git clone https://github.com/bandhav100/Indian-Automobile-Market-Analytics.git
```

Move into project

```bash
cd Indian-Automobile-Market-Analytics
```

Install packages

```bash
pip install -r requirements.txt
```

Configure database credentials using Streamlit Secrets or environment variables.

Run

```bash
streamlit run dashboard/app.py
```

---

# ☁️ Deployment

### Application

- Streamlit Community Cloud

### Database

- Neon PostgreSQL

---

# 📌 Future Enhancements

- AI-powered automobile market insights
- Real-time automobile sales integration
- Dealer analytics dashboard
- Regional sales analysis
- Price prediction models
- Customer demand prediction
- Advanced machine learning models
- Export reports (PDF & Excel)

---

# 📷 Screenshots

Include screenshots of:

- Home Dashboard
- Market Analysis
- Brand Analysis
- Model Analysis
- EV Dashboard
- Comparison Dashboard
- Forecast Dashboard

---

# 👨‍💻 Author

**Bandhav Arugonda**

B.Tech – Computer Science Engineering (Data Science)

GitHub: https://github.com/bandhav100

---

# 📄 License

This project is intended for educational, research, and portfolio purposes.
