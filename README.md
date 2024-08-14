# Run TypeScript

## Create optimized history_index

```sh
yarn ts-node src/create-optimized-history-index.ts
```

## Index activity documents

```sh
yarn ts-node src/index-documents-activity.ts
```

## Index activity documents with bulk

```sh
yarn ts-node src/index-documents-activity-bulk.ts
```

# Results

## Index 1000 documents

### With auto generated index

1. index-documents-activity.ts - 7.521s
2. index-documents-activity-bulk.ts 448.996ms

store.size: 9.5mb

### With optimized index

I have set all fields with a UUID to type keyword.

1. index-documents-activity.ts - 4.993s - 34% faster then auto generated index
2. index-documents-activity-bulk.ts - 324.612ms - 28% faster then auto generated index

store.size: 9.5mb

# Benchmark

## Connect to docker container

```sh
docker exec -it opensearch-benchmark /bin/bash
```

## Check workload is functional

```sh
opensearch-benchmark list workloads --workload-path=</path/to/workload/>
```

## Excecute Benchmark Workload

```sh
opensearch-benchmark execute-test --pipeline="benchmark-only" --workload-path=</path/to/workload/> --target-host=http://opensearch-node1:9200
```

## Get uncompressed-bytes for workload.json

### macOS

```sh
stat -f %z <index>-documents.json
```

### Linux

```sh
stat -c %s <index>-documents.json
```

### Alternatively

```sh
ls -lrt | grep <index>-documents.json
```
