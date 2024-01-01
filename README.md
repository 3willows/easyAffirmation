## Why?

- Save time on purely mechanical aspects of making an affirmation, leaving more room to think about the substance.
- Help people who have never seen an affirmation before (e.g. many law students) what one looks like.

## User story

1. The users: HK lawyers; law students; law teachers
2. Flow:
   - User fills in all the required text boxes.  The webpage formats/autocompletes as appropriate.
   - User presses 1 of 2 buttons at the bottom.  A new tab opens, showing either:-
      - A printable affirmation
      - Backcksheet
     
## Schedule

- [ ] Complete affirmation
- [ ] Add landing page
   
## Steps taken/to take

- [x] Use [pandocs](https://github.com/jgm/pandoc) to generate an HTML template for affirmation.
- [x] Make all the underlined parts text input boxes.
- [x] Add a "printable version" button at the end of the document.
- [x] Deponent name automatically appears in appropriate places.
- [x] Case number automatically appears on the top right hand corner.
- [x] Add functionality for users to add more parties (multiple Ps, multiple Ds)
- [x] Add box that permits user to say whether it is the 1st, 2nd or later affirmation.Set the Affirmation date to a default of today.
- [x] Generate the Affirmation number, abbreviation of deponent, party on behalf of the affirmation, and the date of affirmation on the top right conrner.
- [ ] For the text in the textboxes, use JS injection, not placeholders, for easy editing.
- [ ] Output an HTML page with appropriate content
- [ ] Output backsheet
- [ ] Properly CSS and make responsive
      
## Changes under consideration

- [ ] Default the year of the case to this year?
- [ ] Some way for the user to save progress without completing the affirmation?
- [ ] Add instructions pop-up to the page?
      
## Known bugs
      
## Non-features

- [ ] reminder about jurat rule
- [ ] other case names/parties (e.g. HCZZ, Third Party)
      
## Potential future projects

- Refactor this as a React App?  Is it worth it?
- A similiar webpage for Summons
- App to help students calculate dates for civil litigation (with an explanation of the three(?) different ways of reckoning days.
