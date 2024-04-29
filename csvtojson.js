import csvtojson from 'csvtojson';
import fs from 'fs';

// Path to the CSV file
const csvFilePath = 'athlete_events.csv';

// Convert CSV to JSON
csvtojson()
  .fromFile(csvFilePath)
  .then((jsonArrayObj) => {
    // Save the JSON data to a file
    fs.writeFileSync('data.json', JSON.stringify(jsonArrayObj, null, 2));
    console.log('Conversion completed successfully.');
  })
  .catch((err) => {
    console.error('Error:', err);
  });
