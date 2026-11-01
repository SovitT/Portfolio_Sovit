// Single source of truth. Edit this file to update the whole site.
// Anything marked [PLACEHOLDER] is not yet provided: replace it.
import { Code2, BrainCircuit, BarChart3, Database, Wrench } from 'lucide-react';
import photo from '../assets/Sovit.jpg';
import customer from '../assets/Customer_Journey.png';
import Movie from '../assets/Movie.png';
import Used_Car from '../assets/Used_Car.png';
import Student_Records from '../assets/Student_Records.png';
import PowerBI from '../assets/PowerBI.png';
import CustomerTransaction from '../assets/CustomerTransaction.png';

export const profile = {  
  name: 'Sovit Thakre',
  roles: ['Data Analyst', 'Data Science Enthusiast', 'Python Developer', 'AI Engineer'],
  tagline: 'Turning Data Into Insights & Building Intelligent Solutions.',
  intro:
    'MCA (Data Science) student and data analyst intern who builds dashboards, SQL and Python pipelines, and Machine Learning models.',
  email: 'sovitthakre1313@gmail.com', 
  github: 'https://github.com/SovitT',
  linkedin: 'https://www.linkedin.com/in/sovit-thakre-255675246/', 
  photo: photo, 
  resume: '/Sovit Thakre.pdf',
};

export const about = [
  'I am an MCA specialising in Data Science at Alliance University, Bangalore. I like problems where messy data has to become a decision someone can act on.',
  'My day-to-day toolkit is Python, SQL and Power BI, with scikit-learn and TensorFlow for machine learning. At SolarSquare Energy I clean and validate datasets, automate recurring reports, and document the logic behind them.',
  'I learn by building: every project here started as a practical question and ended as something that runs.',
];

export const experience = [
  {
    company: 'SolarSquare Energy Pvt. Ltd.',
    role: 'Data Analyst & Outreach Intern',
    period: 'February 2026 – August 2026',
    points: [
      'Built Power BI dashboards and automated recurring reports using Google BigQuery.',
      'Cleaned, transformed and validated datasets.',
      'Wrote SQL queries and Python scripts for data extraction and reconciliation.',
      'Automated reporting workflows and validation checks, reducing reporting errors by 30%.',
      'Worked on pre-sales dashboard feasibility and cloud architecture using BigQuery, Looker Studio and Cloud Run.',
      'Documented data mappings, reporting logic and validation procedures.',
    ],
  },
  {
    company: 'Skillfied Mentor',
    role: 'Machine Learning Intern',
    period: 'January 2026 – March 2026',
    points: [
      'Worked on a Machine Learning project focused on image classification using Convolutional Neural Networks (CNN).',
      'Implemented image classification using the CIFAR-10 dataset.',
      'Performed data preprocessing, normalization, and image augmentation to improve model performance.',
      'Developed and trained CNN models using Python and TensorFlow.Automated reporting workflows and validation checks.',
      'Evaluated model performance using accuracy and loss metrics.',
      'Analyzed model predictions and explored techniques to improve classification performance.',
    ],
  }
];

