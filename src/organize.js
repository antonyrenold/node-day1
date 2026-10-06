import fs from "node:fs/promises";
import path from "node:path";
import logger from "./logger.js";
import config from "./config.json" with { type: "json" };

export const organize = async (inputPath) => {
  const resolvedPath = path.resolve(inputPath);
  try {
    const entries = await fs.readdir(resolvedPath);
    logger.emit("info", "Organization process started");
    for (const entry of entries) {
      const fullPath = path.join(resolvedPath, entry);
      const stats = await fs.stat(fullPath);
      if (!stats.isFile()) continue;
      else {
        const extension = path.extname(entry).toLowerCase().replace(".", "");
        if (!extension) {
          logger.emit("warn", `file:'${entry}' has no extension`);
          continue;
        } else {
          const [category] = Object.entries(config).find(([key, values]) =>
            values.includes(extension),
          ) || ["other"];
          const destinationDir = path.join(resolvedPath, category);
          try{
            fs.access(destinationPath)
            logger.emit('warn',"duplicate file found")
            continue;
          }
          catch{

          }
          await fs.mkdir(destinationDir, { recursive: true });
          const destinationPath = path.join(destinationDir, entry);
          try{
              fs.rename(fullPath, destinationPath);
            }
            catch(err){
                logger.emit('error','Error while move file')
            }
          logger.emit("info", `Moves ${entry} -> ${category}`);
        }
      }
    }
    logger.emit("info","Organization process completed")
  } catch(err) {
    logger.emit("error", "Error occured while organize")
  }
};
