/**
 * Google Apps Script for Workshops API
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet with the workshops data
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" → "New deployment"
 * 5. Select type: "Web app"
 * 6. Set "Execute as": "Me"
 * 7. Set "Who has access": "Anyone"
 * 8. Click "Deploy" and copy the Web App URL
 * 9. Paste the URL into WORKSHOPS_API_URL in Courses.tsx
 */

function doGet(e) {
    // Set CORS headers for cross-origin requests
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);

    try {
        const data = getWorkshopsData();
        output.setContent(JSON.stringify(data));
    } catch (error) {
        output.setContent(JSON.stringify({
            error: error.message,
            workshops: []
        }));
    }

    return output;
}

function getWorkshopsData() {
    // Get the active spreadsheet and the "Workshops" sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Workshops');

    if (!sheet) {
        throw new Error('Sheet "Workshops" not found');
    }

    // Get all data from the sheet
    const data = sheet.getDataRange().getValues();

    // First row contains headers
    const headers = data[0];

    // Map data rows to workshop objects
    const workshops = [];

    for (let i = 1; i < data.length; i++) {
        const row = data[i];

        // Skip empty rows (check if id and title exist)
        if (!row[0] && !row[1]) continue;

        const workshop = {};

        // Map each column to the corresponding header
        headers.forEach((header, index) => {
            workshop[header] = row[index] || '';
        });

        // Only include workshops with at least an id and title
        if (workshop.id && workshop.title) {
            workshops.push(workshop);
        }
    }

    return { workshops };
}

/**
 * Test function - run this to verify your setup works
 * Go to Run → testGetWorkshops in the Apps Script editor
 */
function testGetWorkshops() {
    const result = getWorkshopsData();
    console.log('Found', result.workshops.length, 'workshops:');
    console.log(JSON.stringify(result, null, 2));
}
