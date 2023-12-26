## AIM

1. Intended users: HK lawyers; law teachers students.
2. Use case: users can rapidly prototype an affirmation for taking instructions/generating mooting materials.
3. Flow:
   - User fills in all the required text boxes.
   - User presses button at the bottom.  2 new tab opens, showing:
      - A printable affirmation
      - Backcksheet
     
## SCHEDULE

- [ ] Affirmation
   
## PLAN FOR AFFIRMATION

- [x] Use [pandocs](https://github.com/jgm/pandoc) to generate an HTML template for affirmation.
- [x] Make all the underlined parts text input boxes.
- [x] Add a "printable version" button at the end of the document.
- [x] Deponent name automatically appears in appropriate places.
- [x] Case number automatically appears on the top right hand corner.
- [ ] Add box that permits user to say whether it is the 1st, 2nd or later affirmation.  Automatically use it to generate the Affirmation number on the top right conrner.
- [ ] Take user input as to date and the side the deponent represents to the top right corner.
- [ ] Add functionality for users to add more parties (multiple Ps, multiple Ds)
- [ ] Output an HTML page with appropriate content
- [ ] Output backsheet

## KNOWN BUGS

- [ ] The paragraph number of the conclusion should update once paragraphs are added.

## POTENTIAL FURTHER FEATURES

- [ ] reminder about jurat rule
- [ ] extend to cover summons as well
- [ ] customise so that users can enter special case names/parties (e.g. HCZZ, Third Party)
