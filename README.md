# CDK project

* ECR Repository
* Lambda Function

## commands

 * `cdk deploy CdkLambdaContainerRepoStack`   create ECR repo
 * `cdk deploy CdkLambdaContainerStack`    create Lambda Function

## note

https://docs.aws.amazon.com/lambda/latest/dg/images-create.html

> The container image must be able to run on a read-only file system. Your function code can access a writable /tmp directory with 512 MB of storage.