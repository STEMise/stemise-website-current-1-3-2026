import ExcelJS from "exceljs";

// Define the headers matching the Workshop interface
const headers = [
    "id",
    "title",
    "description",
    "date",
    "time",
    "location",
    "registrationLink"
];

// Sample data rows to show the expected format
const sampleData = [
    {
        id: "1",
        title: "Introduction to Python Programming",
        description: "Learn the basics of Python programming language",
        date: "January 25, 2026",
        time: "10:00 AM - 12:00 PM",
        location: "Online via Zoom",
        registrationLink: "https://forms.gle/example1"
    },
    {
        id: "2",
        title: "Web Development Fundamentals",
        description: "Build your first website with HTML, CSS, and JavaScript",
        date: "February 1, 2026",
        time: "2:00 PM - 4:00 PM",
        location: "Community Center, Room 101",
        registrationLink: "https://forms.gle/example2"
    },
    {
        id: "3",
        title: "AI & Machine Learning Basics",
        description: "Explore the fundamentals of artificial intelligence",
        date: "February 8, 2026",
        time: "11:00 AM - 1:00 PM",
        location: "Online via Google Meet",
        registrationLink: ""
    }
];

const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet("Workshops");

worksheet.columns = [
    { header: headers[0], key: "id", width: 5 },
    { header: headers[1], key: "title", width: 35 },
    { header: headers[2], key: "description", width: 50 },
    { header: headers[3], key: "date", width: 20 },
    { header: headers[4], key: "time", width: 20 },
    { header: headers[5], key: "location", width: 30 },
    { header: headers[6], key: "registrationLink", width: 35 }
];

worksheet.addRows(sampleData);

const run = async () => {
    await workbook.xlsx.writeFile("workshops-template.xlsx");

    console.log("workshops-template.xlsx created successfully!");
    console.log("");
    console.log("Columns:");
    headers.forEach((header, index) => {
        console.log(`   ${index + 1}. ${header}`);
    });
    console.log("");
    console.log("Instructions:");
    console.log("   1. Upload this file to Google Sheets");
    console.log("   2. Use the column headers as shown");
    console.log("   3. Add your workshop data in the rows below");
    console.log("   4. Leave registrationLink empty if no registration is needed");
};

run().catch(error => {
    console.error("Failed to create workshops template.", error);
    process.exitCode = 1;
});
