import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Document from './models/Document.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://heramb15012006:coco1501@cluster0.uuewccv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const sampleDocuments = [
  {
    executionId: '550e8400-e29b-41d4-a716-446655440000',
    fileName: 'Medical_Report_Patient_001.pdf',
    fileType: 'Medical Report',
    status: 'completed',
    startTime: 'Thu, 15 Feb 2024 15:00:39',
    endTime: 'Thu, 15 Feb 2024 15:10:39',
    reviewStatus: 'approved',
    environment: 'dev',
    fields: [
      { key: 'Patient Name', value: 'John Doe', confidence: 99.2, category: 'Personal Information' },
      { key: 'Date of Birth', value: '1985-03-15', confidence: 98.8, category: 'Personal Information' },
      { key: 'Patient ID', value: 'P001234567', confidence: 99.9, category: 'Personal Information' },
      { key: 'Phone Number', value: '+1 (555) 123-4567', confidence: 97.5, category: 'Personal Information' },
      { key: 'Address', value: '123 Main St, New York, NY 10001', confidence: 96.3, category: 'Personal Information' },
      { key: 'Diagnosis', value: 'Type 2 Diabetes Mellitus', confidence: 98.7, category: 'Medical Information' },
      { key: 'Treatment Plan', value: 'Metformin 500mg twice daily', confidence: 97.1, category: 'Medical Information' },
      { key: 'Doctor Name', value: 'Dr. Sarah Wilson', confidence: 99.1, category: 'Medical Information' },
      { key: 'Hospital', value: 'City General Hospital', confidence: 98.9, category: 'Medical Information' },
      { key: 'Date of Visit', value: '2024-01-15', confidence: 99.5, category: 'Medical Information' },
      { key: 'Blood Pressure', value: '140/90 mmHg', confidence: 96.8, category: 'Vital Signs' },
      { key: 'Heart Rate', value: '78 bpm', confidence: 98.2, category: 'Vital Signs' },
      { key: 'Weight', value: '185 lbs', confidence: 97.9, category: 'Vital Signs' },
      { key: 'Height', value: '5\'10"', confidence: 98.5, category: 'Vital Signs' },
      { key: 'Insurance Provider', value: 'Blue Cross Blue Shield', confidence: 99.0, category: 'Insurance Information' },
      { key: 'Policy Number', value: 'BCBS123456789', confidence: 98.3, category: 'Insurance Information' },
      { key: 'Group Number', value: 'GRP789012', confidence: 97.6, category: 'Insurance Information' },
      { key: 'Follow-up Date', value: '2024-02-15', confidence: 96.9, category: 'Medical Information' },
      { key: 'Lab Order', value: 'HbA1c, Lipid Panel', confidence: 95.8, category: 'Medical Information' },
      { key: 'Allergies', value: 'Penicillin', confidence: 98.1, category: 'Medical Information' },
      { key: 'Emergency Contact', value: 'Jane Doe - (555) 987-6543', confidence: 97.2, category: 'Personal Information' },
      { key: 'Medications', value: 'Metformin, Lisinopril', confidence: 96.7, category: 'Medical Information' },
      { key: 'Medical Record Number', value: 'MRN-78901234', confidence: 99.3, category: 'Personal Information' },
      { key: 'Referring Physician', value: 'Dr. Michael Chen', confidence: 98.4, category: 'Medical Information' }
    ]
  },
  {
    executionId: '660e8400-e29b-41d4-a716-446655440001',
    fileName: 'Insurance_Claim_Form_12345.pdf',
    fileType: 'Insurance Claim',
    status: 'pending',
    startTime: 'Thu, 15 Feb 2024 15:00:39',
    endTime: '',
    reviewStatus: 'pending',
    environment: 'prod',
    fields: [
      { key: 'Claim Number', value: 'CLM-2024-001234', confidence: 99.8, category: 'Claim Information' },
      { key: 'Policy Holder', value: 'Sarah Johnson', confidence: 98.9, category: 'Personal Information' },
      { key: 'Date of Service', value: '2024-01-10', confidence: 99.2, category: 'Service Information' },
      { key: 'Provider Name', value: 'Downtown Medical Center', confidence: 97.8, category: 'Provider Information' },
      { key: 'Procedure Code', value: 'CPT-99213', confidence: 98.5, category: 'Service Information' },
      { key: 'Diagnosis Code', value: 'ICD-10: E11.9', confidence: 97.3, category: 'Service Information' },
      { key: 'Claim Amount', value: '$450.00', confidence: 99.1, category: 'Financial Information' },
      { key: 'Deductible Applied', value: '$150.00', confidence: 98.7, category: 'Financial Information' },
      { key: 'Co-payment', value: '$25.00', confidence: 99.5, category: 'Financial Information' },
      { key: 'Insurance Payment', value: '$275.00', confidence: 98.8, category: 'Financial Information' },
      { key: 'Patient Responsibility', value: '$175.00', confidence: 97.9, category: 'Financial Information' },
      { key: 'Provider Tax ID', value: '12-3456789', confidence: 96.8, category: 'Provider Information' },
      { key: 'Provider Address', value: '456 Medical Plaza, Boston, MA 02101', confidence: 95.9, category: 'Provider Information' },
      { key: 'Authorization Number', value: 'AUTH-789012345', confidence: 98.2, category: 'Claim Information' },
      { key: 'Member ID', value: 'MEM123456789', confidence: 99.3, category: 'Personal Information' },
      { key: 'Group ID', value: 'GRP987654321', confidence: 98.6, category: 'Personal Information' },
      { key: 'Date of Birth', value: '1978-07-22', confidence: 99.0, category: 'Personal Information' },
      { key: 'Claim Status', value: 'Approved', confidence: 98.4, category: 'Claim Information' }
    ]
  },
  {
    executionId: '770e8400-e29b-41d4-a716-446655440002',
    fileName: 'Prescription_Details.pdf',
    fileType: 'Prescription',
    status: 'completed',
    startTime: 'Thu, 15 Feb 2024 15:00:39',
    endTime: 'Thu, 15 Feb 2024 15:05:39',
    reviewStatus: 'approved',
    environment: 'prod',
    fields: [
      { key: 'Patient Name', value: 'Robert Martinez', confidence: 99.1, category: 'Personal Information' },
      { key: 'Prescription Number', value: 'RX-2024-789456', confidence: 98.9, category: 'Prescription Information' },
      { key: 'Medication Name', value: 'Lisinopril', confidence: 99.5, category: 'Medication Information' },
      { key: 'Dosage', value: '10mg', confidence: 98.7, category: 'Medication Information' },
      { key: 'Quantity', value: '30 tablets', confidence: 99.2, category: 'Medication Information' },
      { key: 'Frequency', value: 'Once daily', confidence: 97.8, category: 'Medication Information' },
      { key: 'Refills', value: '2 refills remaining', confidence: 98.3, category: 'Medication Information' },
      { key: 'Prescribing Doctor', value: 'Dr. Amanda Rodriguez', confidence: 99.0, category: 'Provider Information' },
      { key: 'Date Prescribed', value: '2024-01-13', confidence: 99.3, category: 'Prescription Information' },
      { key: 'Pharmacy Name', value: 'MediCare Pharmacy', confidence: 98.5, category: 'Pharmacy Information' },
      { key: 'Pharmacy Address', value: '789 Health Blvd, Miami, FL 33101', confidence: 96.7, category: 'Pharmacy Information' },
      { key: 'DEA Number', value: 'BC1234567', confidence: 97.9, category: 'Provider Information' }
    ]
  },
  {
    executionId: '880e8400-e29b-41d4-a716-446655440003',
    fileName: 'Lab_Results_Patient_456.pdf',
    fileType: 'Lab Report',
    status: 'completed',
    startTime: 'Thu, 15 Feb 2024 15:00:39',
    endTime: 'Thu, 15 Feb 2024 15:08:39',
    reviewStatus: 'approved',
    environment: 'prod',
    fields: [
      { key: 'Patient Name', value: 'Emily Chen', confidence: 99.4, category: 'Personal Information' },
      { key: 'Lab Order Number', value: 'LAB-2024-456789', confidence: 98.7, category: 'Lab Information' },
      { key: 'Test Date', value: '2024-01-20', confidence: 99.6, category: 'Lab Information' },
      { key: 'HbA1c', value: '7.2%', confidence: 98.9, category: 'Lab Results' },
      { key: 'Glucose (Fasting)', value: '145 mg/dL', confidence: 97.8, category: 'Lab Results' },
      { key: 'Cholesterol Total', value: '220 mg/dL', confidence: 98.2, category: 'Lab Results' },
      { key: 'HDL', value: '45 mg/dL', confidence: 97.5, category: 'Lab Results' },
      { key: 'LDL', value: '140 mg/dL', confidence: 98.1, category: 'Lab Results' },
      { key: 'Triglycerides', value: '180 mg/dL', confidence: 96.9, category: 'Lab Results' },
      { key: 'Ordering Physician', value: 'Dr. David Kim', confidence: 99.0, category: 'Provider Information' },
      { key: 'Lab Facility', value: 'Metro Medical Labs', confidence: 98.3, category: 'Provider Information' }
    ]
  },
  {
    executionId: '990e8400-e29b-41d4-a716-446655440004',
    fileName: 'Discharge_Summary_Patient_789.pdf',
    fileType: 'Discharge Summary',
    status: 'rejected',
    startTime: 'Thu, 15 Feb 2024 15:00:39',
    endTime: 'Thu, 15 Feb 2024 15:12:39',
    reviewStatus: 'rejected',
    environment: 'dev',
    fields: [
      { key: 'Patient Name', value: 'Michael Thompson', confidence: 99.3, category: 'Personal Information' },
      { key: 'Admission Date', value: '2024-01-25', confidence: 98.8, category: 'Hospital Information' },
      { key: 'Discharge Date', value: '2024-01-28', confidence: 99.1, category: 'Hospital Information' },
      { key: 'Primary Diagnosis', value: 'Acute Myocardial Infarction', confidence: 97.6, category: 'Medical Information' },
      { key: 'Secondary Diagnosis', value: 'Hypertension', confidence: 96.8, category: 'Medical Information' },
      { key: 'Discharge Instructions', value: 'Follow up with cardiologist in 1 week', confidence: 95.4, category: 'Medical Information' },
      { key: 'Attending Physician', value: 'Dr. Lisa Wang', confidence: 98.9, category: 'Provider Information' },
      { key: 'Hospital', value: 'Memorial Hospital', confidence: 99.2, category: 'Provider Information' }
    ]
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Clear existing data
    await Document.deleteMany({});
    console.log('🗑️  Cleared existing documents');
    
    // Insert sample data
    await Document.insertMany(sampleDocuments);
    console.log('✅ Database seeded with sample documents');
    
    // Get count for verification
    const count = await Document.countDocuments();
    console.log(`📊 Total documents in database: ${count}`);
    
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed(); 