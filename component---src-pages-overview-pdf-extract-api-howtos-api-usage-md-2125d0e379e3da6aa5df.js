"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2664],{86426:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return h}});var o,n=t(87462),d=t(63366),r=(t(15007),t(64983)),i=t(91515),l=["components"],s={},p=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),m={_frontmatter:s},c=i.Z;function h(e){var a=e.components,t=(0,d.Z)(e,l);return(0,r.mdx)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"using-our-apis"},"Using Our APIs"),(0,r.mdx)("p",null,"This is a step-by-step guide to help you get started with using our APIs. "),(0,r.mdx)("h2",{id:"step-1--getting-the-access-token"},"Step 1 : Getting the access token"),(0,r.mdx)("p",null,"PDF Services API endpoints are authenticated endpoints. You can get an access token by following the ",(0,r.mdx)("a",{parentName:"p",href:"../../authentication.md"},"link")," to start using our APIs."),(0,r.mdx)("h2",{id:"step-2--uploading-an-asset"},"Step 2 : Uploading an asset"),(0,r.mdx)("p",null,"After getting the access token, we need to upload the asset. Uploading an asset is a two-step process : "),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"First you need to get an upload pre-signed URI by using the following API.")),(0,r.mdx)("p",null,"You can read more about the API in detail ",(0,r.mdx)("a",{parentName:"p",href:"../../../apis/#operation/asset.uploadpresignedurl"},"here"),"."),(0,r.mdx)(p,{slots:"heading, code",repeat:"1",languages:"Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"rest-api"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"curl --location --request POST 'https://pdf-services.adobe.io/assets' \\\n--header 'X-API-Key: {{Placeholder for client_id}}' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"mediaType\": \"{{Placeholder for mediaType}}\"\n}'\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"On getting ",(0,r.mdx)("inlineCode",{parentName:"li"},"200")," response status from the above API, use the ",(0,r.mdx)("inlineCode",{parentName:"li"},"uploadUri")," field in response body of the above API to upload the asset directly to the cloud provider using a PUT API call. You will also get an ",(0,r.mdx)("inlineCode",{parentName:"li"},"assetID")," field which will be used in creating the job.")),(0,r.mdx)(p,{slots:"heading, code",repeat:"1",languages:"Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"rest-api-1"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"curl --location -g --request PUT 'https://dcplatformstorageservice-us-east-1.s3-accelerate.amazonaws.com/b37fd583-1ab6-4f49-99ef-d716180b5de4?X-Amz-Security-Token={{Placeholder for X-Amz-Security-Token}}&X-Amz-Algorithm={{Placeholder for X-Amz-Algorithm}}&X-Amz-Date={{Placeholder for X-Amz-Date}}&X-Amz-SignedHeaders={{Placeholder for X-Amz-SignedHeaders}}&X-Amz-Expires={{Placeholder for X-Amz-Expires}}&X-Amz-Credential={{Placeholder for X-Amz-Credential}}&X-Amz-Signature={{Placeholder for X-Amz-Signature}}' \\\n--header 'Content-Type: application/pdf' \\\n--data-binary '@{{Placeholder for file path}}'\n")),(0,r.mdx)("h2",{id:"step-3--creating-the-job"},"Step 3 : Creating the job"),(0,r.mdx)("p",null,"To create a job for the operation, please use the  ",(0,r.mdx)("inlineCode",{parentName:"p"},"assetID")," obtained in Step 2 in the API request body. On successful job submission you will get a status code of ",(0,r.mdx)("inlineCode",{parentName:"p"},"201")," and a response header ",(0,r.mdx)("inlineCode",{parentName:"p"},"location")," which will be used for polling. "),(0,r.mdx)("p",null,"For creating the job, please refer to the corresponding API spec for the particular ",(0,r.mdx)("a",{parentName:"p",href:"../../../apis"},"PDF Operation"),"."),(0,r.mdx)("h2",{id:"step-4--fetching-the-status"},"Step 4 : Fetching the status"),(0,r.mdx)("p",null,"Once the job is successfully created, you need to poll the at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"location")," returned in response header of Step 3 by using the following API "),(0,r.mdx)("p",null,"You can read more about the API in detail ",(0,r.mdx)("a",{parentName:"p",href:"../../../apis/#operation/pdfoperations.compresspdf.jobstatus"},"here"),"."),(0,r.mdx)(p,{slots:"heading, code",repeat:"1",languages:"Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"rest-api-2"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"curl --location -g --request GET 'https://pdf-services.adobe.io/operation/compresspdf/{{Placeholder for job id}}/status' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--header 'x-api-key: {{Placeholder for client id}}'\n")),(0,r.mdx)("h2",{id:"step-5--downloading-the-asset"},"Step 5 : Downloading the asset"),(0,r.mdx)("p",null,"On getting ",(0,r.mdx)("inlineCode",{parentName:"p"},"200")," response code from the poll API, you will receive a ",(0,r.mdx)("inlineCode",{parentName:"p"},"status")," field in the response body which can either be ",(0,r.mdx)("inlineCode",{parentName:"p"},"in progress"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"done")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"failed"),"."),(0,r.mdx)("p",null,"If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"status")," field is ",(0,r.mdx)("inlineCode",{parentName:"p"},"in progress")," you need to keep polling the location until it changes to ",(0,r.mdx)("inlineCode",{parentName:"p"},"done")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"failed"),"."),(0,r.mdx)("p",null,"If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"status")," field is ",(0,r.mdx)("inlineCode",{parentName:"p"},"done")," the response body will also have a download pre-signed URI in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"dowloadUri")," field, which will be used to download the asset directly from cloud provider by making the following API call"),(0,r.mdx)("p",null,"You can read more about the API in detail ",(0,r.mdx)("a",{parentName:"p",href:"../../../apis/#operation/asset.get"},"here"),"."),(0,r.mdx)(p,{slots:"heading, code",repeat:"1",languages:"Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"rest-api-3"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"curl --location -g --request GET 'https://dcplatformstorageservice-us-east-1.s3-accelerate.amazonaws.com/b37fd583-1ab6-4f49-99ef-d716180b5de4?X-Amz-Security-Token={{Placeholder for X-Amz-Security-Token}}&X-Amz-Algorithm={{Placeholder for X-Amz-Algorithm}}&X-Amz-Date={{Placeholder for X-Amz-Date}}&X-Amz-SignedHeaders={{Placeholder for X-Amz-SignedHeaders}}&X-Amz-Expires={{Placeholder for X-Amz-Expires}}&X-Amz-Credential={{Placeholder for X-Amz-Credential}}&X-Amz-Signature={{Placeholder for X-Amz-Signature}}'\n")),(0,r.mdx)("h2",{id:"there-you-go-your-job-is-completed-in-5-simple-steps"},"There you go! Your job is completed in 5 simple steps."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-extract-api-howtos-api-usage-md-2125d0e379e3da6aa5df.js.map