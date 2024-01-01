## AIM

1. Intended users: HK lawyers; law teachers students.
2. Use case: users can rapidly prototype an affirmation for taking instructions/generating mooting materials.
3. Flow:
   - User fills in all the required text boxes.
   - User presses button at the bottom.  2 new tab opens, showing:
      - A printable affirmation
      - Backcksheet
     
## SCHEDULE

- [ ] Complete affirmation
- [ ] Add instructions pop-up
- [ ] Add landing page
   
## PLAN FOR AFFIRMATION

- [x] Use [pandocs](https://github.com/jgm/pandoc) to generate an HTML template for affirmation.
- [x] Make all the underlined parts text input boxes.
- [x] Add a "printable version" button at the end of the document.
- [x] Deponent name automatically appears in appropriate places.
- [x] Case number automatically appears on the top right hand corner.
- [x] Add functionality for users to add more parties (multiple Ps, multiple Ds)
- [x] Add box that permits user to say whether it is the 1st, 2nd or later affirmation.Set the Affirmation date to a default of today.
- [ ] Generatee the Affirmation number, abbreviation of deponent, party on behalf of the affirmation, and the date of affirmation on the top right conrner.
- [ ] Output an HTML page with appropriate content
- [ ] Output backsheet
- [ ] Properly CSS and make responsive

## KNOWN BUGS

## POTENTIAL FURTHER FEATURES

- [ ] reminder about jurat rule
- [ ] extend to cover summons as well
- [ ] customise so that users can enter special case names/parties (e.g. HCZZ, Third Party)
      
## FUTURE PROJECTS

- Refactor this as a React App?  Is it worth it?
- App to help students calculate dates for civil litigation (with an explanation of the three(?) different ways of reckoning days.
