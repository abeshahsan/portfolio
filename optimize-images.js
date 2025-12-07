import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = './public';

async function optimizeImages() {
	const files = await readdir(publicDir);
	
	for (const file of files) {
		if (file.match(/\.(png|jpg|jpeg)$/i)) {
			const inputPath = join(publicDir, file);
			const outputPath = join(publicDir, file);
			
			console.log(`Optimizing ${file}...`);
			
			await sharp(inputPath)
				.resize(800, 800, { 
					fit: 'inside',
					withoutEnlargement: true 
				})
				.webp({ quality: 85 })
				.toFile(outputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
			
			console.log(`✓ Created optimized ${file.replace(/\.(png|jpg|jpeg)$/i, '.webp')}`);
		}
	}
}

optimizeImages().catch(console.error);
