# Errata for *Essential TypeScript 4*

This file contains errors that are likely to prevent the code examples from working as described in ths book. See [this](typos.md) file for small mistakes that I intend to correct in the next edition.


**Chapter 1**

On page 22, the type package installed by Listing 1-31 should specify a version, like this:

    npm install --save-dev @types/inquirer@7.3.3

(Thanks to J Fern for reporting this problem)

---

**Chapter 10**

The example in **Listing 10-22** doesn't produce the expected results because, as the chapter notes, there is no intersection between the `number` and `string` types. Please ignore the results from this listing.

(Thanks to Bersez Nathan - aka GazousGit - for reporting this issue)

***

**Chapter 13**

The command in Listing 15-13 may produce the following error:

    [webpack-cli] TypeError: options.forEach is not a function

To resolve this issue update the webpack-cli package using the following command:

    npm update webpack-cli

(Thanks to Roberto Alarcon for reporting this problem)

***
