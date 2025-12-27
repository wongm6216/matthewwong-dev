import fs from "fs";
import path from "path";
import matter from "gray-matter";

const potteryDirectory = path.join(process.cwd(), "content/pottery");

export interface PotteryPiece {
  slug: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  thumbnail: string;
}

export function getAllPottery(): PotteryPiece[] {
  // Get all markdown files from the pottery directory
  const fileNames = fs.existsSync(potteryDirectory)
    ? fs.readdirSync(potteryDirectory)
    : [];
  const allPotteryData = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      // Remove .md extension to get slug
      const slug = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(potteryDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse frontmatter
      const { data } = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        images: data.images || [],
        thumbnail: data.thumbnail || (data.images && data.images[0]) || "",
      };
    });

  // Sort pottery by date (newest first)
  return allPotteryData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPotteryBySlug(slug: string): PotteryPiece | null {
  try {
    const fullPath = path.join(potteryDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse frontmatter
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      description: data.description || "",
      images: data.images || [],
      thumbnail: data.thumbnail || (data.images && data.images[0]) || "",
    };
  } catch (error) {
    return null;
  }
}



