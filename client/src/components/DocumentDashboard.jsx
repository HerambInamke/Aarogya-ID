import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Eye,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  ChevronRight,
  Home,
  Box,
  Folder,
  FileCheck,
  BarChart3,
  Settings,
  User
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const DocumentDashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api.getDocuments()
      .then(res => {
        setDocuments(res.data || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Failed to fetch documents');
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEnvironmentBadge = (env) => {
    return env === 'prod' ? (
      <span className="bg-gray-900 text-white px-2 py-1 text-xs rounded">Prod</span>
    ) : (
      <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">Dev</span>
    );
  };

  // Calculate stats
  const pendingCount = documents.filter(d => d.status === 'pending').length;
  const completedCount = documents.filter(d => d.status === 'completed').length;
  const rejectedCount = documents.filter(d => d.status === 'rejected').length;

  const sidebarItems = [
    { icon: Home, active: true },
    { icon: Box, active: false },
    { icon: Folder, active: false },
    { icon: FileCheck, active: false },
    { icon: FileText, active: false },
    { icon: BarChart3, active: false },
    { icon: Settings, active: false },
  ];

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading documents...</div>;
  }
  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex-1 py-4">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`mx-2 mb-2 p-3 rounded-lg cursor-pointer transition-colors ${
                item.active 
                  ? 'bg-red-50 text-red-600' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-5 w-5" />
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop&crop=face" 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-gray-900">Monitor</h1>
                <select className="text-sm text-gray-600 border border-gray-300 rounded px-3 py-1">
                  <option>Select workflow</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-medium text-gray-900">Document AI</span>
                <span>/</span>
                <span className="text-red-600 font-medium">Review</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Dashboard</span>
                <span className="text-sm text-gray-500">Table</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Executions Overview */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Executions overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                        • Pending
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{pendingCount}</p>
                    <p className="text-sm text-gray-600">Files queued</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                        • Completed
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{completedCount}</p>
                    <p className="text-sm text-gray-600">Files succeeded</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
                        • Rejected
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{rejectedCount}</p>
                    <p className="text-sm text-gray-600">Files failed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Executions Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Executions table</h3>
                <p className="text-sm text-gray-500">Production | ID</p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Last updated: {new Date().toLocaleString()}</span>
                <RefreshCw className="h-4 w-4" />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Execution ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Start Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      End Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Review Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Environment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc, index) => (
                    <tr
                      key={doc._id}
                      className="hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          {index === documents.length - 1 && (
                            <img 
                              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&fit=crop&crop=face" 
                              alt="User" 
                              className="w-6 h-6 rounded-full mr-3"
                            />
                          )}
                          {doc.executionId}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {doc.fileName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {doc.fileType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {doc.startTime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {doc.endTime || '...'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${getStatusColor(doc.status)}`}>
                          • {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getEnvironmentBadge(doc.environment)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors text-xs font-semibold"
                          onClick={() => navigate(`/document/${doc._id}`)}
                        >
                          View Document
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">Previous</button>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">2</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">3</button>
                <span className="px-3 py-1 text-sm text-gray-500">...</span>
                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">8</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">9</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">10</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">Next</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDashboard; 