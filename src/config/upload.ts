import { diskStorage } from 'multer';
import path from 'path';
import { randomBytes } from 'crypto';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,
  storage: diskStorage({
    filename(request, file, callback) {
      const fileHash = randomBytes(8).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;
      return callback(null, filename);
    },
  }),
};
