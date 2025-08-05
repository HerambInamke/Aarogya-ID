import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  '🟢', // WhatsApp placeholder
  '📁', // Folder
  '👥', // People
  '❤️', // Heart
  '✉️', // Gmail
  '📱', // Mobile
];

const medicalRecords = [
  {
    date: 'Dec 5th',
    type: 'MRI: Brain',
    category: 'Imaging',
    provider: 'Dr. Surabhi Anand',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    clinicalHistory: 'The patient presented with occasional headaches and dizziness',
    findings: 'This MRI of the brain reveals no significant abnormalities or pathologies. The findings are...',
    color: 'bg-blue-100',
    textColor: 'text-blue-800'
  },
  {
    date: 'Nov 25th',
    type: 'Thyroid Profile',
    category: 'Labs',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    labResults: [
      { name: 'Basophils', value: '0.0', unit: '10*3/uL', range: [0.0, 0.2], current: 0.0 },
      { name: 'BUN/Creatine Blood', value: '29', unit: '', range: [10, 24], current: 29, isHigh: true },
      { name: 'Calcium (Blood)', value: '10.1', unit: 'mg/dL', range: [6.5, 12.3], current: 10.1 }
    ],
    color: 'bg-yellow-100',
    textColor: 'text-yellow-800'
  },
  {
    date: 'Nov 15th',
    type: 'Prescription',
    category: 'Outpatient',
    provider: 'Dr. Surabhi Anand',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    assessment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    problemList: ['Atrial fibrillation', 'Chest pain', 'Diverticulosis of colon', 'Partial colectomy'],
    color: 'bg-green-100',
    textColor: 'text-green-800'
  },
  {
    date: 'Sep 15th',
    type: 'HFE Analysis',
    category: 'Genetic Testing',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    methodology: '1. Normal biventricular size and systolic function with an ejection fraction of 60-65%, Normal valvular struct...',
    interpretation: 'Atrial fibrillation, chest pain, hypertensive heart disease and aneurysm of aortic...',
    color: 'bg-teal-100',
    textColor: 'text-teal-800'
  },
  {
    date: 'Sep 05th',
    type: 'Pathology: Colon',
    category: 'Pathology',
    provider: 'Dr. Surabhi Anand',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    diagnosis: 'Descending color, polypectomy: Colonic mucosa with benign lymphoid aggregate...',
    findings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    color: 'bg-purple-100',
    textColor: 'text-purple-800'
  },
  {
    date: 'Jun 15th',
    type: 'Echocardiogram',
    category: 'Procedure',
    provider: 'Dr. Surabhi Anand',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    indication: 'Atrial fibrillation, chest pain, hypertensive heart disease anocneurys \'n of aortic coor',
    summary: '1. Normal biventricular size and systolic function with an ejection fraction of 60-65%. 2. Normal valvular structures...',
    color: 'bg-blue-100',
    textColor: 'text-blue-800'
  },
  {
    date: 'Jan 5th',
    type: 'Discharge Summary',
    category: 'Hospitalization',
    provider: 'Dr. Surabhi Anand',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    chiefComplaint: 'A 55-year-old man who 6 months ago had colon resection for complicated diverticulitis, and colostomy and Hartmann pouch were cone. The patient has done well and is admitted for reversol of his colostomy.',
    color: 'bg-pink-100',
    textColor: 'text-pink-800'
  }
];

