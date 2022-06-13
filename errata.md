# Errata for *Essential TypeScript 4*

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
