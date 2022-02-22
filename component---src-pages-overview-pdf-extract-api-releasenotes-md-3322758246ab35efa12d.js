"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5794],{56822:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return g}});var n,r=t(87462),d=t(63366),l=(t(15007),t(64983)),m=t(99536),i=["components"],o={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),s={_frontmatter:o},x=m.Z;function g(e){var a=e.components,t=(0,d.Z)(e,i);return(0,l.mdx)(x,(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"release-notes"},"Release Notes"),(0,l.mdx)("p",null,"This document describes the change history across releases for supported\nversions. For details regarding versioning and support policies, see\n",(0,l.mdx)("a",{parentName:"p",href:"../pdf-services-api/policies.md"},"Version - Support policy"),"."),(0,l.mdx)("h2",{id:"supported-versions"},"Supported versions"),(0,l.mdx)("p",null,"This document as well as the URLs on Adobe's website and other\ndocumentation link to the latest product version."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note"),": Links to repository assets (e.g. GIT, Maven, etc.) direct to\nthe top level directory. To download assets that match the\ndocumentation, navigate to the correct version. For example, When using\nthe 1.0.0 Java documentation, you can find the 1.0.0 samples in the GIT\nrepo as follows:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Go to the ",(0,l.mdx)("a",{parentName:"li",href:"https://www.adobe.com/go/pdftoolsapi_java_samples"},"GIT repo"),"."),(0,l.mdx)("li",{parentName:"ol"},"Select ",(0,l.mdx)("em",{parentName:"li"},"Releases"),"."),(0,l.mdx)("li",{parentName:"ol"},"Select and download the needed release.")),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"927px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.06249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/67f1ec4d2505ab0e8bcf7287d450673f/cb523/prevrelease.webp 320w","/pdfservices-api-documentation/static/67f1ec4d2505ab0e8bcf7287d450673f/797b9/prevrelease.webp 640w","/pdfservices-api-documentation/static/67f1ec4d2505ab0e8bcf7287d450673f/44de1/prevrelease.webp 927w"],sizes:"(max-width: 927px) 100vw, 927px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/67f1ec4d2505ab0e8bcf7287d450673f/72799/prevrelease.png 320w","/pdfservices-api-documentation/static/67f1ec4d2505ab0e8bcf7287d450673f/6af66/prevrelease.png 640w","/pdfservices-api-documentation/static/67f1ec4d2505ab0e8bcf7287d450673f/e4374/prevrelease.png 927w"],sizes:"(max-width: 927px) 100vw, 927px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/67f1ec4d2505ab0e8bcf7287d450673f/e4374/prevrelease.png",alt:"image",title:"image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h2",{id:"migration-guide-to-pdf-services-sdk"},"Migration Guide to PDF Services SDK"),(0,l.mdx)("p",null,"Refer to the following table for migrating to PDF Services SDK version\n2.1.0, you can also refer our Samples(\n",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/pdftoolsapi_java_samples"},"Java"),", ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/pdftoolsapi_node_sample"},"Node\nJS"),",\n",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/pdftoolsapi_net_samples"},".NET"),"). for the\nlatest release."),(0,l.mdx)(p,{slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The 1.X.X versions of PDF Tools SDK will be reaching End of Life in\nMay 2022. Once a version reaches its end of life, functionality may be\ndeprecated and stop working. Please upgrade to use our latest SDK\nversion."),(0,l.mdx)("h3",{id:"java-changes"},"Java changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"artifactId")," changed from ",(0,l.mdx)("inlineCode",{parentName:"li"},"pdftools-sdk")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"pdfservices-sdk")),(0,l.mdx)("li",{parentName:"ul"},"Replace the ",(0,l.mdx)("inlineCode",{parentName:"li"},"<properties>")," tag and SDK ",(0,l.mdx)("inlineCode",{parentName:"li"},"<dependency>")," tag in your project’s ",(0,l.mdx)("inlineCode",{parentName:"li"},"pom.xml")," file with the following:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"<properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n    <pdfservices.sdk.version>2.1.0</pdfservices.sdk.version>\n    <pdfservices.sdk.samples.version>2.1.0</pdfservices.sdk.samples.version>\n</properties>\n\n<dependency>\n    <groupId>com.adobe.documentservices</groupId>\n    <artifactId>pdfservices-sdk</artifactId>\n    <version>${pdfservices.sdk.version}</version>\n</dependency>\n")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Update import statements as per new Package structure. For e.g.")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"import com.adobe.pdfservices.operation.ExecutionContext; \n")),(0,l.mdx)("h3",{id:"node-js-changes"},"Node JS changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"NPM package name changed from ",(0,l.mdx)("inlineCode",{parentName:"li"},"@adobe/documentservices-pdftools-node-sdk")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"@adobe/pdfservices-node-sdk")),(0,l.mdx)("li",{parentName:"ul"},"Update the latest SDK dependency in package.json file of your project")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'"@adobe/pdfservices-node-sdk": "2.1.0"\n')),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Require the ",(0,l.mdx)("inlineCode",{parentName:"li"},"@adobe/pdfservices-node-sdk")," in the Sample file to access the SDK interface")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk'); \n")),(0,l.mdx)("p",null,"For HTML to PDF Conversions, the PageLayout object is moved inside html object. To access the PageLayout interface use the following code:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"const pageLayout = new PDFServicesSdk.CreatePDF.options.html.PageLayout(); \n")),(0,l.mdx)("h3",{id:"net-changes"},".NET changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Nuget package name changed from ",(0,l.mdx)("inlineCode",{parentName:"li"},"Adobe.DocumentServices.PDFTools")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"Adobe.PDFServicesSDK")),(0,l.mdx)("li",{parentName:"ul"},"Update the SDK dependency in your project’s .csproj file with the following:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'<ItemGroup>\n    <PackageReference Include="log4net" Version="2.0.12" />\n    <PackageReference Include="Adobe.PDFServicesSDK" Version="2.1.0" />\n</ItemGroup> \n')),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Update the namespaces accordingly in your .cs file as per the new dependency: ")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"using Adobe.PDFServicesSDK;\n")),(0,l.mdx)("h2",{id:"documentation-library"},"Documentation library"),(0,l.mdx)("p",null,"Refer to the following for links to supported product documentation."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Item"),(0,l.mdx)("th",{parentName:"tr",align:null},"Public doc"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"2.1.0"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://opensource.adobe.com/pdftools-sdk-docs/release/2.1.0/"},"Web page(2.1.0 docs)"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://opensource.adobe.com/pdftools-sdk-docs/release/2.0.0/"},"Web page(2.0.0 docs)"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"1.3.0"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://opensource.adobe.com/pdftools-sdk-docs/release/1.3.0/"},"Web page(1.3.0 docs)"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"1.2.0"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://opensource.adobe.com/pdftools-sdk-docs/release/1.2.0/"},"Web page(1.2.0 docs)"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"1.1.0"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://opensource.adobe.com/pdftools-sdk-docs/release/1.1.0/"},"Web page(1.1.0 docs)"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"1.0.0"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://opensource.adobe.com/pdftools-sdk-docs/release/1.0.0/"},"Web page(1.0.0 docs)"))))),(0,l.mdx)("h2",{id:"change-types"},"Change types"),(0,l.mdx)("p",null,"Change types include the following:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"New"),": Features or implementation changes added in the current\nrelease."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Changed"),": Modified code that changes a feature or implementation\ndetail."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Security"),": A patch or bug fixed released in an out-of-band patch."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Deprecated"),": Existing functionality for which support is ending\n(or ended).")),(0,l.mdx)(p,{slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The new release is backward compatible with the previous release.\nUpgrading to the latest SDK should not break existing applications."),(0,l.mdx)("h2",{id:"change-history"},"Change history"),(0,l.mdx)("h3",{id:"extract-pdf-server-side-release-22-february-2022-server-side-release"},"Extract PDF Server Side Release (22 February, 2022; server side release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},'Adding support for identification of scanned pages with "is_scanned" field in Extract output.')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Bug fixes and stability improvements.")))),(0,l.mdx)("h3",{id:"221-january-2022-patch-release"},"2.2.1 (January, 2022; patch release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"Node JS"),(0,l.mdx)("td",{parentName:"tr",align:null},"Enhanced Document Generation interface to support Json Object and Json array as Fragments data.")))),(0,l.mdx)("h3",{id:"220-january-2022-minor-release"},"2.2.0 (January, 2022; minor release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Adding support for ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/fragments.md#"},"fragments")," feature.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"Java"),(0,l.mdx)("td",{parentName:"tr",align:null},"Java SDK is enabled to connect to Internet through Proxy where proxy server settings can be set via client config.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDF Extract API bug fixes and stability release.")))),(0,l.mdx)("h3",{id:"adobe-document-generation-server-side-release-10-january-2022-server-side-release"},"Adobe Document Generation Server Side Release (10 January, 2022; server side release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Adding support for ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/fragments.md#"},"fragments")," feature.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Adding support to add ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/templatetags.md#images"},"images")," (only base64 encoded image data was supported initially) through publicly accessible URLs.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Adding support for primitive type ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/templatetags.md#lists"},"list"))))),(0,l.mdx)("h3",{id:"adobe-document-generation-server-side-release-14-december-2021-server-side-release"},"Adobe Document Generation Server Side Release (14 December, 2021; server side release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Adding support for additional tags (<strong",">"," and <em",">",") in ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/stylingformattingtags.md#apply-styling-and-formatting"},"styling and formatting")," feature.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/dynamictableconstructs.md"},"dynamic table constructs"),".")))),(0,l.mdx)("h3",{id:"extract-pdf-server-side-release-15-november-2021-server-side-release"},"Extract PDF Server Side Release (15 November, 2021; server side release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"The option to include styling information is generally available.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Identification of scanned content is now performed at the page level rather than per document.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Bug fixes and stability improvements.")))),(0,l.mdx)("h3",{id:"adobe-document-generation-server-side-release-20-october-2021-server-side-release"},"Adobe Document Generation Server Side Release (20 October, 2021; server side release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"HTML ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/stylingformattingtags.md#apply-styling-and-formatting"},"styling and formatting")," support in json data.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for ",(0,l.mdx)("a",{parentName:"td",href:"../document-generation-api/templatetags.md#dynamically-expand-table-rows-or-columns"},"horizontal tables"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for SVG images.")))),(0,l.mdx)("h3",{id:"extract-pdf-server-side-release-29-september-2021-server-side-release"},"Extract PDF Server Side Release (29 September, 2021; server side release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for more descriptive error messages and PDF Extract API bug fixes.")))),(0,l.mdx)("h3",{id:"210-september-2021-minor-release"},"2.1.0 (September, 2021; minor release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},".NET"),(0,l.mdx)("td",{parentName:"tr",align:null},"Extract operation is now available in .NET SDK as part of ",(0,l.mdx)("strong",{parentName:"td"},"Adobe.PDFServicesSDK"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"Java, Node JS, .NET"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for fetching the properties of a PDF file - metadata including page count, PDF version, file size, compliance levels, font info, permissions and more.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"Java, Node JS, .NET"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for returning the list of images besides returning ZIP of all image files.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"Java, Node JS, .NET"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for converting the content hosted on a URL to PDF files.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"Java, Node JS, .NET"),(0,l.mdx)("td",{parentName:"tr",align:null},"Support for converting an HTML file containing inline CSS to PDF files.")))),(0,l.mdx)("h3",{id:"extract-pdf-server-side-release-26-aug-2021-server-side-release"},"Extract PDF Server Side Release (26 Aug, 2021; server side release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDF Extract API bug fixes and stability release")))),(0,l.mdx)("h3",{id:"200-may-2021-major-release"},"2.0.0 (May, 2021; major release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Extract operation released as part of ",(0,l.mdx)("strong",{parentName:"td"},"pdfservices-sdk"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"Java"),(0,l.mdx)("td",{parentName:"tr",align:null},"artifactId changed from pdftools-sdk to ",(0,l.mdx)("strong",{parentName:"td"},"pdfservices-sdk"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"Node JS"),(0,l.mdx)("td",{parentName:"tr",align:null},"NPM package name changed from @adobe/documentservices-pdftools-node-sdk to ",(0,l.mdx)("strong",{parentName:"td"},"@adobe/pdfservices-node-sdk"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"Node JS"),(0,l.mdx)("td",{parentName:"tr",align:null},"For HTML to PDF Conversions, the PageLayout object interface is moved inside html object.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},".NET"),(0,l.mdx)("td",{parentName:"tr",align:null},"Nuget package name changed from Adobe.DocumentServices.PDFTools to ",(0,l.mdx)("strong",{parentName:"td"},"Adobe.PDFServicesSDK"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"Python"),(0,l.mdx)("td",{parentName:"tr",align:null},"Python SDK “pdfservices-sdk” v1.0 is released for ML Services which consists of ExtractPDFOperation currently.")))),(0,l.mdx)("h3",{id:"130-march-2021-minor-release"},"1.3.0 (March, 2021; minor release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a feature to the create PDF operation to specify the document language of input file.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added Document Merge Operation that merges a Word based document template with the input JSON data to generate the output document in either Word or PDF format.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added support to get the developer error codes in exceptions.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a feature to the compress PDF operation to reduce the file size based on compression level.")))),(0,l.mdx)("h3",{id:"120-september-2020-minor-release"},"1.2.0 (September, 2020; minor release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added more features to the password-protect operation to secure a PDF with an owner password and to enable users to restrict features like printing, editing and copying.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added an operation for removing password protection from a PDF.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a split PDF operation that splits a PDF document into multiple smaller documents by simply specifying either the number of files, pages per file, or page ranges.")))),(0,l.mdx)("h3",{id:"110-june-2020-minor-release"},"1.1.0 (June, 2020; minor release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a password-protect operation to securely open a PDF.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added an operation for inserting a PDF file into an existing PDF.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a replace file operation which replaces a PDF with another.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added an operation for deleting pages from a PDF.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a rotate page(s) operation for rotating one or more pages in a PDF.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added reorder page(s) operation to support rearranging page(s) in a PDF.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a compress PDF operation to reduce a PDF file size.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added a linearize operation to convert a PDF file into a web optimized PDF file for incremental access in network environments.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Changed the combine file limit from 12 to 20.")))),(0,l.mdx)("h3",{id:"100-march-2020-first-major-release"},"1.0.0 (March, 2020; First major release)"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Change"),(0,l.mdx)("th",{parentName:"tr",align:null},"Language"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added create PDF operation to create PDF from Office formats, image formats and HTML (doc, docx, ppt, pptx, xls, xlsx, txt, rtf, bmp, gif, tiff, jpeg, png).")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added export PDF operation to export PDF to Office formats and image formats (doc, docx, pptx, rtf, xlsx, jpeg, png).")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added combine PDF files operation.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"New"),(0,l.mdx)("td",{parentName:"tr",align:null},"All"),(0,l.mdx)("td",{parentName:"tr",align:null},"Added an OCR operation to convert PDF files into a searchable PDF.")))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-extract-api-releasenotes-md-3322758246ab35efa12d.js.map