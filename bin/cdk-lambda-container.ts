#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaContainerStack } from '../lib/cdk-lambda-container-stack';
import { CdkLambdaContainerRepoStack } from '../lib/cdk-lambda-container-repo-stack';

const app = new cdk.App();

const lambda = new CdkLambdaContainerStack(app, 'CdkLambdaContainerStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});

const repo = new CdkLambdaContainerRepoStack(app, 'CdkLambdaContainerRepoStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});

lambda.addDependency(repo)