export const skills = [
  { title: 'Programming', icon: Code2, items: ['Python', 'SQL', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Data Science & ML', icon: BrainCircuit, items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'TensorFlow', 'Data Cleaning', 'Exploratory Data Analysis', 'Machine Learning'] },
  { title: 'Data Visualization', icon: BarChart3, items: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'] },
  { title: 'Databases', icon: Database, items: ['MySQL', 'MongoDB', 'Google BigQuery'] },
  { title: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Streamlit'] },
];

// github: null shows a "GitHub link needed" state. live: null hides the demo button.
export const projects = [
  {
    title: 'Customer Journey Drop-off Analytics',
    short: 'Reproducible synthetic e-commerce dataset (100,000 sessions, 2.07M events) with a validation suite and funnel analysis to find where customers drop off.',
    stack: ['Python', 'NumPy', 'pandas', 'DuckDB', 'SQL', 'pytest', 'Git', 'Funnel Analysis', 'A/B Testing'],
    github: 'https://github.com/SovitT/Journey_Dropoff_Synthetic_data',
    live: null,
    image: customer,
    details: ['Goal: connect web, app, support and purchase events to find journey drop-offs and high-friction paths.',
      'Generated 100,000 sessions and about 2.07M events across 12 linked tables (customers, sessions, events, carts, orders, tickets, experiments, outcomes and more). A fixed seed makes every rebuild byte-identical.',
      'Session outcomes (converted, abandoned, support contact, product switch, browse only) are computed from events by documented rules, not assigned at random.',
      'Injected four labelled data problems (late events, duplicate conversions, wrongly merged identities, bot traffic) with a separate ground-truth file, then built detectors and scored them against it.',
      'Added 76 SQL validation checks (keys, joins, dates, totals, order lifecycle, consent) and automated pytest tests, including one that corrupts the data on purpose and confirms the checks fail.',
      'Findings: about 10% of sessions end in an order; 52% of sessions leave after viewing an out-of-stock product versus 10% for normal ones; Android app version 2.4 crashes in 19% of sessions versus about 7% elsewhere; simplified checkout lifted checkout-to-order by about 8 points.'],
  },
  {
    title: 'Movie Recommendation System',
    short: 'Content-based movie recommender served through a Streamlit app.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'Streamlit'],
    github: 'https://github.com/SovitT/movie-recommender',
    live: null,
    image: Movie,
    details: ['Goal: Build a content-based movie recommendation system that suggests relevant movies based on user preferences and similarity between movie descriptions.',
      'Used the IMDb Top 1000 Movies dataset and performed data cleaning, preprocessing, and exploratory data analysis to prepare movie metadata for recommendations.',
      'Applied TF-IDF (Term Frequency–Inverse Document Frequency) vectorization to convert movie-related textual information into numerical feature representations.',
      'Implemented Cosine Similarity to calculate similarities between movies and identify titles with similar characteristics.',
      'Developed a recommendation function that accepts a movie title and returns the top 10 most similar movie recommendations.',
      'Built an interactive web interface using Streamlit, allowing users to search for movies and explore personalized recommendations based on content similarity.'],
  },
  {
    title: 'Used Car Price Prediction',
    short: 'Machine learning model that predicts used car prices.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
    github: 'https://github.com/SovitT/Car-Price-Prediction',
    live: null,
    image: Used_Car,
    details: ['Goal: Develop a machine learning model to predict the estimated selling price of used cars based on vehicle specifications, age, mileage, fuel type, transmission, ownership history and other relevant features.',
      'Used a used-car dataset and performed data cleaning, preprocessing, and exploratory data analysis (EDA) to identify missing values, outliers, data distributions, and relationships between vehicle attributes and selling prices.',
      'Applied feature engineering and categorical encoding to transform raw vehicle information into structured numerical features suitable for machine learning algorithms.',
      'Trained and evaluated regression models using Scikit-learn to identify patterns between vehicle characteristics and market prices.',
      'Evaluated model performance using regression metrics such as R², Mean Absolute Error (MAE), and Mean Squared Error (MSE) to assess prediction accuracy.',
      'Developed a predictive workflow that takes vehicle details as input and estimates the expected selling price, demonstrating the practical application of machine learning in automotive price estimation.'],
  },
  {
    title: 'Student Records Management System',
    short: 'Backend application for managing student records.',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/SovitT/Student-Management-System',
    live: null,
    image: Student_Records,
    details: ['Goal: Develop a student records management application to efficiently store, manage, retrieve, and update student information through a centralized database.',
      'Designed and implemented a MongoDB database structure to maintain student records, including personal details, academic information, contact details, and enrollment data.',
      'Developed backend functionality using Node.js and Express.js to handle CRUD (Create, Read, Update, Delete) operations on student records.',
      'Integrated MongoDB with the backend using Mongoose to define data schemas, manage database interactions, and maintain structured student information.',
      'Implemented API endpoints to add new students, retrieve records, update existing information, and delete records with appropriate validation and error handling.',
      'Tested database operations and backend functionality to ensure reliable data management, efficient record retrieval, and consistency across student records.'],
  },
  {
    title: 'Power BI Dashboard',
    short: 'Business intelligence dashboard built in Power BI.',
    stack: ['Power BI', 'Data Visualization', 'Business Intelligence'],
    github: 'https://github.com/SovitT/Madhav-E-Commerce-Sells-Dashboard',
    live: null,
    image: PowerBI,
    details: ['Goal: Develop an interactive Power BI dashboard to analyze e-commerce sales performance, monitor business KPIs, and identify trends in revenue, profitability, customer behavior, and product performance.',
      'Imported and transformed sales data using Power Query, performing data cleaning, handling missing values, correcting data types, and preparing datasets for analysis.',
      'Created data relationships and calculated measures using DAX to track key metrics such as total sales, profit, quantity sold, average order value, and year-over-year performance.',
      'Designed interactive visualizations using bar charts, line charts, donut charts, cards, and slicers to analyze sales across product categories, customer segments, payment modes, and regions.',
      'Identified business trends and performance patterns through interactive filtering and drill-down analysis, enabling users to explore sales and profitability across different dimensions.',
      'Built a consolidated dashboard with KPI cards and dynamic visualizations to support data-driven decision-making, simplify sales monitoring, and communicate actionable business insights.'],
  },
  {
    title: 'Customer Spending & Transaction Performance Analysis',
    short: 'Analysis of customer spending and transaction performance, with the findings presented in an interactive Power BI dashboard.',
    stack: ['Python', 'LangChain', 'OpenAI API', 'FAISS','SQL'],
    github: 'https://github.com/SovitT',
    live: null,
    image: CustomerTransaction,
    details: ['Goal: understand how customers spend and how transactions perform, and present the answers to non-technical readers in one dashboard.',
    'Data:  dataset name or source, number of customers and transactions, date range].',
    'Cleaned and prepared the transaction data in Python, then used SQL to aggregate spending by customer, period and transaction type.',
    'Built the Power BI dashboard with Power Query for data shaping and DAX measures for [FILL: KPIs, for example total spend, average transaction value, transaction count, success rate].',
    'Findings: for example which customer segment spends most, or which period or channel performs best.'],
  },
];

export const education = [
  { degree: 'Master of Computer Application , Data Science', school: 'Alliance University, Bangalore',  period: '2024-2026' },
  { degree: 'Bachelor of Commerce, Computer Application', school: 'Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur', period: '2021-2024' },
];

export const certifications = [
  { name: 'Google: Data Analytics', issuer: 'Google', link: 'https://www.coursera.org/account/accomplishments/professional-cert/JNOH7EXBMZLW' },
  { name: 'Data Analysis and Visualization with Power BI', issuer: 'Microsoft', link: 'https://www.coursera.org/account/accomplishments/verify/OBVN3IZR7ZDR' },
  { name: 'Neural Networks and Deep Learning', issuer: 'DeepLearningAI', link: 'https://www.coursera.org/account/accomplishments/verify/WNSIEFF973TT' },
  { name: 'Machine Learning Classification', issuer: 'University of Washington', link: 'https://www.coursera.org/account/accomplishments/verify/GGKAKKO5EDIZ' },
  { name: 'Introduction to Software Engineering', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/verify/4IIMAL3OYVRR' },
];

export const achievements = [
  { group: 'Salesforce Agentblazer champain`25', items: ['Participated in Salesforce Agentblazer Campaign 2025, exploring AI agents and automation.'] },
  { group: 'Academic', items: ['Runner-Up – Intercollegiate Debate Competition'] },
  { group: 'Automation Developer Associate Training -UI Path', items: ['Completed Automation Developer Associate Training in UiPath, gaining knowledge of RPA and workflow automation.'] },
  { group: 'Milestones', items: ['Completed Internship as a Data Analyst & Outreach Intern in August 2026.'] },
];
