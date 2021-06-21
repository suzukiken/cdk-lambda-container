import json

def handler(event, context) :
    
    print(event)
    print(context)
    
    return {
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'statusCode': 200,
        'body': json.dumps({
            'message': "hello world !"
        })
    }
    
# this is for local test
if __name__ == "__main__":
    handler('', '')
