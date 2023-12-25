## AIM

1. Intended users: qualified HK lawyers
2. Flow:
   - User selects the required form.
   - A page is displayed with text input boxes where required.
   - User presses button at the bottom.  2 new tab opens, showing:
      - Printable form
      - Backcksheet
     
## SCHEDULE

- [ ] Affirmation
- [ ] Index page
- [ ] Summons
   
## PLAN FOR AFFIRMATION

- [x] Use [pandocs](https://github.com/jgm/pandoc) to generate an HTML template for (say) an affirmation
- [x] Make all the underlined parts text input boxes.
- [x] Add a "printable version" button at the end of the document.
- [ ] Add functionality for users to add more parties (multiple Ps, multiple Ds)
- [ ] Output an HTML page with appropriate content
- [ ] Backsheet

## POTENTIAL FURTHER FEATURES

- reminder about jurat rule
- customise so that users can enter special case names/parties (e.g. HCZZ, Third Party)
