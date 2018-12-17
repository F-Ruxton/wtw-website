if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

module.exports = {
  cloud_name: 'wtw',
  upload_preset: 'UUUUUUUU',
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
};
