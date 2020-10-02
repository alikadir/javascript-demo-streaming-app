export const log = (error, location, userAgent) => {
  /***** The error should be sent to a log server *****/
  consoleProvider(error, location, userAgent);
};
const consoleProvider = (error, location, userAgent) => {
  console.group('============== Custom Error Handler ===============');
  console.error({ error });
  console.error({ location });
  console.error({ userAgent });
  console.groupEnd();
};
