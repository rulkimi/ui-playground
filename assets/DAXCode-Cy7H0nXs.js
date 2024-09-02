import{P as u}from"./PageLayout-RPVzVfeT.js";import{_ as o}from"./Tooltip.vue_vue_type_style_index_0_scoped_442f00af_lang-BsmlTOmy.js";import{r as n,o as r,c as d,w as s,a as t,d as e,b as a,u as l}from"./index-DbHrvn2c.js";const p={class:"flex flex-col gap-4"},f=e("p",null,[t("DAX provides powerful functions for analyzing and manipulating data within tables. Here’s an overview of the "),e("span",{class:"font-mono"},"PATH"),t(" and "),e("span",{class:"font-mono"},"EARLIER"),t(" functions:")],-1),m=e("h3",{class:"text-lg font-bold sublink"},[t("Using the "),e("span",{class:"font-mono"},"PATH"),t(" Function")],-1),h=e("p",null,[t("The "),e("span",{class:"font-mono"},"PATH"),t(" function generates a delimited text string with the identifiers of all the parents of the current identifier. It starts with the oldest parent and continues up to the current identifier.")],-1),_=e("p",null,"Returns the current value of the specified column in an outer evaluation pass of the mentioned column.",-1),E=e("h3",{class:"text-lg font-bold sublink"},[t("Using the "),e("span",{class:"font-mono"},"EARLIER"),t(" Function")],-1),g=e("p",null,[t("The "),e("span",{class:"font-mono"},"EARLIER"),t(" function allows you to retrieve the value of a column from an outer evaluation pass. This is especially useful for nested calculations where you need to use a certain value as input and perform calculations based on that input.")],-1),R=e("p",null,"The next evaluation level out is represented by 1; two levels out is represented by 2 and so on. When omitted, the default value is 1.",-1),T=e("p",null,"Steps:",-1),y=e("ol",{class:"ml-3"},[e("li",{class:"list-decimal"},[e("span",{class:"font-mono"},"EARLIER"),t(" gets the value of "),e("span",{class:"font-mono"},"TotalSubcategorySales"),t(" for the current row.")]),e("li",{class:"list-decimal"},[e("span",{class:"font-mono"},"FILTER"),t(" returns rows where "),e("span",{class:"font-mono"},"TotalSubcategorySales"),t(" is larger than the current "),e("span",{class:"font-mono"},"EARLIER"),t(" value.")]),e("li",{class:"list-decimal"},[e("span",{class:"font-mono"},"COUNTROWS"),t(" counts the rows and assigns that value plus 1 to the new calculated column.")]),e("li",{class:"list-decimal"},"This process repeats until the end of the table.")],-1),P={__name:"DAXCode",setup(b){const c=n(`PATH(<ID_columnName>, <parent_columnName>)

// Example usage:
= PATH(Employee[EmployeeKey], Employee[ParentEmployeeKey])
`),i=n(`EARLIER(<column>, <number>)

// Example usage:
= COUNTROWS(FILTER(ProductSubcategory, EARLIER(ProductSubcategory[TotalSubcategorySales]) < ProductSubcategory[TotalSubcategorySales])) + 1
`);return(v,A)=>(r(),d(u,null,{subtitle:s(()=>[t(" Understanding DAX Functions: PATH and EARLIER ")]),content:s(()=>[e("div",p,[f,m,h,a(l(o),{"script-code":c.value,"file-name":"PATH Function"},null,8,["script-code"]),_,E,g,a(l(o),{"script-code":i.value,"file-name":"EARLIER Function"},null,8,["script-code"]),R,T,y])]),_:1}))}};export{P as default};
