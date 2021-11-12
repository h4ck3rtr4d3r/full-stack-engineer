/**
 * JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign tem to new variables.
 * See below an annoyingly ling function:
 */

const announceThatIAmDoingImportantWork = () => {
  console.log("I'm doing very important work!");
};

/**
 * What if we wanted to rename this function whitout sacrificing the source code? We can re-assign the function to a variable wih a suitably short name:
 */

const busy = announceThatIAmDoingImportantWork;
busy(); // This function call barely takes any space!

/**
 *
 */
