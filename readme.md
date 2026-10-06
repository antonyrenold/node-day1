# Node.js Logger & Organizer

A lightweight **Node.js** command-line utility designed to automatically organize files in a specified directory into structured folders based on their file extensions, while maintaining a comprehensive execution log.

## Features

* **Smart Categorization:** Automatically groups files into folders like Images, Videos, Packages, and Documents.
* **Activity Logging:** Records all organization activities, moved files, and errors to a localized log file for easy tracking.
* **Streamlined CLI:** Simple command-line interface execution.
* **Safe Operations:** Skips system files and folders that are already organized.

## Project Structure

```text
├── src/
│   ├── index.js          # Main entry point and CLI command parsing
│   ├── organizer.js      # Core logic for sorting files
│   └── logger.js         # Logging utility for tracking operations
├── package.json
└── README.md
```

## Installation

1. **Clone** this repository to your local machine:
   ```bash
   git clone https://github.com
   ```
2. **Navigate** into the project directory:
   ```bash
   cd logger-organizer
   ```
3. **Install** dependencies (if any are added):
   ```bash
   npm install
   ```

## Usage

To organize a directory, run the `organize` command followed by the target directory path:

```bash
node src/index.js organize "/path/to/your/folder"
```

### Supported File Categories

The script scans the target path and automatically moves files into the following subfolders based on your configuration:

* **images:** `png`, `jpg`, `jpeg`, `gif`
* **videos:** `mkv`, `mp4`, `avi`
* **packages:** `exe`, `msi`
* **documents:** `pdf`, `doc`, `docx`, `txt`, `md`

## How It Works

1. **Command Parsing:** The script verifies that the `organize` argument and a valid directory path are provided.
2. **Directory Scanning:** It reads all files in the target directory.
3. **File Matching:** Each file's extension is checked against the defined `images`, `videos`, `packages`, and `documents` mappings.
4. **Moving & Logging:** The file is moved into its respective folder, and a timestamped success message is written to a `logs/activity.log` file.

## License

This project is licensed under the MIT License.
