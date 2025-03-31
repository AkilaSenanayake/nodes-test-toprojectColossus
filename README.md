# Colossus Backend - Document Processing and RAG System

## Overview
Colossus Backend is a sophisticated document processing and Retrieval-Augmented Generation (RAG) system built with Flask. The system provides powerful capabilities for document processing, querying, and structure visualization with GPU acceleration support.

## Screenshots

### System Dashboard
![System Dashboard](docs/images/dashboard.png)
*System dashboard showing health metrics and GPU status*

### Document Processing
![Document Upload](docs/images/document-upload.png)
*Document upload and processing interface*

![Document Structure](docs/images/document-structure.png)
*Document structure visualization*

### Query Interface
![RAG Query](docs/images/rag-query.png)
*RAG query interface and results*

### System Monitoring
![System Monitoring](docs/images/system-monitoring.png)
*System monitoring and performance metrics*

## Features
- Document Processing and Management
- RAG (Retrieval-Augmented Generation) Querying
- Document Structure Visualization
- GPU-Accelerated Processing (when available)
- Neo4j Database Integration
- PDF Processing and Text Extraction
- RESTful API Interface
- CORS Support
- Health Monitoring

## Tech Stack
- **Backend Framework**: Flask
- **Database**: Neo4j
- **Machine Learning**: PyTorch, Transformers, Sentence-Transformers
- **Document Processing**: PyMuPDF, pdf2image, PyPDF2
- **API**: RESTful with Flask-CORS
- **ML Models**: Custom RAG implementation

## System Requirements
- Python 3.8+
- CUDA-compatible GPU (optional, for GPU acceleration)
- Neo4j Database
- 16GB+ RAM recommended
- Storage space for document processing

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Production-backend-v0
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
Create a `.env` file with the following variables:
```env
HOST=localhost
PORT=5000
RAG_MODEL_NAME=your_model_name
NEO4J_URI=your_neo4j_uri
NEO4J_USER=your_neo4j_user
NEO4J_PASSWORD=your_neo4j_password
USE_LOCAL_PIXTRAL=true  # Set to false if not using GPU
```

## Project Structure
```
Production-backend-v0/
├── api/                 # API route definitions
├── config/             # Configuration files
├── models/             # ML model implementations
├── services/           # Business logic services
├── storage/            # Document storage
├── utils/             # Utility functions
├── integrations/       # External integrations
├── app.py             # Main application file
├── RAGModel.py        # RAG implementation
├── requirements.txt    # Project dependencies
└── pyproject.toml     # Project metadata
```

## API Endpoints

### Document Management
- `POST /api/document/unified-upload` - Upload and process documents
- `POST /api/document/upload` - Legacy document upload
- `GET /api/document/documents` - List all documents
- `GET /api/document/document/{document_id}/original-pdf` - Get original PDF
- `GET /api/document/indexing-status/{document_id}` - Check indexing status

### Query
- `POST /api/query/query` - Execute RAG queries

### Structure
- `POST /api/structure/upload` - Upload document structure
- `GET /api/structure/documents` - Get document structures
- `GET/DELETE /api/structure/document/{document_id}` - Manage document structure
- `GET /api/structure/document/{document_id}/heading` - Get document headings

### System
- `GET /health` - System health check

## Development Setup

1. **Neo4j Setup**:
   - Install Neo4j
   - Create a new database
   - Set credentials in `.env`
   - Test connection using `test_neo4j_connection.py`

2. **Model Setup**:
   - Ensure RAG model is properly configured
   - Set up GPU if available
   - Configure memory management settings

3. **Development Server**:
```bash
python app.py
```

## GPU Support
The system automatically detects and utilizes CUDA-compatible GPUs if available. GPU information can be viewed through the `/health` endpoint.

## Testing
- Use `example_client.py` for API testing
- Run Neo4j connection test: `python test_neo4j_connection.py`

## Documentation
- API Documentation: See `frontend_guide.md`
- Document Extraction: See `README_document_extraction.md`

## Best Practices
1. Always use virtual environment
2. Keep dependencies updated
3. Monitor GPU memory usage
4. Regular database backups
5. Follow API versioning
6. Implement proper error handling

## Troubleshooting
1. **GPU Issues**:
   - Check CUDA installation
   - Monitor memory usage
   - Verify model compatibility

2. **Database Issues**:
   - Verify Neo4j connection
   - Check credentials
   - Ensure proper indexing

3. **Document Processing Issues**:
   - Check file permissions
   - Verify supported formats
   - Monitor storage space

## Step-by-Step Guide for New Developers

1. **Initial Setup**:
   - Clone the repository
   - Set up Python virtual environment
   - Install dependencies
   - Configure environment variables

2. **Database Setup**:
   - Install Neo4j
   - Create database
   - Configure connection
   - Run connection test

3. **Model Configuration**:
   - Verify GPU availability
   - Configure RAG model
   - Set up memory management
   - Test model loading

4. **API Familiarization**:
   - Review API documentation
   - Test endpoints with example client
   - Understand request/response formats
   - Check CORS configuration

5. **Document Processing**:
   - Understand supported formats
   - Test document upload
   - Verify processing pipeline
   - Check storage configuration

6. **Query System**:
   - Understand RAG implementation
   - Test query endpoints
   - Verify response formats
   - Optimize query performance

7. **Structure Visualization**:
   - Test structure endpoints
   - Understand heading extraction
   - Verify PDF processing
   - Test visualization features

8. **Monitoring and Maintenance**:
   - Set up logging
   - Monitor system health
   - Check GPU usage
   - Manage storage space

9. **Testing and Deployment**:
   - Run all tests
   - Verify security settings
   - Check performance
   - Deploy to production

10. **Optimization**:
    - Profile code
    - Optimize database queries
    - Improve GPU utilization
    - Enhance response times

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
[Add License Information]

## Contact
[Add Contact Information] 
