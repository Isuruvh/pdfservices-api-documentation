"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9575],{98031:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return m}});var i,r=t(87462),a=t(63366),o=(t(15007),t(64983)),s=t(91515),c=["components"],l={},p=(i="CodeBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),d={_frontmatter:l},u=s.Z;function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.mdx)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"linearize-pdfs"},"Linearize PDFs"),(0,o.mdx)("p",null,"Optimize PDFs for quick viewing on the web, especially for mobile clients. Linearization allows your end users to view large PDF documents incrementally so that they can view pages much faster in lower bandwidth conditions."),(0,o.mdx)("h2",{id:"rest-api"},"Rest API"),(0,o.mdx)("p",null,"See our public API Reference for ",(0,o.mdx)("a",{parentName:"p",href:"../../../apis/#tag/Linearize-PDF"},"Linearize PDF")),(0,o.mdx)("h2",{id:"linearize-pdf"},"Linearize PDF"),(0,o.mdx)("p",null,"Linearizing a PDF creates a web-optimized PDF file which supports\nincremental access in network environments."),(0,o.mdx)("p",null,"Please refer the ",(0,o.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,o.mdx)(p,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.linearizepdf.LinearizePDF\n \n     public class LinearizePDF {\n       // Initialize the logger.\n       private static final Logger LOGGER = LoggerFactory.getLogger(LinearizePDF.class);\n    \n       public static void main(String[] args) {\n    \n           try {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                       .fromFile("pdfservices-api-credentials.json")\n                       .build();\n    \n               // Create an ExecutionContext using credentials and create a new operation instance.\n               ExecutionContext executionContext = ExecutionContext.create(credentials);\n               LinearizePDFOperation linearizePDFOperation = LinearizePDFOperation.createNew();\n    \n               // Set operation input from a source file.\n               FileRef source = FileRef.createFromLocalFile("src/main/resources/linearizePDFInput.pdf");\n               linearizePDFOperation.setInput(source);\n    \n               // Execute the operation\n               FileRef result = linearizePDFOperation.execute(executionContext);\n    \n               // Save the result at the specified location\n               result.saveAs("output/linearizePDFOutput.pdf");\n    \n           } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n               LOGGER.error("Exception encountered while executing operation", ex);\n           }\n       }\n     }\n')),(0,o.mdx)("h4",{id:"net"},".NET"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd LinearizePDF/\n// dotnet run LinearizePDF.csproj\n\n namespace LinearizePDF\n {\n   class Program\n   {\n       private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n       static void Main()\n       {\n           //Configure the logging\n           ConfigureLogging();\n           try\n           {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                               .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                               .Build();\n\n               // Create an ExecutionContext using credentials and create a new operation instance.\n               ExecutionContext executionContext = ExecutionContext.Create(credentials);\n               LinearizePDFOperation linearizePDFOperation = LinearizePDFOperation.CreateNew();\n\n               // Set operation input from a source file.\n               FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"linearizePDFInput.pdf");\n               linearizePDFOperation.SetInput(sourceFileRef);\n\n               // Execute the operation.\n               FileRef result = linearizePDFOperation.Execute(executionContext);\n\n               // Save the result to the specified location.\n               result.SaveAs(Directory.GetCurrentDirectory() + "/output/linearizePDFOutput.pdf");\n           }\n           catch (ServiceUsageException ex)\n           {\n               log.Error("Exception encountered while executing operation", ex);\n           }\n           // Catch more errors here . . .\n       }\n\n       static void ConfigureLogging()\n       {\n           ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n           XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n       }\n   }\n }\n')),(0,o.mdx)("h4",{id:"node-js"},"Node JS"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/linearizepdf/linearize-pdf.js\n\n   const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n  \n   try {\n     // Initial setup, create credentials instance.\n     const credentials =  PDFServicesSdk.Credentials\n         .serviceAccountCredentialsBuilder()\n         .fromFile(\"pdfservices-api-credentials.json\")\n         .build();\n  \n     // Create an ExecutionContext using credentials and create a new operation instance.\n     const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n         linearizePDF = PDFServicesSdk.LinearizePDF,\n         linearizePDFOperation = linearizePDF.Operation.createNew();\n  \n     // Set operation input from a source file.\n     const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/linearizePDFInput.pdf');\n     linearizePDFOperation.setInput(input);\n  \n     // Execute the operation and Save the result to the specified location.\n     linearizePDFOperation.execute(executionContext)\n         .then(result => result.saveAsFile('output/linearizePDFOutput.pdf'))\n         .catch(err => {\n             if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                 || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                 console.log('Exception encountered while executing operation', err);\n             } else {\n                 console.log('Exception encountered while executing operation', err);\n             }\n         });\n   } catch (err) {\n     console.log('Exception encountered while executing operation', err);\n   }\n")),(0,o.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Linearize-PDF\n\ncurl --location --request POST 'https://pdf-services.adobe.io/operation/linearizepdf' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assetID\": \"urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718\"\n}'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-linearizePDF\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-linearize-pdf-md-59617d595c4e3cb07b8b.js.map