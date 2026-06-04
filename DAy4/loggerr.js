const fs = require("fs");
// Logger class used to log INFO, ERROR, and DEBUG messages
class Logger {
  // Common method used by all log levels
  static log(level, message) {
     // Create a log message with timestamp and log level
    const logMessage = `[${new Date().toISOString()}] [${level}] ${message}\n`;
       // Print the log message in the terminal
    console.log(logMessage);
      // Save the log message into app.log file
    fs.appendFileSync("app.log", logMessage);
  }
 // Log normal application information
  static info(message) {
    this.log("INFO", message);
  }
// Log application errors
  static error(message) {
    this.log("ERROR", message);
  }
 // Log debugging information for developers
  static debug(message) {
    this.log("DEBUG", message);
  }
}

module.exports = Logger;