const AnimatedDiagram = () => {
  // Create 200+ copies of records to make it extremely long
  const extendedRecords = Array.from({ length: 200 }, (_, index) => 
    medicalRecords.map((record, recordIndex) => ({
      ...record,
      date: record.date,
      type: record.type,
      key: `${index}-${recordIndex}`
    }))
  ).flat();

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 min-h-[350px] px-4 lg:px-0">
      {/* Left: Icons in 2x3 grid */}
      <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:gap-6 mb-8 lg:mb-0 lg:mr-4">
        {icons.map((icon, idx) => (
          <div key={idx} className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white rounded-xl shadow text-xl lg:text-2xl">
            {icon}
          </div>
        ))}
      </div>

      {/* Dotted Arrows from each icon to center */}
      <div className="relative flex-1 flex items-center justify-center min-w-[280px] lg:min-w-[320px] max-w-[400px]">
        {/* Center: Circle with Fixed Content and Rotating Arrow */}
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 lg:border-6 border-blue-500 flex items-center justify-center bg-white shadow-lg">
          {/* Medical Documents Inside Circle - FIXED */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Heart Reports Folder */}
            <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 w-12 h-16 lg:w-16 lg:h-20 bg-gray-200 rounded border-2 border-gray-300 flex flex-col">
              <div className="bg-gray-300 h-3 lg:h-4 rounded-t"></div>
              <div className="flex-1 p-1">
                <div className="text-xs text-gray-600 font-medium">Heart Reports</div>
                <div className="space-y-1 mt-1">
                  <div className="w-full h-1 bg-blue-300 rounded"></div>
                  <div className="w-3/4 h-1 bg-blue-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* Diagnosis Reports Folder */}
            <div className="absolute bottom-8 lg:bottom-16 right-4 lg:right-8 w-12 h-16 lg:w-16 lg:h-20 bg-gray-200 rounded border-2 border-gray-300 flex flex-col">
              <div className="bg-gray-300 h-3 lg:h-4 rounded-t"></div>
              <div className="flex-1 p-1 relative">
                <div className="text-xs text-gray-600 font-medium">Diagnosis Reports</div>
                <div className="space-y-1 mt-1">
                  <div className="w-full h-1 bg-blue-300 rounded"></div>
                  <div className="w-3/4 h-1 bg-blue-300 rounded"></div>
                </div>
                {/* Checkmark */}
                <div className="absolute bottom-1 right-1 w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            </div>

            {/* Prescriptions Folder */}
            <div className="absolute top-8 lg:top-16 left-6 lg:left-12 w-12 h-16 lg:w-16 lg:h-20 bg-gray-200 rounded border-2 border-gray-300 flex flex-col">
              <div className="bg-gray-300 h-3 lg:h-4 rounded-t"></div>
              <div className="flex-1 p-1">
                <div className="text-xs text-gray-600 font-medium">Prescriptions</div>
                <div className="space-y-1 mt-1">
                  <div className="w-full h-1 bg-blue-300 rounded"></div>
                  <div className="w-3/4 h-1 bg-blue-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* Patient Document */}
            <div className="absolute top-4 lg:top-8 right-6 lg:right-12 w-10 h-12 lg:w-12 lg:h-16 bg-white rounded border border-gray-300 transform rotate-12">
              <div className="h-1 lg:h-2 bg-gray-300 rounded-t"></div>
              <div className="p-1">
                <div className="w-4 h-4 lg:w-6 lg:h-6 bg-gray-400 rounded-full mx-auto mt-1"></div>
                <div className="space-y-1 mt-1">
                  <div className="w-full h-1 bg-blue-300 rounded"></div>
                  <div className="w-2/3 h-1 bg-blue-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Person Silhouette - FIXED */}
          <div className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-800 rounded-full"></div>
            <div className="w-4 h-8 lg:w-6 lg:h-10 bg-gray-800 rounded-t-full mx-auto mt-1"></div>
            <div className="w-3 h-1 lg:w-4 lg:h-2 bg-white rounded mx-auto mt-1"></div>
          </div>

          {/* Rotating Blue Circular Arrow - ONLY THIS MOVES */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 12, 
              ease: "linear"
            }}
          >
            <svg 
              className="w-full h-full"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main circular arrow path - OUTSIDE THE CIRCLE */}
              <path
                d="M160 12 A148 148 0 1 1 160 308 A148 148 0 1 1 160 12"
                stroke="#3B82F6"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="20 12"
                fill="none"
              />
              {/* Arrowhead 1 - OUTSIDE */}
              <path
                d="M160 12 L150 2 L170 2 L160 12"
                fill="#3B82F6"
              />
              {/* Arrowhead 2 - OUTSIDE */}
              <path
                d="M160 308 L150 318 L170 318 L160 308"
                fill="#3B82F6"
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Dotted arrows from left icons to center (static for now, can animate if needed) */}
        {[...Array(6)].map((_, i) => {
          // Calculate start/end points for arrows
          const startY = 40 + i * 48;
          return (
            <svg
              key={i}
              className="absolute left-[-90px] top-0"
              style={{ top: `${startY}px` }}
              width="100" height="24" viewBox="0 0 100 24" fill="none"
            >
              <path d="M0 12 Q50 12 100 12" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <polygon points="100,12 94,8 94,16" fill="#3B82F6" />
            </svg>
          );
        })}
      </div>

      {/* Right: Phone mockup with scrolling medical records */}
      <div className="mt-8 lg:mt-0 lg:ml-4 flex items-center justify-center">
        <div className="w-32 h-64 lg:w-48 lg:h-96 rounded-3xl border-4 border-gray-300 bg-white shadow-lg relative overflow-hidden">
          {/* Phone header */}
          <div className="absolute top-0 left-0 right-0 h-12 lg:h-16 bg-white border-b border-gray-200 z-10">
            <div className="flex justify-between items-center px-2 lg:px-3 pt-1 lg:pt-2">
              <span className="text-xs text-gray-600">9:21</span>
              <div className="flex space-x-1">
                <div className="w-3 h-1 lg:w-4 lg:h-2 bg-gray-400 rounded"></div>
                <div className="w-1 h-1 lg:w-1 lg:h-2 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="px-2 lg:px-3 mt-1">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-200 rounded"></div>
                <div className="flex-1 bg-gray-100 rounded px-1 lg:px-2 py-1 text-xs text-gray-500">search</div>
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-200 rounded"></div>
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Scrolling medical records */}
          <motion.div 
            className="absolute top-12 lg:top-16 left-0 right-0 bottom-0 overflow-hidden"
            animate={{ y: [0, -15000] }}
            transition={{ duration: 600, repeat: Infinity, ease: 'linear' }}
          >
            <div className="px-2 lg:px-3 py-2">
              <div className="text-sm font-bold text-gray-900 mb-4">Records</div>
              
              {/* Filter buttons */}
              <div className="flex space-x-1 lg:space-x-2 mb-4">
                <div className="px-2 lg:px-3 py-1 bg-gray-100 rounded-full text-xs">Doctor ▼</div>
                <div className="px-2 lg:px-3 py-1 bg-gray-100 rounded-full text-xs">Disease ▼</div>
                <div className="px-2 lg:px-3 py-1 bg-gray-100 rounded-full text-xs">Records Type ▼</div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-3 lg:left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
                
                {extendedRecords.map((record, index) => (
                  <div key={`${record.key}-${index}`} className="relative mb-6 ml-6 lg:ml-8">
                    {/* Date marker */}
                    <div className="absolute -left-4 lg:-left-6 w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full"></div>
                    <div className="text-xs text-gray-500 mb-2 lg:mb-3">{record.date}</div>
                    
                    {/* Record card */}
                    <div className="bg-white rounded-lg border border-gray-200 p-2 lg:p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <div className="font-semibold text-sm">{record.type}</div>
                        <div className={`px-2 py-1 rounded-full text-xs ${record.color} ${record.textColor}`}>
                          {record.category}
                        </div>
                      </div>
                      
                      {record.provider && (
                        <div className="flex items-center text-xs text-gray-600 mb-2 lg:mb-3">
                          <span className="mr-1">👨‍⚕️</span>
                          {record.provider}
                        </div>
                      )}
                      
                      <div className="text-xs text-gray-600 mb-2 lg:mb-3">{record.content}</div>
                      
                      {record.labResults && (
                        <div className="space-y-2 lg:space-y-3">
                          {record.labResults.map((lab, labIndex) => (
                            <div key={labIndex} className="text-xs">
                              <div className="flex justify-between">
                                <span>{lab.name}:</span>
                                <span className={lab.isHigh ? 'text-red-600' : ''}>{lab.value} {lab.unit}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                                <div 
                                  className={`h-1 rounded-full ${lab.isHigh ? 'bg-red-500' : 'bg-blue-500'}`}
                                  style={{ width: `${((lab.current - lab.range[0]) / (lab.range[1] - lab.range[0])) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {record.clinicalHistory && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Clinical History:</strong> {record.clinicalHistory}
                        </div>
                      )}
                      
                      {record.findings && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Findings:</strong> {record.findings}
                        </div>
                      )}
                      
                      {record.assessment && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Assessment:</strong> {record.assessment}
                        </div>
                      )}
                      
                      {record.problemList && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Problem List:</strong>
                          <ol className="list-decimal list-inside ml-2">
                            {record.problemList.map((problem, probIndex) => (
                              <li key={probIndex}>{problem}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                      
                      {record.methodology && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Methodology:</strong> {record.methodology}
                        </div>
                      )}
                      
                      {record.interpretation && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Interpretation:</strong> {record.interpretation}
                        </div>
                      )}
                      
                      {record.diagnosis && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Diagnosis:</strong> {record.diagnosis}
                        </div>
                      )}
                      
                      {record.indication && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Indication:</strong> {record.indication}
                        </div>
                      )}
                      
                      {record.summary && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Summary:</strong> {record.summary}
                        </div>
                      )}
                      
                      {record.chiefComplaint && (
                        <div className="text-xs text-gray-600 mb-1 lg:mb-2">
                          <strong>Chief Complaint:</strong> {record.chiefComplaint}
                        </div>
                      )}
                      
                      {/* Thumbnail placeholder */}
                      <div className="w-full h-12 lg:h-16 bg-gray-100 rounded mt-2 lg:mt-3 flex items-center justify-center">
                        <span className="text-xs text-gray-400">📄</span>
                      </div>
                      
                      {/* View Report button */}
                      <button className="w-full mt-2 lg:mt-3 bg-blue-500 text-white text-xs py-1 rounded">
                        View Report
                      </button>
                      
                      <div className="text-xs text-blue-500 mt-1 lg:mt-2">View all</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDiagram;