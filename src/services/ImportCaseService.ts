import fs from 'fs';
import csvParse from 'csv-parse';

interface CSVCases {
  address: string;
  lat: string;
  lon: string;
}

class ImportCaseService {
  async execute(filePath: string): Promise<void> {
    const contactsReadStream = fs.createReadStream(filePath);
    const parsers = csvParse({
      from_line: 2,
    });

    const parseCSV = contactsReadStream.pipe(parsers);
    const cases: CSVCases[] = [];

    parseCSV.on('data', async line => {
      const [address, lat, lon] = line.map((cell: string) => cell.trim());

      cases.push({ address, lat, lon });
    });

    await new Promise(resolve => parseCSV.on('end', resolve));
  }
}

export default ImportCaseService;
