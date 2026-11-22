import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "./new-images";
const OUTPUT_DIR = "./images";

// target variant definitions
const targets = [
  { name: "mobile", width: 640, formats: ["jpeg", "webp"] },
  { name: "desktop", width: 1920, formats: ["jpeg", "webp"] },
  { name: "retina", width: 3840, formats: ["jpeg", "webp"] },
];

async function processImages() {
  // ensure the output folder exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // grab all jpg/png files in the input directory
  const files = (await fs.readdir(INPUT_DIR)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f),
  );

  for (let file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const name = path.parse(file).name;

    for (let { name: variant, width, formats } of targets) {
      const variantDir = path.join(OUTPUT_DIR, variant);
      await fs.mkdir(variantDir, { recursive: true });

      for (let fmt of formats) {
        const outPath = path.join(variantDir, `${name}.${fmt}`);
        // --- NEW CODE TO ADD: Check if file already exists ---
        try {
          await fs.access(outPath);
          console.log(
            `⏭️  Skipped (already exists): ${variant}/${name}.${fmt}`,
          );
          continue;
        } catch {
          // File doesn't exist, proceed with processing
        }
        // --- END OF NEW CODE ---
        let pipeline = sharp(inputPath).resize({ width });

        if (fmt === "jpeg") {
          pipeline = pipeline.jpeg({ quality: 75, progressive: true });
        } else if (fmt === "webp") {
          pipeline = pipeline.webp({ quality: 80 });
        }

        await pipeline.toFile(outPath);
        console.log(`✅ ${variant}/${name}.${fmt}`);
      }
    }
  }
}

processImages().catch((err) => {
  console.error("Image processing failed:", err);
  process.exit(1);
});
