import XLSX from 'xlsx';

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Define the headers matching the Workshop interface
const headers = [
    'id',
    'title',
    'description',
    'date',
    'time',
    'location',
    'registrationLink'
];

// Sample data rows to show the expected format
const sampleData = [
    {
        id: '1',
        title: 'Introduction to Python Programming',
        description: 'Learn the basics of Python programming language',
        date: 'January 25, 2026',
        time: '10:00 AM - 12:00 PM',
        location: 'Online via Zoom',
        registrationLink: 'https://forms.gle/example1'
    },
    {
        id: '2',
        title: 'Web Development Fundamentals',
        description: 'Build your first website with HTML, CSS, and JavaScript',
        date: 'February 1, 2026',
        time: '2:00 PM - 4:00 PM',
        location: 'Community Center, Room 101',
        registrationLink: 'https://forms.gle/example2'
    },
    {
        id: '3',
        title: 'AI & Machine Learning Basics',
        description: 'Explore the fundamentals of artificial intelligence',
        date: 'February 8, 2026',
        time: '11:00 AM - 1:00 PM',
        location: 'Online via Google Meet',
        registrationLink: ''
    }
];

// Create worksheet from data
const worksheetData = [headers, ...sampleData.map(row => [
    row.id,
    row.title,
    row.description,
    row.date,
    row.time,
    row.location,
    row.registrationLink
])];

const worksheet = XLSX.utils.aoa_to_array ?
    XLSX.utils.aoa_to_sheet(worksheetData) :
    XLSX.utils.aoa_to_sheet(worksheetData);

// Set column widths for better readability
worksheet['!cols'] = [
    { wch: 5 },   // id
    { wch: 35 },  // title
    { wch: 50 },  // description
    { wch: 20 },  // date
    { wch: 20 },  // time
    { wch: 30 },  // location
    { wch: 35 }   // registrationLink
];

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Workshops');

// Write the file
XLSX.writeFile(workbook, 'workshops-template.xlsx');

console.log('✅ workshops-template.xlsx created successfully!');
console.log('');
console.log('📋 Columns:');
headers.forEach((header, index) => {
    console.log(`   ${index + 1}. ${header}`);
});
console.log('');
console.log('📝 Instructions:');
console.log('   1. Upload this file to Google Sheets');
console.log('   2. Use the column headers as shown');
console.log('   3. Add your workshop data in the rows below');
console.log('   4. Leave registrationLink empty if no registration is needed');
