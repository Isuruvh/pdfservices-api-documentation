"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9724],{24833:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return m}});var o,r=t(87462),i=t(63366),a=(t(15007),t(64983)),c=t(91515),s=["components"],p={},d=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),l={_frontmatter:p},u=c.Z;function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.mdx)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"remove-protection"},"Remove Protection"),(0,a.mdx)("h2",{id:"remove-security-from-pdfs"},"Remove security from PDFs"),(0,a.mdx)("p",null,"Use the below sample to remove security from a PDF document."),(0,a.mdx)(d,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"java"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.removeprotection.RemoveProtection\n \n  public class RemoveProtection {\n \n    // Initialize the logger.\n    private static final Logger LOGGER = LoggerFactory.getLogger(RemoveProtection.class);\n \n    public static void main(String[] args) {\n        try {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n \n            // Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n            RemoveProtectionOperation removeProtectionOperation = RemoveProtectionOperation.createNew();\n \n            // Set operation input from a source file.\n            FileRef source = FileRef.createFromLocalFile("src/main/resources/removeProtectionInput.pdf");\n            removeProtectionOperation.setInput(source);\n \n            // Set the password for removing security from a PDF document.\n            removeProtectionOperation.setPassword("password");\n \n            // Execute the operation.\n            FileRef result = removeProtectionOperation.execute(executionContext);\n \n            // Save the result to the specified location.\n            result.saveAs("output/removeProtectionOutput.pdf");\n \n        } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n            LOGGER.error("Exception encountered while executing operation", e);\n        }\n    }\n  }  \n')),(0,a.mdx)("h4",{id:"net"},".NET"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd RemoveProtection/\n// dotnet run RemoveProtection.csproj\n\n  namespace RemoveProtection\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            //Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Create a new operation instance\n                RemoveProtectionOperation removeProtectionOperation = RemoveProtectionOperation.CreateNew();\n \n                // Set operation input from a source file.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"removeProtectionInput.pdf");\n                removeProtectionOperation.SetInput(sourceFileRef);\n \n                // Set the password for removing security from a PDF document.\n                removeProtectionOperation.SetPassword("password");\n \n                // Execute the operation.\n                FileRef result = removeProtectionOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                result.SaveAs(Directory.GetCurrentDirectory() + "/output/removeProtectionOutput.pdf");\n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            // Catch more errors here . . .\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n  }\n   \n')),(0,a.mdx)("h4",{id:"node-js"},"Node JS"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/removeprotection/remove-protection.js\n\n   const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n  \n   try {\n     // Initial setup, create credentials instance.\n     const credentials =  PDFServicesSdk.Credentials\n         .serviceAccountCredentialsBuilder()\n         .fromFile(\"pdfservices-api-credentials.json\")\n         .build();\n  \n     // Create an ExecutionContext using credentials\n     const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n  \n     // Create a new operation instance.\n     const removeProtectionOperation = PDFServicesSdk.RemoveProtection.Operation.createNew(),\n         input = PDFServicesSdk.FileRef.createFromLocalFile(\n             'resources/removeProtectionInput.pdf',\n             PDFServicesSdk.RemoveProtection.SupportedSourceFormat.pdf\n         );\n     // Set operation input from a source file.\n     removeProtectionOperation.setInput(input);\n  \n     // Set the password for removing security from a PDF document.\n     removeProtectionOperation.setPassword(\"password\");\n  \n     // Execute the operation and Save the result to the specified location.\n     removeProtectionOperation.execute(executionContext)\n         .then(result => result.saveAsFile('output/removeProtectionOutput.pdf'))\n         .catch(err => {\n             if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                 || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                 console.log('Exception encountered while executing operation', err);\n             } else {\n                 console.log('Exception encountered while executing operation', err);\n             }\n         });\n   } catch (err) {\n     console.log('Exception encountered while executing operation', err);\n   }\n")),(0,a.mdx)("h4",{id:"rest-api"},"Rest API"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-removeProtection\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n    \\"cpf:inputs\\": {\n        \\"params\\": {\n            \\"cpf:inline\\": {\n                \\"password\\": \\"password\\"\n            }\n        },\n        \\"documentIn\\": {\n            \\"cpf:location\\": \\"InputFile0\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    },\n    \\"cpf:engine\\": {\n        \\"repo:assetId\\": \\"urn:aaid:cpf:Service-d80dc37d3aee44a8839e3429360db9a7\\"\n    },\n    \\"cpf:outputs\\": {\n        \\"documentOut\\": {\n            \\"cpf:location\\": \\"multipartLabelOut\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\'\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-2-2-0-pdf-services-api-howtos-remove-protection-md-ee766e5e2905ddaea2f4.js.map