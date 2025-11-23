const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Read SVG file
const svgBuffer = fs.readFileSync(path.join(__dirname, 'icon.svg'));

// Generate icons at different sizes
const sizes = [16, 48, 128];

async function generateIcons() {
  for (const size of sizes) {
    const outputPath = path.join(__dirname, `icon${size}.png`);

    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`Generated icon${size}.png`);
  }

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
