## AIM

1. Intended users: qualified HK lawyers
2. Flow:
   - User selects the required form.
   - A page is displayed with text input boxes where required.
   - User presses button at the bottom.  New tab opens with a printable form.

## PLAN

1. Use [pandocs](https://github.com/jgm/pandoc) to generate an HTML template for (say) an affirmation
2. Make all the underlined parts text input boxes.
3. Add a "print" button at the end of the document.
4. Opens a new tab, which displays an HTML page with all the text in appropriate places.  
