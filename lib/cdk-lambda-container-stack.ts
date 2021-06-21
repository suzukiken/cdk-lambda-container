import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as ecr from '@aws-cdk/aws-ecr';

export class CdkLambdaContainerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repository = ecr.Repository.fromRepositoryName(this, 'Repository', 'image-lambda')
    
    new lambda.DockerImageFunction(this, 'ECRFunction', {
      code: lambda.DockerImageCode.fromEcr(repository),
    })
  }
}
