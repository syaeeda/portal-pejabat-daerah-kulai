import React, { useState, useEffect } from 'react';
import { complaintAPI } from '../services/api';

function ComplaintsPage() {
  const [complaints, setComplaints] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    category: 'Infrastruktur',
    description: '',
    location: '',
    attachment: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await complaintAPI.getMyComplaints();
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('category', formData.category);
      submitData.append('description', formData.description);
      submitData.append('location', formData.location);
      if (formData.attachment) {
        submitData.append('attachment', formData.attachment);
      }
      
      const response = await complaintAPI.submitComplaint(submitData);
      
      // Show success message
      setSuccessMessage(`✅ Complaint submitted successfully! Reference #${response.data.id}`);
      
      // Reset form
      setFormData({ title: '', category: 'Infrastruktur', description: '', location: '', attachment: null });
      setShowForm(false);
      
      // Refresh complaints list
      await fetchComplaints();
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      const errorMsg = error.message || 'Error submitting complaint. Please try again.';
      setErrorMessage(`❌ ${errorMsg}`);
      console.error('Error submitting complaint:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { badge: 'badge-warning', label: '⏳ Pending' },
      in_progress: { badge: 'badge-primary', label: '⚙️ In Progress' },
      resolved: { badge: 'badge-success', label: '✅ Resolved' },
    };
    return statusMap[status] || { badge: 'badge-gray', label: status };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 fade-in">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 fade-in">
            {errorMessage}
          </div>
        )}

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📝 Manage Complaints</h1>
            <p className="text-gray-600 mt-2">Submit, monitor, and manage all your complaints here</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            {showForm ? '✕ Cancel' : '➕ New Complaint'}
          </button>
        </div>

        {/* Complaint Form */}
        {showForm && (
          <div className="card mb-8 fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit New Complaint</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div className="form-group">
                <label className="form-label">Complaint Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                  placeholder="Describe your complaint title"
                  required
                />
              </div>

              {/* Category */}
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="form-select"
                >
                  <option>Infrastructure</option>
                  <option>Public Welfare</option>
                  <option>License</option>
                  <option>Cleanliness</option>
                  <option>Community</option>
                </select>
              </div>

              {/* Description */}
              <div className="form-group">
                <label className="form-label">Detailed Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-textarea"
                  placeholder="Describe your complaint in detail..."
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* Location */}
              <div className="form-group">
                <label className="form-label">📍 Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="form-input"
                  placeholder="Enter the location of the complaint (e.g., Jalan Merdeka, Kulai)"
                  required
                />
              </div>

              {/* Attachment */}
              <div className="form-group">
                <label className="form-label">📎 Attachment (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <input
                    type="file"
                    onChange={(e) => setFormData({ ...formData, attachment: e.target.files?.[0] || null })}
                    className="hidden"
                    id="file-input"
                    accept=".pdf,.jpg,.jpeg,.png,.docx,.doc"
                  />
                  <label htmlFor="file-input" className="cursor-pointer block">
                    <div className="text-3xl mb-2">📤</div>
                    <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG, DOCX (Max 5MB)</p>
                    {formData.attachment && (
                      <p className="text-sm text-blue-600 font-semibold mt-2">✓ {formData.attachment.name}</p>
                    )}
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-success btn-lg"
              >
                {loading ? '⏳ Sending...' : '📤 Submit Complaint'}
              </button>
            </form>
          </div>
        )}

        {/* Complaints List */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {complaints.length === 0 ? 'No complaints yet' : `Your ${complaints.length} Complaint${complaints.length !== 1 ? 's' : ''}`}
          </h2>

          {complaints.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <p className="empty-state-text">You don't have any complaints yet</p>
              <p className="text-gray-500 text-sm mt-2">Submit a complaint now to get help</p>
            </div>
          ) : (
            <div className="space-y-3">
              {complaints.map((complaint) => (
                <div key={complaint.id} className="card-hover border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{complaint.description}</p>
                    </div>
                    <div className={`badge ${getStatusBadge(complaint.status).badge}`}>
                      {getStatusBadge(complaint.status).label}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 pt-3 border-t border-gray-100">
                    <span>🏷️ {complaint.category}</span>
                    <span>� {complaint.location}</span>
                    <span>📅 {new Date(complaint.created_at).toLocaleDateString('en-US')}</span>
                    <span>🔔 ID: {complaint.id}</span>
                  </div>
                  {complaint.attachment && (
                    <div className="mt-2">
                      <a
                        href={complaint.attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        📎 View Attachment
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComplaintsPage;
