"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8618],{23163:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return u}});var n,i=a(87462),s=a(63366),o=(a(15007),a(64983)),p=a(91515),d=["components"],r={},c=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),l={_frontmatter:r},m=p.Z;function u(e){var t=e.components,a=(0,s.Z)(e,d);return(0,o.mdx)(m,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"getting-started-with-pdf-extract-api-nodejs"},"Getting Started with PDF Extract API (Node.js)"),(0,o.mdx)("p",null,"To get started using Adobe PDF Extract API, let's walk through a simple scenario - taking an input PDF document and running PDF Extract API against it. Once the PDF has been extracted, we'll parse the results and report on any major headers in the document. In this guide, we will walk you through the complete process for creating a program that will accomplish this task. "),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"To complete this guide, you will need:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")," - Node.js version 10.13.0 or higher is required. "),(0,o.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,o.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,o.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,o.mdx)("p",null,"1) To begin, open your browser to ",(0,o.mdx)("a",{parentName:"p",href:"https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api"},"https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/5530d/shot1.webp 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0c8fb/shot1.webp 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dd4a7/shot1.png 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0f09e/shot1.png 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,o.mdx)("p",null,'3) Change the "Choose language" setting to "Node.js". '),(0,o.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,o.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1208px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4bc5b466bddcb374a0c087627a3af936/5530d/shot2.webp 320w","/pdfservices-api-documentation/static/4bc5b466bddcb374a0c087627a3af936/0c8fb/shot2.webp 640w","/pdfservices-api-documentation/static/4bc5b466bddcb374a0c087627a3af936/a5bb4/shot2.webp 1208w"],sizes:"(max-width: 1208px) 100vw, 1208px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4bc5b466bddcb374a0c087627a3af936/dd4a7/shot2.png 320w","/pdfservices-api-documentation/static/4bc5b466bddcb374a0c087627a3af936/0f09e/shot2.png 640w","/pdfservices-api-documentation/static/4bc5b466bddcb374a0c087627a3af936/047c3/shot2.png 1208w"],sizes:"(max-width: 1208px) 100vw, 1208px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/4bc5b466bddcb374a0c087627a3af936/047c3/shot2.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"6) After your credentials are created, they are automatically downloaded:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"681px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/57295df61eef2118b9630dee63606d55/5530d/shot3.webp 320w","/pdfservices-api-documentation/static/57295df61eef2118b9630dee63606d55/0c8fb/shot3.webp 640w","/pdfservices-api-documentation/static/57295df61eef2118b9630dee63606d55/bea71/shot3.webp 681w"],sizes:"(max-width: 681px) 100vw, 681px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/57295df61eef2118b9630dee63606d55/dd4a7/shot3.png 320w","/pdfservices-api-documentation/static/57295df61eef2118b9630dee63606d55/0f09e/shot3.png 640w","/pdfservices-api-documentation/static/57295df61eef2118b9630dee63606d55/833a5/shot3.png 681w"],sizes:"(max-width: 681px) 100vw, 681px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/57295df61eef2118b9630dee63606d55/833a5/shot3.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,o.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-Node.jsSamples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"382px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/5530d/shot5.webp 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/3ca76/shot5.webp 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/dd4a7/shot5.png 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"2) We need two things from this download. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file found in the samples directory:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"621px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/5530d/shot6.webp 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/e4092/shot6.webp 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/dd4a7/shot6.png 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Note that that private key is ",(0,o.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,o.mdx)("p",null,"3) Take these two files and place them in a new directory. Remember that these credential files are important and should be stored safely."),(0,o.mdx)("p",null,"4) At the command line, change to the directory you created, and initialize a new Node.js project with ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm init -y")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/5530d/shot7.webp 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0c8fb/shot7.webp 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/84c6d/shot7.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/dd4a7/shot7.png 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0f09e/shot7.png 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"5) Install the Adobe PDF Services Node.js SDK by typing ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm install --save @adobe/pdfservices-node-sdk")," at the command line."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/5530d/shot8.webp 320w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/0c8fb/shot8.webp 640w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/84c6d/shot8.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/dd4a7/shot8.png 320w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/0f09e/shot8.png 640w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/a27c6/shot8.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/a27c6/shot8.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"6) Install a package to help us work with ZIP files. Type ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm install --save adm-zip"),"."),(0,o.mdx)("p",null,"At this point, we've installed the Node.js SDK for Adobe PDF Services API as a dependency for our project and have copied over our credentials files. "),(0,o.mdx)("p",null,"Our application will take a PDF, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe Extract API Sample.pdf")," (downloadable from ",(0,o.mdx)("a",{parentName:"p",href:"TBD"},"here"),") and extract it's contents. The results will be saved as a ZIP file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExtractTextInfoFromPDF.zip"),". We will then parse the results from the ZIP and print out the text of any ",(0,o.mdx)("inlineCode",{parentName:"p"},"H1")," headers found in the PDF."),(0,o.mdx)("p",null,"7) In your editor, open the directory where you previously copied the credentials. Create a new file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"extract.js"),"."),(0,o.mdx)("p",null,"Now you're ready to begin coding."),(0,o.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,o.mdx)("p",null,"1) We'll begin by including our required dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\nconst fs = require('fs');\nconst AdmZip = require('adm-zip');\n")),(0,o.mdx)("p",null,"The first line includes the Adobe PDF Services Node.js SDK. The second third include Node's ",(0,o.mdx)("inlineCode",{parentName:"p"},"filesystem")," package as well as the package that will work with the ZIP file returned from the API. "),(0,o.mdx)("p",null,"2) Now let's define our input and output:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const OUTPUT_ZIP = './ExtractTextInfoFromPDF.zip';\n\n//Remove if the output already exists.\nif(fs.existsSync(OUTPUT_ZIP)) fs.unlinkSync(OUTPUT_ZIP);\n\nconst INPUT_PDF = './Adobe Extract API Sample.pdf';\n")),(0,o.mdx)("p",null,"This defines what our output ZIP will be and optionally deletes it if it already exists. Then we define what PDF will be extracted. (You can download the source we used ",(0,o.mdx)("a",{parentName:"p",href:"./Adobe%20Extract%20API%20Sample.pdf"},"here"),".) In a real application, these values would be typically be dynamic. "),(0,o.mdx)("p",null,"3) Next, we setup the SDK to use our credentials."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile('pdfservices-api-credentials.json')\n        .build();\n\n// Create an ExecutionContext using credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n")),(0,o.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,o.mdx)("p",null,"4) Now, let's create the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// Create a new operation instance.\nconst extractPDFOperation = PDFServicesSdk.ExtractPDF.Operation.createNew(),\n    input = PDFServicesSdk.FileRef.createFromLocalFile(\n        INPUT_PDF, \n        PDFServicesSdk.ExtractPDF.SupportedSourceFormat.pdf\n    );\n\n// Build extractPDF options\nconst options = new PDFServicesSdk.ExtractPDF.options.ExtractPdfOptions.Builder()\n        .addElementsToExtract(PDFServicesSdk.ExtractPDF.options.ExtractElementType.TEXT).build()\n\nextractPDFOperation.setInput(input);\nextractPDFOperation.setOptions(options);\n")),(0,o.mdx)("p",null,"This set of code defines what we're doing (an Extract operation), points to our local file and specifies the input is a PDF, and then defines options for the Extract call. PDF Extract API has a few different options, but in this example, we're simply asking for the most basic of extractions, the textual content of the document. "),(0,o.mdx)("p",null,"5) The next code block executes the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// Execute the operation\nextractPDFOperation.execute(executionContext)\n    .then(result => result.saveAsFile(OUTPUT_ZIP))\n    .then(() => {\n        console.log('Successfully extracted information from PDF.');\n    })\n    .catch(err => console.log(err));\n")),(0,o.mdx)("p",null,"This code runs the Extraction process and then stores the result zip to the file system. "),(0,o.mdx)("p",null,"6) In this block, we read in the ZIP file, extract the JSON result file, and parse it:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"let zip = new AdmZip(OUTPUT_ZIP);\nlet jsondata = zip.readAsText('structuredData.json');\nlet data = JSON.parse(jsondata);\n")),(0,o.mdx)("p",null,"7) Finally we can loop over the result and print out any found element that is an ",(0,o.mdx)("inlineCode",{parentName:"p"},"H1"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"data.elements.forEach(element => {\n    if(element.Path.endsWith('/H1')) {\n        console.log(element.Text);\n    }\n});\n")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1211px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/291a90cb73e9e94b8848802bdc169792/5530d/shot9.webp 320w","/pdfservices-api-documentation/static/291a90cb73e9e94b8848802bdc169792/0c8fb/shot9.webp 640w","/pdfservices-api-documentation/static/291a90cb73e9e94b8848802bdc169792/08e5b/shot9.webp 1211w"],sizes:"(max-width: 1211px) 100vw, 1211px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/291a90cb73e9e94b8848802bdc169792/dd4a7/shot9.png 320w","/pdfservices-api-documentation/static/291a90cb73e9e94b8848802bdc169792/0f09e/shot9.png 640w","/pdfservices-api-documentation/static/291a90cb73e9e94b8848802bdc169792/f77a5/shot9.png 1211w"],sizes:"(max-width: 1211px) 100vw, 1211px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/291a90cb73e9e94b8848802bdc169792/f77a5/shot9.png",alt:"Example running at the command line",title:"Example running at the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Here's the complete application (",(0,o.mdx)("inlineCode",{parentName:"p"},"extract.js"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\nconst fs = require('fs');\nconst AdmZip = require('adm-zip');\n\nconst OUTPUT_ZIP = './ExtractTextInfoFromPDF.zip';\n\n//Remove if the output already exists.\nif(fs.existsSync(OUTPUT_ZIP)) fs.unlinkSync(OUTPUT_ZIP);\n\nconst INPUT_PDF = './Adobe Extract API Sample.pdf';\n\nconst credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile('pdfservices-api-credentials.json')\n        .build();\n\n// Create an ExecutionContext using credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n\n// Create a new operation instance.\nconst extractPDFOperation = PDFServicesSdk.ExtractPDF.Operation.createNew(),\n    input = PDFServicesSdk.FileRef.createFromLocalFile(\n        INPUT_PDF, \n        PDFServicesSdk.ExtractPDF.SupportedSourceFormat.pdf\n    );\n\n// Build extractPDF options\nconst options = new PDFServicesSdk.ExtractPDF.options.ExtractPdfOptions.Builder()\n        .addElementsToExtract(PDFServicesSdk.ExtractPDF.options.ExtractElementType.TEXT).build()\n\n\nextractPDFOperation.setInput(input);\nextractPDFOperation.setOptions(options);\n\n// Execute the operation\nextractPDFOperation.execute(executionContext)\n    .then(result => result.saveAsFile(OUTPUT_ZIP))\n    .then(() => {\n        console.log('Successfully extracted information from PDF. Printing H1 Headers:\\n');\n        let zip = new AdmZip(OUTPUT_ZIP);\n        let jsondata = zip.readAsText('structuredData.json');\n        let data = JSON.parse(jsondata);\n        data.elements.forEach(element => {\n            if(element.Path.endsWith('/H1')) {\n                console.log(element.Text);\n            }\n        });\n\n    })\n    .catch(err => console.log(err));\n")),(0,o.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,o.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/pdf-services-api/"},"review the documentation")," for many other examples and reach out on our ",(0,o.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-extract-api-quickstarts-nodejs-index-md-b3fb37a0398ccb50bd9a.js.map