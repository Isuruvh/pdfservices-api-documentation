"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9079],{24776:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return u}});var t,o=i(87462),a=i(63366),r=(i(15007),i(64983)),s=i(91515),c=["components"],l={},d=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={_frontmatter:l},g=s.Z;function u(e){var n=e.components,i=(0,a.Z)(e,c);return(0,r.mdx)(g,(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"combine-pdf-files"},"Combine PDF Files"),(0,r.mdx)("p",null,"Combine two or more documents into a single PDF file"),(0,r.mdx)("h2",{id:"rest-api"},"Rest API"),(0,r.mdx)("p",null,"See our public API Reference for ",(0,r.mdx)("a",{parentName:"p",href:"../../../apis/#tag/Combine-PDF"},"Combine PDF")),(0,r.mdx)("h2",{id:"combine-files"},"Combine Files"),(0,r.mdx)("p",null,"This sample combines up to 20 PDF files into a single PDF file."),(0,r.mdx)("p",null,"Please refer the ",(0,r.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,r.mdx)(d,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.combinepdf.CombinePDF\n \n public class CombinePDF {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(CombinePDF.class);\n\n   public static void main(String[] args) {\n     try {\n       // Initial setup, create credentials instance.\n       Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n           .fromFile("pdfservices-api-credentials.json")\n           .build();\n\n       //Create an ExecutionContext using credentials and create a new operation instance.\n       ExecutionContext executionContext = ExecutionContext.create(credentials);\n       CombineFilesOperation combineFilesOperation = CombineFilesOperation.createNew();\n\n       // Add operation input from source files.\n       FileRef combineSource1 = FileRef.createFromLocalFile("src/main/resources/combineFilesInput1.pdf");\n       FileRef combineSource2 = FileRef.createFromLocalFile("src/main/resources/combineFilesInput2.pdf");\n       combineFilesOperation.addInput(combineSource1);\n       combineFilesOperation.addInput(combineSource2);\n\n       // Execute the operation.\n       FileRef result = combineFilesOperation.execute(executionContext);\n\n       // Save the result to the specified location.\n       result.saveAs("output/combineFilesOutput.pdf");\n\n     } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n       LOGGER.error("Exception encountered while executing operation", e);\n     }\n   }\n }\n  \n')),(0,r.mdx)("h4",{id:"net"},".NET"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd CombinePDF/\n// dotnet run CombinePDF.csproj\n\n namespace CombinePDF\n {\n   class Program\n   {\n     private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n     static void Main()\n     {\n       //Configure the logging\n       ConfigureLogging();\n       try\n       {\n         // Initial setup, create credentials instance.\n         Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                 .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                 .Build();\n\n         //Create an ExecutionContext using credentials and create a new operation instance.\n         ExecutionContext executionContext = ExecutionContext.Create(credentials);\n         CombineFilesOperation combineFilesOperation = CombineFilesOperation.CreateNew();\n\n         // Add operation input from source files.\n         FileRef combineSource1 = FileRef.CreateFromLocalFile(@"combineFilesInput1.pdf");\n         FileRef combineSource2 = FileRef.CreateFromLocalFile(@"combineFilesInput2.pdf");\n         combineFilesOperation.AddInput(combineSource1);\n         combineFilesOperation.AddInput(combineSource2);\n\n         // Execute the operation.\n         FileRef result = combineFilesOperation.Execute(executionContext);\n\n         // Save the result to the specified location.\n         result.SaveAs(Directory.GetCurrentDirectory() + "/output/combineFilesOutput.pdf");\n\n       }\n       catch (ServiceUsageException ex)\n       {\n         log.Error("Exception encountered while executing operation", ex);\n       }\n       // Catch more errors here. . .\n     }\n\n     static void ConfigureLogging()\n     {\n       ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n       XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n     }\n   }\n }\n')),(0,r.mdx)("h4",{id:"node-js"},"Node JS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/combinepdf/combine-pdf.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n \n  try {\n    // Initial setup, create credentials instance.\n    const credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n \n    // Create an ExecutionContext using credentials and create a new operation instance.\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n        combineFilesOperation = PDFServicesSdk.CombineFiles.Operation.createNew();\n \n    // Set operation input from a source file.\n    const combineSource1 = PDFServicesSdk.FileRef.createFromLocalFile('resources/combineFilesInput1.pdf'),\n        combineSource2 = PDFServicesSdk.FileRef.createFromLocalFile('resources/combineFilesInput2.pdf');\n    combineFilesOperation.addInput(combineSource1);\n    combineFilesOperation.addInput(combineSource2);\n \n    // Execute the operation and Save the result to the specified location.\n    combineFilesOperation.execute(executionContext)\n        .then(result => result.saveAsFile('output/combineFilesOutput.pdf'))\n        .catch(err => {\n            if (err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n  } catch (err) {\n    console.log('Exception encountered while executing operation', err);\n  }\n")),(0,r.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF\n\ncurl --location --request POST 'https://pdf-services.adobe.io/operation/combinepdf' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assets\": [\n        {\n            \"assetID\": \"urn:aaid:AS:UE1:23c30ee0-2c4d-46d6-87f2-087832fca718\"\n        },\n        {\n            \"assetID\": \"urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718\"\n        }\n    ]\n}'\n\n// Legacy API can be found here\n// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF\n")),(0,r.mdx)("h2",{id:"combine-pages-from-multiple-files"},"Combine pages from multiple files"),(0,r.mdx)("p",null,"This combine sample combines specific pages from up to 20 different PDF\nfiles into a single PDF file. Optional arguments allow specifying page\nranges for each file to combine in the output file."),(0,r.mdx)("p",null,"Please refer the ",(0,r.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,r.mdx)(d,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.combinepdf.CombinePDFWithPageRanges\n \n public class CombinePDFWithPageRanges {\n \n    // Initialize the logger.\n    private static final Logger LOGGER = LoggerFactory.getLogger(CombinePDFWithPageRanges.class);\n \n    public static void main(String[] args) {\n \n      try {\n \n        // Initial setup, create credentials instance.\n        Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n            .fromFile("pdfservices-api-credentials.json")\n            .build();\n \n        //Create an ExecutionContext using credentials and create a new operation instance.\n        ExecutionContext executionContext = ExecutionContext.create(credentials);\n        CombineFilesOperation combineFilesOperation = CombineFilesOperation.createNew();\n \n        // Create a FileRef instance from a local file.\n        FileRef firstFileToCombine = FileRef.createFromLocalFile("src/main/resources/combineFileWithPageRangeInput1.pdf");\n        PageRanges pageRangesForFirstFile = getPageRangeForFirstFile();\n        // Add the first file as input to the operation, along with its page range.\n        combineFilesOperation.addInput(firstFileToCombine, pageRangesForFirstFile);\n \n        // Create a second FileRef instance using a local file.\n        FileRef secondFileToCombine = FileRef.createFromLocalFile("src/main/resources/combineFileWithPageRangeInput2.pdf");\n        PageRanges pageRangesForSecondFile = getPageRangeForSecondFile();\n        // Add the second file as input to the operation, along with its page range.\n        combineFilesOperation.addInput(secondFileToCombine, pageRangesForSecondFile);\n \n        // Execute the operation.\n        FileRef result = combineFilesOperation.execute(executionContext);\n \n        // Save the result to the specified location.\n        result.saveAs("output/combineFilesWithPageOptionsOutput.pdf");\n \n      } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n        LOGGER.error("Exception encountered while executing operation", ex);\n      }\n    }\n \n    private static PageRanges getPageRangeForSecondFile() {\n      // Specify which pages of the second file are to be included in the combined file.\n      PageRanges pageRangesForSecondFile = new PageRanges();\n      // Add all pages including and after page 3.\n      pageRangesForSecondFile.addAllFrom(3);\n      return pageRangesForSecondFile;\n    }\n \n    private static PageRanges getPageRangeForFirstFile() {\n      // Specify which pages of the first file are to be included in the combined file.\n      PageRanges pageRangesForFirstFile = new PageRanges();\n      // Add page 1.\n      pageRangesForFirstFile.addSinglePage(1);\n      // Add page 2.\n      pageRangesForFirstFile.addSinglePage(2);\n      // Add pages 3 to 4.\n      pageRangesForFirstFile.addRange(3, 4);\n      return pageRangesForFirstFile;\n    }\n  }\n')),(0,r.mdx)("h4",{id:"net-1"},".NET"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd CombinePDFWithPageRanges/\n// dotnet run CombinePDFWithPageRanges.csproj\n\n  namespace CombinePDFWithPageRanges\n  {\n    class Program\n    {\n      private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n      static void Main()\n      {\n        //Configure the logging\n        ConfigureLogging();\n        try\n        {\n \n          // Initial setup, create credentials instance.\n          Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                  .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                  .Build();\n \n          //Create an ExecutionContext using credentials and create a new operation instance.\n          ExecutionContext executionContext = ExecutionContext.Create(credentials);\n          CombineFilesOperation combineFilesOperation = CombineFilesOperation.CreateNew();\n \n          // Create a FileRef instance from a local file.\n          FileRef firstFileToCombine = FileRef.CreateFromLocalFile(@"combineFileWithPageRangeInput1.pdf");\n          PageRanges pageRangesForFirstFile = GetPageRangeForFirstFile();\n          // Add the first file as input to the operation, along with its page range.\n          combineFilesOperation.AddInput(firstFileToCombine, pageRangesForFirstFile);\n \n          // Create a second FileRef instance using a local file.\n          FileRef secondFileToCombine = FileRef.CreateFromLocalFile(@"combineFileWithPageRangeInput2.pdf");\n          PageRanges pageRangesForSecondFile = GetPageRangeForSecondFile();\n          // Add the second file as input to the operation, along with its page range.\n          combineFilesOperation.AddInput(secondFileToCombine, pageRangesForSecondFile);\n \n          // Execute the operation.\n          FileRef result = combineFilesOperation.Execute(executionContext);\n \n          // Save the result to the specified location.\n          result.SaveAs(Directory.GetCurrentDirectory() + "/output/combineFilesOutput.pdf");\n \n        }\n        catch (ServiceUsageException ex)\n        {\n          log.Error("Exception encountered while executing operation", ex);\n        }\n        // Catch more errors here. . .\n      }\n \n      private static PageRanges GetPageRangeForSecondFile()\n      {\n        // Specify which pages of the second file are to be included in the combined file.\n        PageRanges pageRangesForSecondFile = new PageRanges();\n        // Add all pages including and after page 5.\n        pageRangesForSecondFile.AddAllFrom(5);\n        return pageRangesForSecondFile;\n      }\n \n      private static PageRanges GetPageRangeForFirstFile()\n      {\n        // Specify which pages of the first file are to be included in the combined file.\n        PageRanges pageRangesForFirstFile = new PageRanges();\n        // Add page 2.\n        pageRangesForFirstFile.AddSinglePage(2);\n        // Add page 3.\n        pageRangesForFirstFile.AddSinglePage(3);\n        // Add pages 5 to 7.\n        pageRangesForFirstFile.AddRange(5, 7);\n        return pageRangesForFirstFile;\n      }\n \n      static void ConfigureLogging()\n      {\n        ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n        XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n      }\n    }\n  }\n')),(0,r.mdx)("h4",{id:"node-js-1"},"Node JS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/combinepdf/combine-pdf-with-page-ranges.js\n\n  const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n \n  const getPageRangesForFirstFile = () => {\n    // Specify which pages of the first file are to be included in the combined file.\n    const pageRangesForFirstFile = new PDFServicesSdk.PageRanges();\n    // Add page 1.\n    pageRangesForFirstFile.addSinglePage(1);\n    // Add page 2.\n    pageRangesForFirstFile.addSinglePage(2);\n    // Add pages 3 to 4.\n    pageRangesForFirstFile.addPageRange(3, 4);\n    return pageRangesForFirstFile;\n  };\n \n  const getPageRangesForSecondFile = () => {\n    // Specify which pages of the second file are to be included in the combined file.\n    const pageRangesForSecondFile = new PDFServicesSdk.PageRanges();\n    // Add all pages including and after page 3.\n    pageRangesForSecondFile.addAllFrom(3);\n    return pageRangesForSecondFile;\n  };\n \n  try {\n    // Initial setup, create credentials instance.\n    const credentials =  PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n \n    // Create an ExecutionContext using credentials and create a new operation instance.\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n        combineFilesOperation = PDFServicesSdk.CombineFiles.Operation.createNew();\n \n    // Create a FileRef instance from a local file.\n    const combineSource1 = PDFServicesSdk.FileRef.createFromLocalFile('resources/combineFilesInput1.pdf'),\n        pageRangesForFirstFile = getPageRangesForFirstFile();\n    // Add the first file as input to the operation, along with its page range.\n    combineFilesOperation.addInput(combineSource1, pageRangesForFirstFile);\n \n    // Create a second FileRef instance using a local file.\n    const combineSource2 = PDFServicesSdk.FileRef.createFromLocalFile('resources/combineFilesInput2.pdf'),\n        pageRangesForSecondFile = getPageRangesForSecondFile();\n    // Add the second file as input to the operation, along with its page range.\n    combineFilesOperation.addInput(combineSource2, pageRangesForSecondFile);\n \n    // Execute the operation and Save the result to the specified location.\n    combineFilesOperation.execute(executionContext)\n        .then(result => result.saveAsFile('output/combineFilesWithPageRangesOutput.pdf'))\n        .catch(err => {\n            if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n  } catch (err) {\n    console.log('Exception encountered while executing operation', err);\n  }\n")),(0,r.mdx)("h4",{id:"rest-api-2"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/combinepdf\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "assets": [\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 1,\n                    "end": 3\n                }\n            ]\n        },\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 2,\n                    "end": 4\n                }\n            ]\n        }\n    ]\n}\'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-combine-pdf-md-79e7414aae47df4ed705.js.map