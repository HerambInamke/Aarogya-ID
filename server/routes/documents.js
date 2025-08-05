import express from 'express';
import {
  getAllDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
  getDocumentsByStatus,
  getDocumentsByEnvironment
} from '../controllers/documentController.js';

const router = express.Router();

// GET /api/documents - Get all documents
router.get('/', getAllDocuments);

// GET /api/documents/:id - Get single document
router.get('/:id', getDocumentById);

// POST /api/documents - Create new document
router.post('/', createDocument);

// PUT /api/documents/:id - Update document
router.put('/:id', updateDocument);

// DELETE /api/documents/:id - Delete document
router.delete('/:id', deleteDocument);

// GET /api/documents/status/:status - Get documents by status
router.get('/status/:status', getDocumentsByStatus);

// GET /api/documents/environment/:environment - Get documents by environment
router.get('/environment/:environment', getDocumentsByEnvironment);

export default router; 