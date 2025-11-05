export default class Logger {
  static info(message: string) {
    console.log(`\x1b[32m[INFO]\x1b[0m ${message}`);
  }

  static error(error: unknown) {
    console.log(`\x1b[32m[INFO]\x1b[0m`, error)
  }
  static warn(message: string) {
    console.log(`\x1b[32m[INFO]\x1b[0m ${message}`);
  }
}