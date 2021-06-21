Dockerイメージの作成

このリポのルートディレクトリで
```
docker build -t image-lambda .
```

ECRへプッシュ
----
```
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin xxxxxxxxxx.dkr.ecr.ap-northeast-1.amazonaws.com
```

```
docker tag image-lambda:latest xxxxxxxxx.dkr.ecr.ap-northeast-1.amazonaws.com/image-lambda:latest
docker push xxxxxxxxx.dkr.ecr.ap-northeast-1.amazonaws.com/image-lambda:latest
```

その他実験のために利用するコマンド（ENTRYPOINTとCMD）
```
docker run -d --name image-lambda image-lambda
docker exec -it image-lambda bash
```

Dockerの掃除
```
docker rmi -f $(docker images -a -q)
docker system prune
```
