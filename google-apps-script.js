// google-apps-script.js
// Google Apps Script code for handling PFE Defense attendance form submissions

/**
 * Handle POST requests from the attendance form
 * This function will be triggered when the web app receives a POST request
 */
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses');
    
    // Check if the 'Responses' sheet exists
    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({
          status: 'error',
          message: 'Responses sheet not found. Please create a sheet named "Responses".'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Extract form data
    const name = e.parameter.name || '';
    const slot = e.parameter.slot || '';
    
    // Validate required fields
    if (!name.trim() || !slot.trim()) {
      return ContentService
        .createTextOutput(JSON.stringify({
          status: 'error',
          message: 'Name and time slot are required.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Append data to the sheet
    sheet.appendRow([name.trim(), slot.trim(), timestamp]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Registration submitted successfully.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'An error occurred while processing your submission. Please try again.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (optional - for testing)
 * This can be used to test if the web app is working
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'PFE Defense Attendance API is running.',
      timestamp: new Date()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Initialize the spreadsheet with proper headers (run this once manually)
 * This function sets up the 'Responses' sheet with the correct headers
 */
function initializeSheet() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('Responses');
    
    // Create the 'Responses' sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Responses');
    }
    
    // Check if headers already exist
    const range = sheet.getRange(1, 1, 1, 3);
    const headers = range.getValues()[0];
    
    // Add headers if they don't exist or are empty
    if (!headers[0] || headers[0] !== 'Name') {
      sheet.getRange(1, 1, 1, 3).setValues([['Name', 'Slot', 'Timestamp']]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, 3);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      
      // Auto-resize columns
      sheet.autoResizeColumns(1, 3);
      
      console.log('Sheet initialized successfully with headers.');
    } else {
      console.log('Headers already exist in the Responses sheet.');
    }
    
  } catch (error) {
    console.error('Error initializing sheet:', error);
  }
}