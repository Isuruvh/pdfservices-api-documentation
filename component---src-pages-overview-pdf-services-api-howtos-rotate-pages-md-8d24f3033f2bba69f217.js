"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1016],{96802:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return u}});var a,o=t(87462),r=t(63366),i=(t(15007),t(64983)),s=t(91515),g=["components"],c={},d=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:c},l=s.Z;function u(e){var n=e.components,t=(0,r.Z)(e,g);return(0,i.mdx)(l,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"rotate-pages"},"Rotate Pages"),(0,i.mdx)("p",null,"Rotate a page in an existing document."),(0,i.mdx)("h2",{id:"rest-api"},"Rest API"),(0,i.mdx)("p",null,"See our public API Reference for ",(0,i.mdx)("a",{parentName:"p",href:"../../../apis/#tag/Page-Manipulation"},"Rotate Pages.")),(0,i.mdx)("h2",{id:"rotate-pages-in-pdf"},"Rotate Pages in PDF"),(0,i.mdx)("p",null,"The rotate pages operation selectively rotates pages in PDF file. For\nexample, you can change portrait view to landscape view."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(d,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.rotatepages.RotatePDFPages\n \n  public class RotatePDFPages {\n \n    // Initialize the logger.\n    private static final Logger LOGGER = LoggerFactory.getLogger(RotatePDFPages.class);\n \n    public static void main(String[] args) {\n        try {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n \n            // Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n            RotatePagesOperation rotatePagesOperation = RotatePagesOperation.createNew();\n \n            // Set operation input from a source file.\n            FileRef source = FileRef.createFromLocalFile("src/main/resources/rotatePagesInput.pdf");\n            rotatePagesOperation.setInput(source);\n \n            // Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of\n            // the input PDF file.\n            PageRanges firstPageRange = getFirstPageRangeForRotation();\n            rotatePagesOperation.setAngleToRotatePagesBy(Angle._90, firstPageRange);\n \n            // Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of\n            // the input PDF file.\n            PageRanges secondPageRange = getSecondPageRangeForRotation();\n            rotatePagesOperation.setAngleToRotatePagesBy(Angle._180, secondPageRange);\n \n            // Execute the operation.\n            FileRef result = rotatePagesOperation.execute(executionContext);\n \n            // Save the result to the specified location.\n            result.saveAs("output/rotatePagesOutput.pdf");\n \n        } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n            LOGGER.error("Exception encountered while executing operation", e);\n        }\n    }\n \n    private static PageRanges getFirstPageRangeForRotation() {\n        // Specify pages for rotation.\n        PageRanges firstPageRange = new PageRanges();\n        // Add page 1.\n        firstPageRange.addSinglePage(1);\n \n        // Add pages 3 to 4.\n        firstPageRange.addRange(3, 4);\n        return firstPageRange;\n    }\n \n    private static PageRanges getSecondPageRangeForRotation() {\n        // Specify pages for rotation.\n        PageRanges secondPageRange = new PageRanges();\n        // Add page 2.\n        secondPageRange.addSinglePage(2);\n \n        return secondPageRange;\n    }\n  }\n')),(0,i.mdx)("h4",{id:"net"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd RotatePDFPages/\n// dotnet run RotatePDFPages.csproj\n\n  namespace RotatePDFPages\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            // Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Create a new operation instance\n                RotatePagesOperation rotatePagesOperation = RotatePagesOperation.CreateNew();\n \n                // Set operation input from a source file.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"rotatePagesInput.pdf");\n                rotatePagesOperation.SetInput(sourceFileRef);\n \n                // Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of\n                // the input PDF file.\n                PageRanges firstPageRange = GetFirstPageRangeForRotation();\n                rotatePagesOperation.SetAngleToRotatePagesBy(Angle._90, firstPageRange);\n \n                // Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of\n                // the input PDF file.\n                PageRanges secondPageRange = GetSecondPageRangeForRotation();\n                rotatePagesOperation.SetAngleToRotatePagesBy(Angle._180, secondPageRange);\n \n                // Execute the operation.\n                FileRef result = rotatePagesOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                result.SaveAs(Directory.GetCurrentDirectory() + "/output/rotatePagesOutput.pdf");\n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            // Catch more errors here . . .\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n \n        private static PageRanges GetFirstPageRangeForRotation()\n        {\n            // Specify pages for rotation.\n            PageRanges firstPageRange = new PageRanges();\n            // Add page 1.\n            firstPageRange.AddSinglePage(1);\n \n            // Add pages 3 to 4.\n            firstPageRange.AddRange(3, 4);\n            return firstPageRange;\n        }\n \n        private static PageRanges GetSecondPageRangeForRotation()\n        {\n            // Specify pages for rotation.\n            PageRanges secondPageRange = new PageRanges();\n            // Add page 2.\n            secondPageRange.AddSinglePage(2);\n \n            return secondPageRange;\n        }\n    }\n  }\n')),(0,i.mdx)("h4",{id:"node-js"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/rotatepages/rotate-pdf-pages.js\n\n  const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n \n  const getFirstPageRangeForRotation = () => {\n    // Specify pages for rotation.\n    const firstPageRange = new PDFServicesSdk.PageRanges();\n    // Add page 1.\n    firstPageRange.addSinglePage(1);\n \n    // Add pages 3 to 4.\n    firstPageRange.addPageRange(3, 4);\n \n    return firstPageRange;\n  };\n \n  const getSecondPageRangeForRotation = () => {\n    // Specify pages for rotation.\n    const secondPageRange = new PDFServicesSdk.PageRanges();\n    // Add page 2.\n    secondPageRange.addSinglePage(2);\n \n    return secondPageRange;\n  };\n \n  try {\n    // Initial setup, create credentials instance.\n    const credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n \n    // Create an ExecutionContext using credentials and create a new operation instance.\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n        rotatePagesOperation = PDFServicesSdk.RotatePages.Operation.createNew();\n \n    // Set operation input from a source file.\n    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/rotatePagesInput.pdf');\n    rotatePagesOperation.setInput(input);\n \n    // Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of\n    // the input PDF file.\n    const firstPageRange = getFirstPageRangeForRotation();\n    rotatePagesOperation.setAngleToRotatePagesBy(PDFServicesSdk.RotatePages.Angle._90, firstPageRange);\n \n    // Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of\n    // the input PDF file.\n    const secondPageRange = getSecondPageRangeForRotation();\n    rotatePagesOperation.setAngleToRotatePagesBy(PDFServicesSdk.RotatePages.Angle._180,secondPageRange);\n \n    // Execute the operation and Save the result to the specified location.\n    rotatePagesOperation.execute(executionContext)\n        .then(result => result.saveAsFile('output/rotatePagesOutput.pdf'))\n        .catch(err => {\n            if (err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n  } catch (err) {\n    console.log('Exception encountered while executing operation', err);\n  }\n")),(0,i.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Page-Manipulation\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/pagemanipulation\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718f",\n    "pageActions": [\n        {\n            "rotate": {\n                "angle": 90,\n                "pageRanges": [\n                    {\n                        "start": 1\n                    }\n                ]\n            }\n        },\n        {\n            "rotate": {\n                "angle": 180,\n                "pageRanges": [\n                    {\n                        "start": 2,\n                        "end": 2\n                    }\n                ]\n            }\n        }\n    ]\n}\'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-pageManipulation\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-rotate-pages-md-8d24f3033f2bba69f217.js.map