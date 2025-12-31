# DocuFind

**Your Personal Document Search Engine**

Full-stack application for uploading, organizing, and searching documents using AI-powered indexing (TF-IDF, Cosine Similarity).

## 🏗️ Project Structure
```
docufind/
├── frontend/    # Angular 17+ (Tailwind, TypeScript)
├── backend/     # FastAPI (Python, MySQL, scikit-learn)
└── README.md
```

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
ng serve
# Visit http://localhost:4200
```

### Backend (Coming Soon)
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 📊 Current Status

- ✅ **Frontend:** Landing page complete (Light + Gold theme)
- 🚧 **Frontend:** Auth pages (in progress)
- 🚧 **Backend:** FastAPI setup (planned)
- 🚧 **IR Engine:** TF-IDF indexing (planned)

## 🎯 Target Users

Students, Researchers, Lawyers, Journalists, Content Creators

## 🛠️ Tech Stack

**Frontend:** Angular 17, Tailwind CSS, TypeScript, Lucide Icons  
**Backend:** FastAPI, MySQL, SQLAlchemy, scikit-learn  
**Deployment:** Docker, Docker Compose

## 📝 License

MIT