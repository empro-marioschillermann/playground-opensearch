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
