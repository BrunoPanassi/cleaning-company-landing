---
title: 'Using an Array of strings in a query with Oracle PL/SQL '
description: 'A common and efficient way'
date: '2022-03-22'
---

## Oracle Function
In this case we will use a function created in Oracle PL/SQL that receives a string value and return as an array to your query:

```
CREATE OR REPLACE FUNCTION string_to_list (stringParameter IN VARCHAR2,separator IN VARCHAR2 DEFAULT ',')
   RETURN ARRAY_TABLE
AS
   stringValue   	LONG DEFAULT stringParameter || separator;
   dataToReturn 	ARRAY_TABLE := ARRAY_TABLE ();
   n          		NUMBER;
BEGIN
   LOOP
      EXIT WHEN stringValue IS NULL;
      n                       			:= INSTR (stringValue, separator);
      dataToReturn.EXTEND;
      dataToReturn (dataToReturn.COUNT) := LTRIM (RTRIM (SUBSTR (stringValue, 1, n - 1)));
      stringValue                		:= SUBSTR (stringValue, n + 1);
   EN
```
You can see that the return is a type of _ARRAY TABLE_, this type can be created in this way:

```
CREATE TYPE "ARRAY_TABLE" as table
     of varchar2 (4210)
```
So with this _type_ and _function_ created, you can use your query like this:

```
SELECT * FROM TABLE_TO_SEARCH
WHERE (upper(column_to_search) in (SELECT * FROM TABLE(IN_LIST(upper(:stringParameter)))))
```
Where the _stringParameter_ it's a value like: 
- "Value 1, Value 2, Value 3". 

> The _stringParameter_ is written with ":" because in this case i used the _Dbeaver_ tool.

Sorry for the Queries shown above for not being indented and with the usual colors.
I hope that this can help you like it helped me.
