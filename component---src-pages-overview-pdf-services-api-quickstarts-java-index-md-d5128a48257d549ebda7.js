"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6090],{70589:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return u}});var n,i=a(87462),o=a(63366),p=(a(15007),a(64983)),s=a(91515),r=["components"],c={},d=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),l={_frontmatter:c},m=s.Z;function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,p.mdx)(m,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"quickstart-for-adobe-pdf-services-api-java"},"Quickstart for Adobe PDF Services API (Java)"),(0,p.mdx)("p",null,"To get started using Adobe PDF Services API, let's walk through a simple scenario - taking an input PDF document and exporting it to Microsoft Word. In this guide, we will walk you through the complete process for creating a program that will accomplish this task. "),(0,p.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,p.mdx)("p",null,"To complete this guide, you will need:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"Java")," - Java 8 or higher is required. "),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"Maven")),(0,p.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,p.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,p.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,p.mdx)("p",null,"1) To begin, open your browser to ",(0,p.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api"},"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.71698113207546%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dda86/shot1.webp 265w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/010e6/shot1.webp 530w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/28773/shot1.png 265w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/a0177/shot1.png 530w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,p.mdx)("p",null,'3) Change the "Choose language" setting to "Java". '),(0,p.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,p.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"932px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.86792452830188%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/7125fb5b89155e60fea3de6f43f67872/dda86/shot2.webp 265w","/pdfservices-api-documentation/static/7125fb5b89155e60fea3de6f43f67872/010e6/shot2.webp 530w","/pdfservices-api-documentation/static/7125fb5b89155e60fea3de6f43f67872/21cee/shot2.webp 932w"],sizes:"(max-width: 932px) 100vw, 932px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/7125fb5b89155e60fea3de6f43f67872/28773/shot2.png 265w","/pdfservices-api-documentation/static/7125fb5b89155e60fea3de6f43f67872/a0177/shot2.png 530w","/pdfservices-api-documentation/static/7125fb5b89155e60fea3de6f43f67872/79586/shot2.png 932w"],sizes:"(max-width: 932px) 100vw, 932px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/7125fb5b89155e60fea3de6f43f67872/79586/shot2.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"6) After your credentials are created, they are automatically downloaded:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"913px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.075471698113205%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/dda86/shot3.webp 265w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/010e6/shot3.webp 530w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/4d027/shot3.webp 913w"],sizes:"(max-width: 913px) 100vw, 913px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/28773/shot3.png 265w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/a0177/shot3.png 530w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/200fa/shot3.png 913w"],sizes:"(max-width: 913px) 100vw, 913px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/200fa/shot3.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,p.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-JavaSamples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"329px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.20754716981132%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/23b4101f54604aa101c18f54a85dde1a/dda86/shot5.webp 265w","/pdfservices-api-documentation/static/23b4101f54604aa101c18f54a85dde1a/f80b5/shot5.webp 329w"],sizes:"(max-width: 329px) 100vw, 329px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/23b4101f54604aa101c18f54a85dde1a/28773/shot5.png 265w","/pdfservices-api-documentation/static/23b4101f54604aa101c18f54a85dde1a/9b18f/shot5.png 329w"],sizes:"(max-width: 329px) 100vw, 329px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/23b4101f54604aa101c18f54a85dde1a/9b18f/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"2) We need two things from this download. The ",(0,p.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,p.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file found in the samples directory:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"729px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.52830188679246%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/a9ca39334d9cbbf144c0c5c74a0d10bb/dda86/shot6.webp 265w","/pdfservices-api-documentation/static/a9ca39334d9cbbf144c0c5c74a0d10bb/010e6/shot6.webp 530w","/pdfservices-api-documentation/static/a9ca39334d9cbbf144c0c5c74a0d10bb/a8c67/shot6.webp 729w"],sizes:"(max-width: 729px) 100vw, 729px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/a9ca39334d9cbbf144c0c5c74a0d10bb/28773/shot6.png 265w","/pdfservices-api-documentation/static/a9ca39334d9cbbf144c0c5c74a0d10bb/a0177/shot6.png 530w","/pdfservices-api-documentation/static/a9ca39334d9cbbf144c0c5c74a0d10bb/06066/shot6.png 729w"],sizes:"(max-width: 729px) 100vw, 729px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/a9ca39334d9cbbf144c0c5c74a0d10bb/06066/shot6.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"Note that that private key is ",(0,p.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,p.mdx)("p",null,"3) Take these two files and place them in a new directory."),(0,p.mdx)("p",null,"4) In this directory, create a new file named ",(0,p.mdx)("inlineCode",{parentName:"p"},"pom.xml")," and copy the following contents:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>com.adobe.documentservices</groupId>\n  <artifactId>pdfservices-sdk-pds-guide</artifactId>\n  <version>1</version>\n\n  <name>PDF Services Java SDK Samples</name>\n\n  <properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n    <pdfservices.sdk.version>2.2.2</pdfservices.sdk.version>\n  </properties>\n\n  <dependencies>\n\n    <dependency>\n      <groupId>com.adobe.documentservices</groupId>\n      <artifactId>pdfservices-sdk</artifactId>\n      <version>${pdfservices.sdk.version}</version>\n    </dependency>\n\n    \x3c!--        log4j2 dependency to showcase the use of log4j2 with slf4j API--\x3e\n    \x3c!-- https://mvnrepository.com/artifact/org.slf4j/slf4j-log4j12 --\x3e\n    <dependency>\n      <groupId>org.apache.logging.log4j</groupId>\n      <artifactId>log4j-slf4j-impl</artifactId>\n      <version>2.17.1</version>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.8.0</version>\n        <configuration>\n          <source>${maven.compiler.source}</source>\n          <target>${maven.compiler.target}</target>\n        </configuration>\n      </plugin>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-shade-plugin</artifactId>\n        <version>3.2.4</version>\n        <configuration>\n          <filters>\n            <filter>\n              <artifact>*:*</artifact>\n              <excludes>\n                <exclude>META-INF/*.SF</exclude>\n                <exclude>META-INF/*.DSA</exclude>\n                <exclude>META-INF/*.RSA</exclude>\n              </excludes>\n            </filter>\n          </filters>\n        </configuration>\n        <executions>\n          <execution>\n            <phase>package</phase>\n            <goals>\n              <goal>shade</goal>\n            </goals>\n          </execution>\n        </executions>\n      </plugin>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-jar-plugin</artifactId>\n        <version>3.0.2</version>\n        <configuration>\n          <archive>\n            <manifest>\n              <addClasspath>true</addClasspath>\n              <classpathPrefix>lib/</classpathPrefix>\n              <mainClass>ExportPDFToWord</mainClass>\n            </manifest>\n          </archive>\n        </configuration>\n      </plugin>\n      <plugin>\n        <groupId>org.codehaus.mojo</groupId>\n        <artifactId>exec-maven-plugin</artifactId>\n        <version>1.5.0</version>\n        <executions>\n          <execution>\n            <goals>\n              <goal>java</goal>\n            </goals>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n')),(0,p.mdx)("p",null,"This file will define what dependencies we need and how the application will be built. "),(0,p.mdx)("p",null,"Our application will take a PDF, ",(0,p.mdx)("inlineCode",{parentName:"p"},"Bodea Brochure.pdf")," (downloadable from ",(0,p.mdx)("a",{href:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"},"here"),") and convert it to a Microsoft Word document, ",(0,p.mdx)("inlineCode",{parentName:"p"},"Bodea Brochure.docx"),"."),(0,p.mdx)("p",null,"5) In your editor, open the directory where you previously copied the credentials, and create a new directory, ",(0,p.mdx)("inlineCode",{parentName:"p"},"src/main/java"),". In that directory, create ",(0,p.mdx)("inlineCode",{parentName:"p"},"ExportPDFToWord.java"),". "),(0,p.mdx)("p",null,"Now you're ready to begin coding."),(0,p.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,p.mdx)("p",null,"1) We'll begin by including our required dependencies:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},"import com.adobe.pdfservices.operation.ExecutionContext;\nimport com.adobe.pdfservices.operation.auth.Credentials;\nimport com.adobe.pdfservices.operation.exception.SdkException;\nimport com.adobe.pdfservices.operation.exception.ServiceApiException;\nimport com.adobe.pdfservices.operation.exception.ServiceUsageException;\nimport com.adobe.pdfservices.operation.io.FileRef;\nimport com.adobe.pdfservices.operation.pdfops.ExportPDFOperation;\nimport com.adobe.pdfservices.operation.pdfops.options.exportpdf.ExportPDFTargetFormat;\nimport org.slf4j.LoggerFactory;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n")),(0,p.mdx)("p",null,"2) Now let's define our main class:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},"public class ExportPDFToWord {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(ExportPDFToWord.class);\n\n    public static void main(String[] args) {\n\n    }\n\n}\n")),(0,p.mdx)("p",null,"3) Inside our class, we'll begin by defining our input PDF and output filenames. If the output file already exists, it will be deleted:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'String output_file = "./Bodea Brochure.docx";\nFiles.deleteIfExists(Paths.get(output_file));\n\nString input_file = "./Bodea Brochure.pdf";\n\nSystem.out.println("Exporting " + input_file + " to " + output_file + "\\n");\n')),(0,p.mdx)("p",null,"4) Next, we can create our credentials and use them:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Initial setup, create credentials instance.\nCredentials credentials = Credentials.serviceAccountCredentialsBuilder()\n        .fromFile("pdfservices-api-credentials.json")\n        .build();\n\n// Create an ExecutionContext using credentials.\nExecutionContext executionContext = ExecutionContext.create(credentials);\n')),(0,p.mdx)("p",null,"5) Now, let's create the operation:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},"ExportPDFOperation exportPDFOperation = ExportPDFOperation.createNew(ExportPDFTargetFormat.DOCX);\n\n// Provide an input FileRef for the operation\nFileRef source = FileRef.createFromLocalFile(input_file);\nexportPDFOperation.setInput(source);\n\n")),(0,p.mdx)("p",null,"This set of code defines what we're doing (an Export operation), points to our local file and specifies the input is a PDF, and then defines options for the Export call. In this example, the only option is the export format, DOCX."),(0,p.mdx)("p",null,"6) The next code block executes the operation:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Execute the operation\nFileRef result = exportPDFOperation.execute(executionContext);\n\n// Save the result at the specified location\nresult.saveAs(output_file);\n")),(0,p.mdx)("p",null,"This code runs the Export process and then stores the result Word document to the file system. "),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"786px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.943396226415095%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/bd2adb937a916787ae0cb7256b312979/dda86/shot9.webp 265w","/pdfservices-api-documentation/static/bd2adb937a916787ae0cb7256b312979/010e6/shot9.webp 530w","/pdfservices-api-documentation/static/bd2adb937a916787ae0cb7256b312979/f6aa4/shot9.webp 786w"],sizes:"(max-width: 786px) 100vw, 786px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/bd2adb937a916787ae0cb7256b312979/28773/shot9.png 265w","/pdfservices-api-documentation/static/bd2adb937a916787ae0cb7256b312979/a0177/shot9.png 530w","/pdfservices-api-documentation/static/bd2adb937a916787ae0cb7256b312979/d703b/shot9.png 786w"],sizes:"(max-width: 786px) 100vw, 786px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/bd2adb937a916787ae0cb7256b312979/d703b/shot9.png",alt:"Example running in the command line",title:"Example running in the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"Here's the complete application (",(0,p.mdx)("inlineCode",{parentName:"p"},"src/main/java/ExportPDFToWord.java"),"):"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'import com.adobe.pdfservices.operation.ExecutionContext;\nimport com.adobe.pdfservices.operation.auth.Credentials;\nimport com.adobe.pdfservices.operation.exception.SdkException;\nimport com.adobe.pdfservices.operation.exception.ServiceApiException;\nimport com.adobe.pdfservices.operation.exception.ServiceUsageException;\nimport com.adobe.pdfservices.operation.io.FileRef;\nimport com.adobe.pdfservices.operation.pdfops.ExportPDFOperation;\nimport com.adobe.pdfservices.operation.pdfops.options.exportpdf.ExportPDFTargetFormat;\nimport org.slf4j.LoggerFactory;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class ExportPDFToWord {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(ExportPDFToWord.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n            String output_file = "./Bodea Brochure.docx";\n            Files.deleteIfExists(Paths.get(output_file));\n\n            String input_file = "./Bodea Brochure.pdf";\n\n            System.out.println("Exporting " + input_file + " to " + output_file + "\\n");\n\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            // Create an ExecutionContext using credentials.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            ExportPDFOperation exportPDFOperation = ExportPDFOperation.createNew(ExportPDFTargetFormat.DOCX);\n\n            // Provide an input FileRef for the operation\n            FileRef source = FileRef.createFromLocalFile(input_file);\n            exportPDFOperation.setInput(source);\n\n            // Execute the operation\n            FileRef result = exportPDFOperation.execute(executionContext);\n\n            // Save the result at the specified location\n            result.saveAs(output_file);\n\n            System.out.println("All Done");\n            \n\n        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException e) {\n            LOGGER.error("Exception encountered while executing operation", e);\n        }\n    }\n}\n')),(0,p.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,p.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,p.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/pdf-services-api/"},"review the documentation")," for many other examples and reach out on our ",(0,p.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-quickstarts-java-index-md-d5128a48257d549ebda7.js.map