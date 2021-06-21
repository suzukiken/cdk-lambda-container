FROM ubuntu:20.04

# install awslambdaric
# AWS Lambda runtime API
# Python runtime interface clients
# https://docs.aws.amazon.com/lambda/latest/dg/python-image.html
RUN apt update
RUN apt install python3 -y --no-install-recommends
RUN apt install python3-pip -y --no-install-recommends

RUN pip3 install awslambdaric

RUN mkdir /opt/function
WORKDIR /opt/function

# this is for debug. just respond. without qmk build.
ADD lambda_function.py /opt/function/lambda_function.py

# TODO; use Doker multi-stage build to clean up like
# https://docs.aws.amazon.com/lambda/latest/dg/images-create.html

ENTRYPOINT [ "/usr/bin/python3", "-m", "awslambdaric" ]
CMD [ "lambda_function.handler" ]
