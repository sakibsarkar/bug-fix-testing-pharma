# Project Issue Resolutions

## Functions as React Child

**Issue:** Spinner component was incorrectly called as {Spinner}.  
**Solution:** Replace {Spinner} with {<Spinner/>}.

## Navbar
**Time:** 2Min  
**Issue:** Arrow function missing and empty ID for scroll.  
**Solution:** Pass ("#class", "#id") as arguments for pageScroll().

## Footer

**Time:** 30Sec  
**Issue:** Similar issues as Navbar.  
**Solution:** Pass ("#class", "#id") as arguments for pageScroll().

## Verify Labtest

**Time:** 10Min  
**Issue:** Validation missing.  
**Solution:** Added functionality to match order numbers with database numbers and implemented state management for errors and success.

## Contact Form

**Time:** 1Min   
**Issue:** Hidden input field with default value lacks onchange event and form validation.  
**Solution:** Either add an onchange event or replace the value with defaultValue. Reset the form after submission and display success notification.

## Operate Cards

**Time:** 15sec  
**Issue:** React does not allow srcset.  
**Solution:** Solve this by camel casing and replacing srcset with srcSet.

## Favicon Size issue

**Time:** 1Min  
**Issue:** invalid favicon size   
**Solution:** fix the correct favicon size.
