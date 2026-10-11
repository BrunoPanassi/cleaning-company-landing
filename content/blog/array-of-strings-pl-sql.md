---
title: 'Using an Array of strings in a query with Oracle PL/SQL '
description: 'A common and efficient way'
date: '2022-03-22'
type: 'Database'
---

<p class="bold-title">Oracle Function</p>
<p>In this case we will use a function created in Oracle PL/SQL that receives a string value and return as an array to your query:</p>
<div class="bold-title code-block">
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
   END
</div>
<br />
<p>You can see that the return is a type of 'ARRAY TABLE', this type can be created in this way:</p>
<div class="bold-title code-block">
CREATE TYPE "ARRAY_TABLE" as table
     of varchar2 (4210)
</div>
<br />
<p>So with this 'type' and 'function' created, you can use your query like this:</p>   
<div class="bold-title code-block">
SELECT * FROM TABLE_TO_SEARCH
   WHERE (upper(column_to_search) 
      in (SELECT * FROM TABLE(IN_LIST(upper(:stringParameter)))))
</div>
<br />
<p>Where the 'stringParameter' it's a value like:</p>
<br />
<p style="margin-left: 12px"> - "Value 1, Value 2, Value 3". </p>
<p class="lighter-title">The _stringParameter_ is written with ":" because in this case i used the _Dbeaver_ tool.</p>
<br />
<p>Sorry for the Queries shown above for not being indented and with the usual colors.
<br />I hope that this can help you like it helped me.</p>
