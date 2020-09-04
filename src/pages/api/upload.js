import path from 'path';
import fs from 'file-system';
import Formidable from 'formidable';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(403).send('Method not allowed');
    return;
  }

  const form = new Formidable.IncomingForm({
    multiples: true,
    keepExtensions: true,
    // uploadDir: path.join(serverRuntimeConfig.PROJECT_ROOT, '/public/'),
  });

  try {
    const img = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        fs.renameSync(
          files.icon.path,
          path.join(
            serverRuntimeConfig.PROJECT_ROOT,
            `/public/${files.icon.name}`,
          ),
        );

        resolve(files);
      });
    });

    res.status(200).send(img);
  } catch (error) {
    res.status(500).send('Parse Error');
  }
};
