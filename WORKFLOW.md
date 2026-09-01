Round 1 vs. Round 2 Comparison

Correctness & Mistake Caught:
In Round 1, the vague prompt caused the AI to make a common mistake: it created uncontrolled inputs without any state management, meaning the form data wasn't actually usable in a real React app. In Round 2, the precise prompt forced the AI to use useState, making the component functionally correct.

Accessibility & Edge Cases:
The diff between the two branches is significant. Round 1 lacked htmlFor tags on labels and completely ignored error handling. If a user submitted a blank form, nothing happened. Round 2 specifically addressed edge cases: it checks for empty strings and invalid email formats, displaying explicit red error messages, which drastically improves user experience.

Review Effort:
Reviewing Round 1 was frustrating because I would have to rewrite half the code to add validation manually. Round 2 took slightly longer to prompt, but the review effort was near zero because the constraints were met perfectly on the first generation.