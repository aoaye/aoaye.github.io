# PORTFOLIO CONTENT SOURCE

---

# 🧑‍💻 HERO SECTION

## Name
Aoaye Imoagene
aoayeisaac@gmail.com

## Role
Software Engineer | AI/ML Engineer | Full-Stack Developer

## Status
Recent Graduate | Open to Work

Building practical products with clear UX, strong engineering quality, and measurable outcomes.

Python, JavaScript, C#, TensorFlow, Docker, AWS

Links:
    Github: [https://github.com/aoaye] 
    Linkedin: [https://www.linkedin.com/in/aoaye-imoagene/]
    X: []
---

## About
A results-driven developer focused on building real-world systems combining machine learning, full-stack engineering, and product design. Passionate about solving practical problems through scalable and user-focused solutions.

---

## Tech Stack and Tools
Languages:
    Python, JavaScript, C#, PHP, R, SQL, HTML, CSS
Frameworks & Libraries:
    React, Node.js, NestJS, Express, FastAPI,   Django, Flutter, .NET (WPF, ASP.NET), PyTorch, TensorFlow, Keras, Scikit-learn, SQLAlchemy, OpenPyXL, Pygame
ML & Data:
    Pandas, NumPy, OpenCV, SciPy, UMAP, Apache Spark, Hugging Face, Tokenizers, Embeddings, Imbalanced-learn
Tools & DevOps:
    Docker, Git, GitHub, GitLab CI/CD, AWS (ECR, App Runner, EC2), GCP, Railway, Jupyter Notebook, Google Colab, Streamlit
Databases:
    PostgreSQL, SQL Server, MariaDB
Design:
    Figma, UI/UX Design, Design Systems, Prototyping

---

# ⭐ FEATURED PROJECTS

---

## CarVision – AI-Powered Car Recognition System
**Date:** [March 2025]

A full-stack mobile and web application that uses deep learning to identify car makes and models from images in real time, designed for both enthusiasts and real-world automotive workflows.

### Highlights
- Real-time image-based car recognition with top-3 predictions (~96% accuracy using ResNet50)
- Multi-platform deployment (Flutter mobile app + Streamlit web interface)
- End-to-end ML pipeline from dataset processing to cloud deployment

### Use Case
Enables users to identify unknown vehicles instantly, supports insurance verification workflows, and allows marketplaces to validate vehicle listings automatically.

### Target Users
- Car enthusiasts and collectors  
- Dealerships and automotive businesses  
- Insurance professionals  

### Key Features
- Image upload and real-time inference  
- Top-3 prediction output with confidence scores  
- Cross-platform access (mobile + web)  
- Cloud-hosted inference API  

### Tech Stack
- **ML:** TensorFlow (Keras), ResNet50  
- **Backend:** FastAPI, Uvicorn  
- **Frontend:** Flutter, Streamlit  
- **Cloud:** AWS (ECR, App Runner), Docker  
- **Data Processing:** Pandas, NumPy, OpenCV, SciPy  

### Engineering Challenges

#### Dataset Label Extraction from `.mat` Format
- **Problem:** Dataset labels stored in MATLAB `.mat` format were not directly usable  
- **Cause:** Complex nested structure and lack of direct Python compatibility  
- **Solution:** Used SciPy to load data and Octave to inspect structure, then converted into structured DataFrame → CSV  
- **Outcome:** Created a reliable dataset pipeline ensuring correct image-to-label mapping  

#### Training Performance Bottlenecks
- **Problem:** Extremely slow training on local machine  
- **Cause:** Limited compute resources and inefficient batch configuration  
- **Solution:** Optimised batch size and migrated training to Google Colab (T4 GPU)  
- **Outcome:** Significantly reduced training time and enabled efficient experimentation  

#### Label Index Mismatch in Model Predictions
- **Problem:** Incorrect predictions due to shifted class indices  
- **Cause:** Dataset labels started at 1, while TensorFlow expects 0-based indexing  
- **Solution:** Normalised label indices across dataset and inference pipeline  
- **Outcome:** Restored prediction accuracy and ensured consistency  

#### Cloud Deployment with Docker and AWS
- **Problem:** Difficulty deploying and exposing ML API  
- **Cause:** Complexity in containerisation and AWS configuration  
- **Solution:** Containerised FastAPI app with Docker, deployed via AWS ECR + App Runner  
- **Outcome:** Stable, scalable backend accessible by both mobile and web clients  

### Links
- Github: [https://github.com/aoaye/Capstone_Project_CompSci25]
- Streamlit [http://carvision.streamlit.app/]

---

## Church Platform – Live Service & CMS
**Date:** [Jan 2026]

A full-stack web platform designed to establish an online presence for the church, provide key information, and enable real-time participation in live services.

### Highlights
- Custom-built CRM enabling staff to manage content, events, and user data  
- Integrated live service streaming without maintaining custom streaming infrastructure  
- Analytics system tracking up to ~20 unique viewers per service with exportable data  

### Use Case
Provides a central digital platform for users to learn about the church, engage with live services, and allows administrators to manage content and track engagement efficiently.

### Target Users
- Individuals seeking a new church community  
- Existing members engaging with services remotely  
- Church staff managing content and user engagement  

### Key Features
- Admin dashboard for content and event management  
- Live service integration via embedded streaming  
- Visitor analytics and engagement tracking  
- Data export functionality for administrative use  
- Instagram integration for social content display  

### Tech Stack
- **Frontend:** React, JavaScript, HTML, CSS  
- **Backend:** Node.js, Express, Multer  
- **Hosting/DevOps:** Railway, GitHub  

### Engineering Challenges

#### Persistent Data Loss on Deployment (Ephemeral Storage)
- **Problem:** All uploaded content and user data were lost after each deployment  
- **Cause:** Railway uses ephemeral file systems that reset on redeploy  
- **Solution:** Implemented persistent volumes with environment-based path management for data and uploads  
- **Outcome:** Ensured reliable data persistence across deployments and enabled stable production usage  

#### Live Streaming Without Custom Infrastructure
- **Problem:** Hosting and maintaining a real-time streaming backend was impractical  
- **Cause:** RTMP servers and streaming pipelines are complex and resource-heavy  
- **Solution:** Streamed via YouTube and embedded the player dynamically through the admin portal  
- **Outcome:** Delivered stable live services with minimal infrastructure overhead  

#### Secure Session Management in Production (HTTPS)
- **Problem:** Admin login sessions failed under production conditions  
- **Cause:** Misconfigured cookies and proxy handling under HTTPS  
- **Solution:** Configured express-session with secure cookies, proxy trust, and environment-driven settings  
- **Outcome:** Reliable and secure authentication system in production  

#### Instagram API Reliability and Token Management
- **Problem:** Instagram APIs required complex authentication and frequently failed due to token expiration  
- **Cause:** Short-lived tokens, API limitations, and network variability  
- **Solution:** Replaced API calls with admin-managed embed system using public Instagram embed scripts  
- **Outcome:** Stable, low-maintenance social media integration without dependency on API tokens  

### Links
- GitHub: [https://github.com/aoaye/blw_ireland_website]
- Website: [https://blwirelandzone.org/]


---

## VersAI – AI-Assisted Church AV Presentation System
**Date:** [November 2024 - Present]

A desktop and web-based presentation system designed to eliminate latency in live scripture and content display by using real-time speech transcription and semantic search.

### Highlights
- Real-time speech-to-text transcription integrated with semantic search  
- Vector-based retrieval system enabling meaning-aware matching (not just keyword search)  
- Hybrid system combining existing presentation tools with AI-driven automation  

### Use Case
Designed for live environments such as sermons, performances, and events where content must be displayed instantly without relying on operator familiarity with material.

### Target Users
- Church media/AV teams  
- Event production teams  
- Organisations requiring real-time reference display systems  

### Key Features
- Real-time speech transcription using Whisper / AWS Transcribe  
- Pre-encoded corpus (e.g. Bible, songs) stored as vector embeddings  
- Semantic search for meaning-based matching of spoken content  
- Automatic content retrieval and display with minimal latency  
- Desktop application with optional cloud-backed deployment  

### Tech Stack
- **Frontend:** Python, PyQt5  
- **Backend:** Python  
- **Database:** SQLite, SQLAlchemy  
- **DevOps:** Docker, GitLab CI/CD, pytest  
- **AI/ML:** Whisper, AWS Transcribe, embedding models (Word2Vec, DistilBERT, ALBERT)  

### Engineering Challenges

#### Low-Latency Semantic Retrieval in Live Contexts
- **Problem:** Content needed to be retrieved and displayed instantly during live speech  
- **Cause:** Traditional keyword search fails with paraphrasing and natural speech variation  
- **Solution:** Pre-encoded text corpus into vector embeddings and performed real-time embedding of transcribed speech for similarity matching  
- **Outcome:** Enabled fast, meaning-based retrieval suitable for live environments  

#### Selecting Efficient Embedding Models
- **Problem:** Different embedding models had trade-offs between speed, accuracy, and resource usage  
- **Cause:** Larger models improved semantic understanding but increased latency  
- **Solution:** Evaluated multiple models (Word2Vec, DistilBERT, ALBERT, USE) to balance performance and responsiveness  
- **Outcome:** Achieved a practical balance between semantic accuracy and real-time performance  

#### Real-Time Transcription vs Accuracy Trade-offs
- **Problem:** High-accuracy transcription models introduced latency unsuitable for live use  
- **Cause:** More accurate models required more compute and processing time  
- **Solution:** Tested Whisper and AWS Transcribe configurations to optimise for near real-time output  
- **Outcome:** Maintained acceptable transcription accuracy while keeping latency low  

#### System Integration with Existing Presentation Tools
- **Problem:** Replacing existing systems entirely would reduce adoption  
- **Cause:** Users are already familiar with tools like OpenLP  
- **Solution:** Designed VersAI as an enhancement layer rather than a replacement system  
- **Outcome:** Improved usability without disrupting existing workflows   

### Links
- GitHub: [https://github.com/Ucheyo/openlp-ai]
- Installer: [https://versaidownload.com/]
---

## Premier League Predictor – Match Outcome Prediction System
**Date:** [September 2025]

A machine learning system that analyses 33 years of Premier League data to predict match outcomes for an entire season before it begins.

### Highlights
- Built a full ML pipeline with time-aware validation and model selection  
- Trained on 33 years of historical data using extensive match and team features  
- Interactive Streamlit dashboard for real-time match prediction  

### Use Case
Provides data-driven predictions for football matches, supporting analysis for sports enthusiasts, analysts, and betting-related insights.

### Target Users
- Sports analysts  
- Football enthusiasts  
- Betting analysts  

### Key Features
- Predicts match outcomes (home win, draw, away win)  
- Time-series aware train/validation/test split by season  
- Model comparison across multiple classifiers  
- Interactive dashboard for selecting fixtures and viewing predictions  

### Tech Stack
- **Core:** Python, Scikit-learn  
- **Data:** Pandas, NumPy  
- **Visualisation:** Seaborn  
- **Interface:** Streamlit  
- **Workflow:** Jupyter Notebook, GitHub  

### Engineering Challenges

#### Predicting Draw Outcomes (Class Imbalance)
- **Problem:** Models consistently underperformed on draw predictions  
- **Cause:** Draws are less frequent and represent ambiguous match conditions  
- **Solution:** Applied class weighting and explored resampling techniques  
- **Outcome:** Improved recall marginally, but confirmed structural difficulty of predicting draws  

#### Feature Separability for Close Matches
- **Problem:** Difficulty distinguishing between draws and narrow wins  
- **Cause:** Aggregated features lacked fine-grained match dynamics  
- **Solution:** Introduced features such as recent form and performance trends  
- **Outcome:** Improved overall predictions but ambiguity remained for balanced matches  

#### Model Complexity vs Balanced Performance
- **Problem:** Complex models improved accuracy but worsened class balance  
- **Cause:** Bias toward dominant classes in flexible models (e.g. Gradient Boosting)  
- **Solution:** Evaluated models using macro-averaged metrics alongside accuracy  
- **Outcome:** Identified trade-offs between accuracy and fairness across classes  

#### Probability Calibration vs Accuracy
- **Problem:** Some models produced unreliable probability estimates  
- **Cause:** Algorithms optimised classification boundaries rather than probability distributions  
- **Solution:** Compared models based on both classification metrics and calibration quality  
- **Outcome:** Recognised that better-calibrated models (e.g. Logistic Regression) may be more useful in practice  

#### Temporal Generalisation Across Seasons
- **Problem:** Model performance varied across different seasons  
- **Cause:** Football dynamics evolve over time (teams, tactics, form)  
- **Solution:** Used time-based splits and incorporated recent performance features  
- **Outcome:** Achieved reasonable generalisation but highlighted limitations of static models  

#### Capturing Sequential Dynamics
- **Problem:** Models could not fully capture evolving match dynamics  
- **Cause:** Use of fixed feature vectors instead of sequential representations  
- **Solution:** Implemented a basic neural network as a proof of concept  
- **Outcome:** Identified potential for sequence-based models (RNNs/Transformers) for future improvement 

### Links
- GitHub: []
- StreamLit: []

---
---

# 🧩 OTHER PROJECTS

---

## JobFind – Job Discovery & Recruitment Platform
**Date:** [April 2024]

A full-stack web application designed to streamline job searching and recruitment through structured listings, user dashboards, and role-based system design.

### Highlights
- Built a multi-role platform supporting both job seekers and recruiters  
- Implemented recruiter and job seeker dashboards with real functionality  
- Developed a Glassdoor-inspired salary insight feature  
- Designed custom UI components for a clean and intuitive user experience  

### Use Case
Provides a centralised platform where recruiters can post jobs and manage listings, while job seekers can discover roles, track applications, and save opportunities.

### Target Users
- Job seekers  
- Recruiters and employers  

### Key Features
- Job listing creation and application system  
- Recruiter dashboard for managing job postings  
- Job seeker dashboard with saved jobs and application tracking  
- Salary insight tool based on roles and companies  
- Role-based authentication with shared login and intelligent redirection  
- Session-based authentication system  

### Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MariaDB (phpMyAdmin)  

### Engineering Challenges

#### Multi-Role Authentication and User Flow
- **Problem:** Needed to support both recruiters and job seekers with different experiences  
- **Cause:** Separate user roles required different dashboards and permissions  
- **Solution:** Designed split user systems with shared login logic and session-based authentication  
- **Outcome:** Seamless authentication flow with correct routing for each user type  

#### Structuring a Dual-Sided Platform
- **Problem:** Platform needed to serve both recruiters and job seekers effectively  
- **Cause:** Each group has different goals and interactions with the system  
- **Solution:** Built separate dashboards and workflows while maintaining a unified system  
- **Outcome:** Functional two-sided platform with clear user journeys  

#### Designing a Salary Insight Feature
- **Problem:** Users lacked contextual information about job value  
- **Cause:** Standard job boards often omit salary insights  
- **Solution:** Implemented a salary lookup feature inspired by Glassdoor  
- **Outcome:** Added additional value for users beyond basic job listings   

### Links
- GitHub: [https://github.com/aoaye/jobfind]

---

## DBS Credit Union – WPF Desktop Banking Application
**Date:** [April 2023]

A C# WPF desktop application simulating core credit union operations, built with a layered architecture to manage accounts, transactions, and audit history.

### Highlights
- Implemented a 3-layer architecture (UI, Business Logic, Data Access)  
- Built full account management and transaction system  
- Developed secure authentication and transfer auditing features  

### Use Case
Simulates front-desk operations in a credit union, enabling staff to manage accounts, process transactions, and track financial activity.

### Target Users
- Credit union staff and administrators  
- Academic evaluation of OOP and database integration  

### Key Features
- Staff authentication with secure login flow  
- Account creation and management  
- Deposit and withdrawal operations  
- Internal transfers with account-type validation  
- Transfer audit history per account  
- Input validation for financial data fields  

### Tech Stack
- **Language:** C#  
- **UI:** WPF (XAML + code-behind)  
- **Framework:** .NET Framework 4.7.2  
- **Data Access:** ADO.NET  
- **Database:** Local SQL Server (.mdf/.ldf)  
- **Architecture:** Layered (UI + Business Logic + Data Access)  

### Architecture
- **Presentation Layer:** WPF UI (MainWindow, Login, Transfer views)  
- **Business Layer:** Handlers and domain models (Account, User, TransferAudit)  
- **Data Layer:** ADO.NET with stored procedures for DB interaction  

### Engineering Challenges

#### Structuring a Layered Application
- **Problem:** Managing UI, business logic, and database access in a growing codebase  
- **Cause:** Tight coupling leads to poor maintainability  
- **Solution:** Separated the system into UI, Business (BIZ), and Data Access (DAL) layers  
- **Outcome:** Improved code organisation, maintainability, and debugging  

#### Enforcing Business Rules in Financial Transfers
- **Problem:** Transfers needed to respect account-specific rules (e.g. overdraft limits)  
- **Cause:** Different account types behave differently  
- **Solution:** Implemented validation logic in the business layer before executing transfers  
- **Outcome:** Ensured consistent and realistic financial operations  

#### Maintaining Data Consistency Across Transactions
- **Problem:** Balance updates needed to persist correctly after operations  
- **Cause:** Multiple transaction types affecting shared data  
- **Solution:** Centralised balance updates through handler methods and stored procedures  
- **Outcome:** Accurate and consistent account balances across the system  

#### Implementing Secure Authentication Flow
- **Problem:** Preventing unauthorised access to sensitive operations  
- **Cause:** Financial operations require controlled access  
- **Solution:** Implemented login validation with database checks and restricted UI access  
- **Outcome:** Secured access to core system features  

#### Providing Transaction Traceability
- **Problem:** Lack of visibility into past transfers  
- **Cause:** No logging mechanism for transaction history  
- **Solution:** Created transfer audit system with persistent records and UI access  
- **Outcome:** Enabled review and tracking of account activity  

#### Preventing Invalid Input in Financial Fields
- **Problem:** User input could introduce invalid or non-numeric data  
- **Cause:** Free-text entry fields  
- **Solution:** Added input validation using regex-based filtering in UI  
- **Outcome:** Reduced input errors and improved data reliability  

### Links
- GitHub: [https://github.com/aoaye/dbs_creditunion]

---

# 🎨 DESIGN WORK

---

## Puredent – E-commerce & Brand Experience Design
**Date:** [February 2026]

A modern UI/UX design for a fluoride-alternative toothpaste brand focused on education, product conversion, and campaign engagement.

### Overview
Designed a clean, conversion-focused interface that balances product sales with educational content and charity-driven campaigns.

### Focus Areas
- E-commerce optimisation with clear product discovery and strong CTAs  
- Educational content integration to build trust and inform users  
- Campaign visibility for charity initiatives  
- Mobile-first responsive design across all layouts  

### Design System
- Built reusable component system for scalability and consistency  
- Structured typography and colour system aligned with brand identity  
- Extensive use of Figma Auto Layout for responsive behaviour  
- Interactive prototyping with linked animations and transitions  

### Tools
- Figma  

### Status
- Design completed  
- Website development in progress    

### Links
- Figma: []

---

# 📬 FOOTER

## Contact
- Email: [aoayeisaac@gmail.com]  
- LinkedIn: [https://www.linkedin.com/in/aoaye-imoagene/]  
- GitHub: [https://github.com/aoaye]  

## Portfolio Stack
- React  
- Tailwind CSS  
- Vite  

---